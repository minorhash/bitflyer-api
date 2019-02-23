#!/bin/bash

dir1=/home/admin/codes/fly
nod=/usr/bin/node

btc=$($nod $dir1/pub/btc.js)
echo "pub: "$btc

tra(){
for (( i=1; i<7; i++))

	do 
uni=$(echo "scale=0;$i*0.01"|bc)
echo "unit: "$uni
sel=$(echo "scale=0; $btc*$(echo "1+$i*0.01"|bc)"|bc)
sel2=${sel:0:7}
sel2=$(printf "%.0f" $sel)
#echo $sel
echo "sell: "$sel2
buy=$(echo $btc*$(echo "scale=0;1-$i*0.01"|bc)|bc)
buy2=${buy:0:7}
buy2=$(printf "%.0f" $buy)

echo "buy: "$buy2
$nod $dir1/vat/btc/sel.js $sel2 $uni
$nod $dir1/vat/btc/buy.js $buy2 $uni

done

}

tra
