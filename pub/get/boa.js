var request = require('request');

var path = '/v1/getboard';
var query = '';
var url = 'https://api.bitflyer.jp' + path + query;
request(url, function (err, res, pay) {
//    console.log(payload);
    console.log(JSON.parse(pay));

});

