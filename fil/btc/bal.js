var fs=require('fs');
var request = require('request');
var crypto = require('crypto');
var par=require(__dirname+"/out.json");
var obj=JSON.parse(par);

console.log(__dirname);
console.log(par);
