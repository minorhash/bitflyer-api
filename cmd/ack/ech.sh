#!/bin/sh

node pub/pri.js > log/pri

cat=$(cat log/pri)
#echo $cat

sell=$(echo "scale=0; ($cat*1.05)"|bc)
sell2=${sell:0:6}
echo $sell2

buy=$(echo $cat*.95|bc)
buy2=${buy:0:6}
echo $buy2

#echo $sell2
#echo $sell2 > log/sell

#node vat/sell_fx_btc.js $sell2

#echo $buy2
#echo $buy2 > log/buy

#node vat/buy_fx_btc.js $buy2
