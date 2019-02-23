var request = require('request');
var crypto = require('crypto');

var timestamp = Date.now().toString();
var method = 'GET';
var path = '/v1/me/getchildorders?count=50';
var text = timestamp + method + path;
var sign = crypto.createHmac('sha256', secret).update(text).digest('hex');

var options = {
    url: 'https://api.bitflyer.jp' + path,
    method: method,
    headers: {
        'ACCESS-KEY': key,
        'ACCESS-TIMESTAMP': timestamp,
        'ACCESS-SIGN': sign
    }
};
request(options, function (err, response, pay) {
var len=pay.length;

console.log(JSON.parse(pay));

});
