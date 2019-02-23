var req= require('request');
var crypto = require('crypto');
var cnf=require("./son/key.json")

var key =cnf.key
var sec =cnf.sec

var timestamp = Date.now().toString();
var method = 'POST';
var path = '/v1/me/sendchildorder';

//var arg2=process.argv[2];
//var arg3=process.argv[3];
var arg2=600000
var arg3=0.1

var body = JSON.stringify({
    product_code: 'BTC_JPY',
    child_order_type: 'LIMIT',
    side: 'BUY',
    price: arg2,
    size: arg3
});

var text = timestamp + method + path + body;
var sign = crypto.createHmac('sha256', sec).update(text).digest('hex');

var opt= {
    url: 'https://api.bitflyer.jp' + path,
    method: method,
    body: body,
    headers: {
        'ACCESS-KEY': key,
        'ACCESS-TIMESTAMP': timestamp,
        'ACCESS-SIGN': sign,
        'Content-Type': 'application/json'
    }
};

// req(opt, function (err, res, pay) {
//     console.log(pay);
// });
