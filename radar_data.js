var h = 1165;
var w = 1450;
var lastUpdated = new Date(document. .lastModified);

var radar_arcs = [
  {'r': 100, 'name': 'ADOPT'},
  {'r': 200, 'name': 'TRIAL'},
  {'r': 300, 'name': 'ASSESS'},
  {'r': 400, 'name': 'HOLD'}
];

// movement:
//   t = moved (triangle)
//   c = stayed put (circle)
//
// blipSize: 
//  This is optional, if you omit this property, then blip size will be 70.
//
// url:
//  This is optional, if you add it then blips will be clickable to some URL.
//
// pc: (polar coordinates)
//  r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//  t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
var radar_data = [
  { 
    "quadrant": "Techniques; Frameworks & Tools",
    "left" : 45,
    "top" : 188,
    "color" : "#8FA227",
    "items" : [
  {
    "name": "Fiddler",
    "pc": {
      "r": 78,
      "t": 150
    },
    "movement": "c"
  },
  {
    "name": "StyleLint",
    "pc": {
      "r": 64,
      "t": 135
    },
    "movement": "c"
  },
  {
    "name": "Enzyme",
    "pc": {
      "r": 36,
      "t": 105
    },
    "movement": "c"
  },
  {
    "name": "ESLint",
    "pc": {
      "r": 66,
      "t": 120
    },
    "movement": "c"
  },
  {
    "name": "PostCSS",
    "pc": {
      "r": 40,
      "t": 165
    },
    "movement": "c"
  },
  {
    "name": "Fisheye",
    "pc": {
      "r": 66,
      "t": 142
    },
    "movement": "c"
  },
  {
    "name": "Crucible",
    "pc": {
      "r": 79,
      "t": 112
    },
    "movement": "c"
  },
  {
    "name": "Appium",
    "pc": {
      "r": 82,
      "t": 172
    },
    "movement": "c"
  },
  {
    "name": "Selenium",
    "pc": {
      "r": 39,
      "t": 127
    },
    "movement": "c"
  },
  {
    "name": "xUnit",
    "pc": {
      "r": 39,
      "t": 157
    },
    "movement": "c"
  },
  {
    "name": "Karma",
    "pc": {
      "r": 59,
      "t": 95
    },
    "movement": "c"
  },
  {
    "name": "Jmeter",
    "pc": {
      "r": 55,
      "t": 95
    },
    "movement": "c"
  },
  {
    "name": "Redux",
    "pc": {
      "r": 35,
      "t": 95
    },
    "movement": "c"
  },
  {
    "name": "PostMan",
    "pc": {
      "r": 55,
      "t": 95
    },
    "movement": "c"
  },
  {
    "name": "OpenAPI (Swagger)",
    "pc": {
      "r": 73,
      "t": 95
    },
    "movement": "c"
  },
  {
    "name": "Chai",
    "pc": {
      "r": 54,
      "t": 95
    },
    "movement": "c"
  },
  {
    "name": "Sinon",
    "pc": {
      "r": 37,
      "t": 95
    },
    "movement": "c"
  },
  {
    "name": "JSON.net",
    "pc": {
      "r": 87,
      "t": 95
    },
    "movement": "c"
  },
  {
    "name": "Topshelf",
    "pc": {
      "r": 72,
      "t": 95
    },
    "movement": "c"
  },
  {
    "name": "Lodash",
    "pc": {
      "r": 39,
      "t": 95
    },
    "movement": "c"
  },
  {
    "name": "Asp.Net Web API",
    "pc": {
      "r": 51,
      "t": 95
    },
    "movement": "c"
  },
  {
    "name": "Autofac",
    "pc": {
      "r": 47,
      "t": 95
    },
    "movement": "c"
  },
  {
    "name": "SoapUI",
    "pc": {
      "r": 71,
      "t": 95
    },
    "movement": "c"
  },
  {
    "name": "MassTransit",
    "pc": {
      "r": 70,
      "t": 95
    },
    "movement": "c"
  },
  {
    "name": "Quartz.net",
    "pc": {
      "r": 38,
      "t": 95
    },
    "movement": "c"
  },
  {
    "name": "JSReport",
    "pc": {
      "r": 56,
      "t": 95
    },
    "movement": "c"
  },
  {
    "name": "Automapper",
    "pc": {
      "r": 40,
      "t": 95
    },
    "movement": "c"
  },
  {
    "name": "Bootstrap",
    "pc": {
      "r": 58,
      "t": 95
    },
    "movement": "c"
  },
  {
    "name": "Moq",
    "pc": {
      "r": 74,
      "t": 95
    },
    "movement": "c"
  },
  {
    "name": "EPPPlus",
    "pc": {
      "r": 131,
      "t": 115
    },
    "movement": "c"
  },
  {
    "name": "ReactJS",
    "pc": {
      "r": 131,
      "t": 151
    },
    "movement": "c"
  },
  {
    "name": "BrowserSync",
    "pc": {
      "r": 142,
      "t": 163
    },
    "movement": "c"
  },
  {
    "name": "Asp.Net Core",
    "pc": {
      "r": 147,
      "t": 139
    },
    "movement": "c"
  },
  {
    "name": "Node.js ",
    "pc": {
      "r": 158,
      "t": 127
    },
    "movement": "c"
  },
  {
    "name": "Babel",
    "pc": {
      "r": 168,
      "t": 175
    },
    "movement": "c"
  },
  {
    "name": "Vue",
    "pc": {
      "r": 242,
      "t": 141
    },
    "movement": "c"
  },
  {
    "name": "Qt",
    "pc": {
      "r": 250,
      "t": 101
    },
    "movement": "c"
  },
  {
    "name": "Nightwatch",
    "pc": {
      "r": 250,
      "t": 111
    },
    "movement": "c"
  },
  {
    "name": "jQuery",
    "pc": {
      "r": 266,
      "t": 171
    },
    "movement": "c"
  },
  {
    "name": "Flux",
    "pc": {
      "r": 266,
      "t": 161
    },
    "movement": "c"
  },
  {
    "name": "Jade",
    "pc": {
      "r": 318,
      "t": 123
    },
    "movement": "c"
  },
  {
    "name": "Unity",
    "pc": {
      "r": 358,
      "t": 115
    },
    "movement": "c"
  },
  {
    "name": "Nunit",
    "pc": {
      "r": 358,
      "t": 163
    },
    "movement": "c"
  },
  {
    "name": "Asp.Net MVC",
    "pc": {
      "r": 358,
      "t": 131
    },
    "movement": "c"
  },
  {
    "name": "EasyNetQ",
    "pc": {
      "r": 374,
      "t": 147
    },
    "movement": "c"
  },
  {
    "name": "Entity Framework",
    "pc": {
      "r": 390,
      "t": 171
    },
    "movement": "c"
  },
  {
    "name": "AngularJS 1.x",
    "pc": {
      "r": 390,
      "t": 179
    },
    "movement": "c"
  }
]
  },
  { 
    "quadrant": "Data Management",
    "left": w-300+30,
    "top" : 188,
    "color" : "#587486",
    "items" : [
  {
    "name": "AWS S3",
    "pc": {
      "r": 81,
      "t": 10
    },
    "movement": "c"
  },
  {
    "name": "AWS RDS",
    "pc": {
      "r": 59,
      "t": 55
    },
    "movement": "c"
  },
  {
    "name": "SQL Server 2016",
    "pc": {
      "r": 80,
      "t": 25
    },
    "movement": "c"
  },
  {
    "name": "Tableau",
    "pc": {
      "r": 37,
      "t": 40
    },
    "movement": "c"
  },
  {
    "name": "Redis",
    "pc": {
      "r": 62,
      "t": 70
    },
    "movement": "c"
  },
  {
    "name": "DataModeler",
    "pc": {
      "r": 41,
      "t": 77
    },
    "movement": "c"
  },
  {
    "name": "ElasticSearch",
    "pc": {
      "r": 42,
      "t": 17
    },
    "movement": "c"
  },
  {
    "name": "CacheManager",
    "pc": {
      "r": 41,
      "t": 62
    },
    "movement": "c"
  },
  {
    "name": "Flink",
    "pc": {
      "r": 184,
      "t": 20
    },
    "movement": "c"
  },
  {
    "name": "AWS DynamoDB",
    "pc": {
      "r": 234,
      "t": 16
    },
    "movement": "c"
  },
  {
    "name": "RabbitMQ",
    "pc": {
      "r": 318,
      "t": 28
    },
    "movement": "c"
  },
  {
    "name": "Talend Open Studio",
    "pc": {
      "r": 326,
      "t": 60
    },
    "movement": "c"
  },
  {
    "name": "MemCached",
    "pc": {
      "r": 390,
      "t": 4
    },
    "movement": "c"
  }
]
  },
  {   
    "quadrant": "Platforms & Infrastructure",
    "left" :45,
    "top" : (h/2 + 38),
    "color" : "#DC6F1D",
    "items" : [
  {
    "name": "Docker",
    "pc": {
      "r": 60,
      "t": 235
    },
    "movement": "c"
  },
  {
    "name": "AWS Cloudtrail",
    "pc": {
      "r": 67,
      "t": 250
    },
    "movement": "c"
  },
  {
    "name": "AWS ELB",
    "pc": {
      "r": 52,
      "t": 220
    },
    "movement": "c"
  },
  {
    "name": "AWS EC2",
    "pc": {
      "r": 71,
      "t": 190
    },
    "movement": "c"
  },
  {
    "name": "Yarn",
    "pc": {
      "r": 33,
      "t": 205
    },
    "movement": "c"
  },
  {
    "name": "Gulp",
    "pc": {
      "r": 60,
      "t": 257
    },
    "movement": "c"
  },
  {
    "name": "NPM",
    "pc": {
      "r": 39,
      "t": 227
    },
    "movement": "c"
  },
  {
    "name": "Powershell 4",
    "pc": {
      "r": 76,
      "t": 242
    },
    "movement": "c"
  },
  {
    "name": "Webpack",
    "pc": {
      "r": 57,
      "t": 212
    },
    "movement": "c"
  },
  {
    "name": "Nginx",
    "pc": {
      "r": 67,
      "t": 197
    },
    "movement": "c"
  },
  {
    "name": "Nlog",
    "pc": {
      "r": 58,
      "t": 180
    },
    "movement": "c"
  },
  {
    "name": "Cloudfront",
    "pc": {
      "r": 35,
      "t": 180
    },
    "movement": "c"
  },
  {
    "name": "Windows Server 2016 DC",
    "pc": {
      "r": 54,
      "t": 180
    },
    "movement": "c"
  },
  {
    "name": "AWS Route53",
    "pc": {
      "r": 81,
      "t": 180
    },
    "movement": "c"
  },
  {
    "name": "Ubuntu",
    "pc": {
      "r": 83,
      "t": 180
    },
    "movement": "c"
  },
  {
    "name": "Zabbix",
    "pc": {
      "r": 85,
      "t": 180
    },
    "movement": "c"
  },
  {
    "name": "Force.com",
    "pc": {
      "r": 53,
      "t": 180
    },
    "movement": "c"
  },
  {
    "name": "AWS ALB",
    "pc": {
      "r": 115,
      "t": 236
    },
    "movement": "c"
  },
  {
    "name": "logback",
    "pc": {
      "r": 152,
      "t": 224
    },
    "movement": "c"
  },
  {
    "name": "Exceptionless",
    "pc": {
      "r": 242,
      "t": 216
    },
    "movement": "c"
  },
  {
    "name": "AWS SNS",
    "pc": {
      "r": 274,
      "t": 206
    },
    "movement": "c"
  },
  {
    "name": "AWS Lambda",
    "pc": {
      "r": 274,
      "t": 186
    },
    "movement": "c"
  },
  {
    "name": "log4j",
    "pc": {
      "r": 326,
      "t": 192
    },
    "movement": "c"
  },
  {
    "name": "New Relic",
    "pc": {
      "r": 358,
      "t": 232
    },
    "movement": "c"
  },
  {
    "name": "Log4Net",
    "pc": {
      "r": 358,
      "t": 200
    },
    "movement": "c"
  },
  {
    "name": "ApplicationInsight",
    "pc": {
      "r": 358,
      "t": 256
    },
    "movement": "c"
  },
  {
    "name": "Jenkins",
    "pc": {
      "r": 390,
      "t": 264
    },
    "movement": "c"
  },
  {
    "name": "Windows Server 2012 R2 Std",
    "pc": {
      "r": 390,
      "t": 216
    },
    "movement": "c"
  },
  {
    "name": "Windows Server 2012 R2 DC",
    "pc": {
      "r": 390,
      "t": 224
    },
    "movement": "c"
  },
  {
    "name": "Windows Server 2008 R2 DC",
    "pc": {
      "r": 390,
      "t": 248
    },
    "movement": "c"
  }
]
  },
  { 
    "quadrant": "Languages",
    "color" : "#B70062",
    "left"  : (w-300+30),
    "top" :   (h/2 + 38),
    "items" : [
  {
    "name": ".NET",
    "pc": {
      "r": 30,
      "t": 325
    },
    "movement": "c"
  },
  {
    "name": "Javascript",
    "pc": {
      "r": 51,
      "t": 280
    },
    "movement": "c"
  },
  {
    "name": "Python",
    "pc": {
      "r": 81,
      "t": 310
    },
    "movement": "c"
  },
  {
    "name": "Java",
    "pc": {
      "r": 58,
      "t": 340
    },
    "movement": "c"
  },
  {
    "name": "SASS",
    "pc": {
      "r": 61,
      "t": 295
    },
    "movement": "c"
  },
  {
    "name": "Swift",
    "pc": {
      "r": 48,
      "t": 287
    },
    "movement": "c"
  },
  {
    "name": "R",
    "pc": {
      "r": 45,
      "t": 317
    },
    "movement": "c"
  },
  {
    "name": "Clojure",
    "pc": {
      "r": 120,
      "t": 326
    },
    "movement": "c"
  },
  {
    "name": "Mono",
    "pc": {
      "r": 126,
      "t": 302
    },
    "movement": "c"
  },
  {
    "name": "Go",
    "pc": {
      "r": 290,
      "t": 306
    },
    "movement": "c"
  },
  {
    "name": "Ruby",
    "pc": {
      "r": 382,
      "t": 306
    },
    "movement": "c"
  },
  {
    "name": "ObjectiveC",
    "pc": {
      "r": 390,
      "t": 282
    },
    "movement": "c"
  }
]
  }
];
