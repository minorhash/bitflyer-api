var request = require('request');

var path = '/v1/getprices';
var query = '';
var url = 'https://api.bitflyer.jp' + path + query;

var getPri=function (err, response, pay) {
var pay=JSON.parse(pay);
    //console.log(pay)
    console.log(pay[0].rate)
    //console.log(pay[0].rate.toLocaleString());
}

request(url,getPri );
