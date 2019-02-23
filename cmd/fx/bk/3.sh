#!/bin/bash

PATH=/bin:/usr/bin:/sbin:/usr/sbin:/usr/local/bin:/home/admin/codes/fly/cmd

dir1=/home/admin/codes/fly
nod=/usr/bin/node

pri=$($nod $dir1/pub/btc.js)
echo $pri

sel=$(echo "scale=0; ($pri*1.03)"|bc)
#echo $sel
sel2=${sel:0:7}
echo $sel2

sel21=$(echo "scale=0; ($pri*1.02)"|bc)
#sel22=${sel21:0:6}

buy=$(echo $pri*.97|bc)
buy2=${buy:0:7}
echo $buy2

buy21=$(echo $pri*.95|bc)
#buy22=${buy21:0:6}

#$nod $dir1/vat/btc/sel.js $sel2
$nod $dir1/vat/btc/2sel.js $sel2 0.02


#$nod $dir1/vat/btc/buy.js $buy2
$nod $dir1/vat/btc/2buy.js $buy2 0.02
