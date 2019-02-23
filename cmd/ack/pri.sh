#!/bin/bash

node pub/pri.js > log/pri

cat=$(cat log/pri)
echo $cat

sel=$(echo "scale=0; ($cat*1.05)"|bc)
sel2=${sel:0:6}

sel21=$(echo "scale=0; ($cat*1.20)"|bc)
sel22=${sel21:0:6}

buy=$(echo $cat*.95|bc)
buy2=${buy:0:6}
buy21=$(echo $cat*.80|bc)
buy22=${buy21:0:6}


echo $sel2
echo $sel22
echo $sell2 > log/sell

#node vat/sell_fx_btc.js $sel
#node vat/sell_fx_btc.js $sel22

echo $buy2
echo $buy22
echo $buy2 > log/buy

#node vat/buy_fx_btc.js $buy2
#node vat/buy_fx_btc.js $buy22
