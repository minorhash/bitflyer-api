var request = require('request');

var path = '/v1/getboard';
var query = '';
var url = 'https://api.bitflyer.jp' + path + query;
request(url, function (err, response, payload) {
    console.log(payload);
var pay=    JSON.parse(payload);
console.log(pay[0].mid_price);

});

