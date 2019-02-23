var fs=require('fs');
var request = require('request');
var crypto = require('crypto');
var config = JSON.parse(fs.readFileSync(__dirname+'/config.json', 'utf8'));

console.log(config);
