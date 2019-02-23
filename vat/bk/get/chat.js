var request = require('request');

var path = '/v1/getchats';
var query = '';
var url = 'https://api.bitflyer.jp' + path + query;
request(url, function (err, response, pay) {
//    console.log(pay);
    console.log(JSON.parse(pay));

});

