#!/bin/bash

PATH=/bin:/usr/bin:/sbin:/usr/sbin:/usr/local/bin:/home/admin/codes/fly/cmd

dir1=/home/admin/codes/fly
nod=/usr/bin/node

pri=$($nod $dir1/pub/btc.js)
echo $pri

#cat=$(cat $dir1/log/pri)
#echo $cat

sel=$(echo "scale=0; ($pri*1.01)"|bc)
#echo $sel
sel2=${sel:0:6}
echo $sel2

sel21=$(echo "scale=0; ($pri*1.05)"|bc)
#sel22=${sel21:0:6}

buy=$(echo $pri*.97|bc)
buy2=${buy:0:6}
echo $buy2

buy21=$(echo $pri*.95|bc)
#buy22=${buy21:0:6}

$nod $dir1/vat/btc/sel.js $sel2
#$nod $dir1/vat/sel21.js $sel21

#echo $buy2
#echo $buy22

$nod $dir1/vat/btc/buy.js $buy2
#$nod $dir1/vat/buy21.js $buy21
