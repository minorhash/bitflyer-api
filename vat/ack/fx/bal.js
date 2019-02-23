var fs=require('fs');
var request = require('request');
var crypto = require('crypto');
//var conf = JSON.parse(fs.readFileSync(__dirname+'/conf.json', 'utf8'));
var conf=require("./conf.json")

var timestamp = Date.now().toString();
var method = 'GET';
var path = '/v1/me/getcollateralaccounts';
var text = timestamp + method + path;
var sign = crypto.createHmac('sha256', conf.sec).update(text).digest('hex');

var options = {
    url: 'https://api.bitflyer.jp' + path,
    method: method,
    headers: {
        'ACCESS-KEY': conf.key,
        'ACCESS-TIMESTAMP': timestamp,
        'ACCESS-SIGN': sign
    }
};
request(options, function (err, response, payload) {
var pay=JSON.parse(payload);
console.log(pay);
});
