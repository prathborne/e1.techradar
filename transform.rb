#!/usr/bin/env ruby

require "json"
require "liquid"


class Hash
  def remap(hash={})
    each { |k,v| yield hash, k, v }
    hash
  end
end


class Layout

  OFFSET = {
    "Data Mgt" => 0,
    "Techniques; Frameworks & Tools" => 95,
    "Platforms & Infrastructure" => 180, 
    "Languages" => 270,
  }

  def self.angles(start, step)
    Proc.new do
      Range.new(start, 90-start).step(step).to_a.shuffle +
      Range.new(start + (step * 0.5).to_i, 90-start).step(step).to_a.shuffle
    end
  end

  ANGLES = {
    adopt: angles(10, 15),
    trial: angles(8, 12), 
    assess: angles(6, 10), 
    hold: angles(4, 8), 
  }

  def self.instance(quadrant, ring)
    @instances ||= {}
    @instances["#{quadrant}:#{ring.to_s}"] ||= Layout.new(quadrant, ring)
  end

  def initialize(quadrant, ring)
    @offset = OFFSET[quadrant]
    @angles = ANGLES[ring].call
  end

  def next_angle
    @offset + @angles.shift.to_i
  end
end


class Blip
  attr_reader :name, :quadrant, :score

  def initialize(name, quadrant, score)
    @name, @quadrant, @score = name, quadrant, score
    @moved = false
  end

  def moved!
    @moved = true
  end

  def ring
    return :adopt if score >= 1.5
    return :trial if score >= 0
    return :assess if score >= -1
    return :hold
  end

  def radius
    return (30..90).to_a.sample if ring == :adopt
    # return (40 + (2 - score) * (60 / 0.5)).to_i if ring == :adopt
    return (110 + (1.5 - score) * (80 / 1.5)).to_i if ring == :trial
    return (210 + (0 - score) * (80 / 1)).to_i if ring == :assess
    return (310 + (-1 - score) * (80 / 1)).to_i
  end

  def angle
    Layout.instance(quadrant, ring).next_angle
  end

  def movement
    @moved ? "t" : "c"
  end

  def as_json
    { name: name, pc: { r: radius, t: angle }, movement: movement }
  end
end


class Radar
  def initialize(path)
    @blips = Radar.parse(path)
  end

  def [](name)
    @blips[name]
  end

  def track_moves(previous)
    @blips.each do |name, blip|
      prev_ring = previous[name].ring rescue "nil"
      if prev_ring != blip.ring
        puts "#{name}: #{prev_ring.upcase} --> #{blip.ring.upcase}"
        blip.moved!
      end
    end
  end

  # render blips as json into js template
  def render
    snippets = @blips.values.group_by(&:quadrant).remap do |hash, key, value|
      short_key = key.scan(/\w+/).first.downcase
      hash[short_key] = JSON.pretty_generate(value.sort_by(&:score).reverse.map(&:as_json))
    end

    puts snippets

    template = Liquid::Template.parse(open("radar_data.js.liquid").read)
    open("radar_data.js", "w") do |out|
      out.puts template.render(snippets)
    end
  end

  # parse tab-separated data (exported from google doc)
  def self.parse(path)
    blips = {}
    rows = 0
    open(path).each do |line|
      if rows > 0
          cols = line.split(",")
          name, quadrant, score, skip = cols[0], cols[1], cols[2], cols[4]
          raise "PLEASE DELETE HEADER LINE: #{path}" if score == "AVG"
          next if skip == "TRUE"
          next if score.nil? || score.strip.empty?
          blip = Blip.new(name, quadrant, score.to_f)
          blips[blip.name] = blip
      end
      rows = rows + 1
    end
    blips
  end
end

files = Dir["data/*.csv"]
radar = Radar.new(files.pop)
previous = files.pop
radar.track_moves(Radar.new(previous)) if previous
radar.render

