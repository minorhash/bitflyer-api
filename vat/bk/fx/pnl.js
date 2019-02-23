var fs=require('fs');
var request = require('request');
var crypto = require('crypto');
var config = JSON.parse(fs.readFileSync(__dirname+'/config.json', 'utf8'));

var timestamp = Date.now().toString();
var method = 'GET';
var path = '/v1/me/getcollateral';
var text = timestamp + method + path;
var sign = crypto.createHmac('sha256', config.sec).update(text).digest('hex');

var options = {
    url: 'https://api.bitflyer.jp' + path,
    method: method,
    headers: {
        'ACCESS-KEY': config.key,
        'ACCESS-TIMESTAMP': timestamp,
        'ACCESS-SIGN': sign
    }
};
request(options, function (err, response, payload) {
var pay=JSON.parse(payload);
console.log(pay.open_position_pnl);
});
