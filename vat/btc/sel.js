var que = require('request');
var crypto = require('crypto');
var cnf= require('./cnf.json');

var timestamp = Date.now().toString();
var method = 'POST';
var path = '/v1/me/sendchildorder';

var arg2=process.argv[2];
var arg3=process.argv[3];

var body = JSON.stringify({
    product_code: 'BTC_JPY',
    child_order_type: 'LIMIT',
    side: 'SELL',
    price: arg2,
    size: arg3
});

var text = timestamp + method + path + body;
var sign = crypto.createHmac('sha256', cnf.sec).update(text).digest('hex');

var opt= {
    url: 'https://api.bitflyer.jp' + path,
    method: method,
    body: body,
    headers: {
        'ACCESS-KEY': cnf.key,
        'ACCESS-TIMESTAMP': timestamp,
        'ACCESS-SIGN': sign,
        'Content-Type': 'application/json'
    }
};
que(opt, function (err, res, pay) {
console.log(pay);
});
