var fs=require('fs');
var request = require('request');
var crypto = require('crypto');
//var cnf = JSON.parse(fs.readFileSync(__dirname+'/cnf.json', 'utf8'));
var cnf=require(__dirname+"/cnf.json")

var timestamp = Date.now().toString();
var method = 'GET';
var path = '/v1/me/getbalance';
var text = timestamp + method + path;
var sign = crypto.createHmac('sha256', cnf.sec).update(text).digest('hex');

var options = {
url: 'https://api.bitflyer.jp' + path,
method: method,
headers: {
'ACCESS-KEY': cnf.key,
'ACCESS-TIMESTAMP': timestamp,
'ACCESS-SIGN': sign
}
};
request(options, function (err, res, pay) {
var pay=JSON.parse(pay);
console.log(pay[0].amount.toLocaleString());
console.log(pay[1].amount);
});
