#!/bin/bash

dir1=/home/admin/codes/fly
nod=/usr/bin/node

fx=$($nod $dir1/pub/fx.js)

pnl=$($nod $dir1/vat/fx/pnl.js)
num=$(printf "%.0f" $pnl)
echo "pnl:"$num

kee=$($nod $dir1/vat/fx/kee.js)
num2=$(printf "%.2f" $kee)
echo "margin:"$kee

bal=$($nod $dir1/vat/fx/bal.js)
num2=$(printf "%.2f" $kee)

### func end
tra(){

if (($(echo "$num2>1"|bc -l)));then

#if [ $(echo "$num2"|bc) > 5 ] || [ $(echo "$num2"|bc) -ne 0 ];then
#### sell
for (( i=1; i<8; i++))
do 
uni=$(echo "$i*0.01"|bc)
echo "unit: "$uni
sel=$(echo "$fx*$(echo "1+$i*0.03"|bc)"|bc)
sel2=${sel:0:7}
sel2=$(printf "%.0f" $sel)
echo "sell: "$sel2
$nod $dir1/vat/fx/sel.js $sel2 $uni
done

echo "yes"

else
echo "margin error"
#$dir1/cmd/fx/can.sh

fi
### buy
if [ $(echo "$num2>6"|bc) ];then
#if [ $(echo "$num2"|bc) -eq 0 ] || [ $(echo "$num2"|bc) > 5 ] ;then

for (( i=1; i<8; i++))
do 
uni=$(echo "$i*0.001"|bc)
echo "unit: "$uni
buy=$(echo "$fx*$(echo "1-$i*0.03"|bc)"|bc)
buy2=${buy:0:7}
buy2=$(printf "%.0f" $buy)

echo "buy: "$buy2

$nod $dir1/vat/fx/buy.js $buy2 $uni
done

echo "yes"

else
echo "margin error"
$dir1/cmd/fx/can.sh
###########################
fi

}
### func end

	
tra
