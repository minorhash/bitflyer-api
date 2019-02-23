#!/bin/bash

dir1=/home/admin/codes/fly
nod=/usr/bin/node

fx=$($nod $dir1/pub/fx.js)

pnl=$($nod $dir1/vat/fx/pnl.js)
num=$(printf "%.0f" $pnl)
echo $num

kee=$($nod $dir1/vat/fx/kee.js)
num2=$(printf "%.2f" $kee)
echo $kee

bal=$($nod $dir1/vat/fx/bal.js)
num3=$(printf "%.3f" $bal)
echo $bal


### func end
tra(){

if (($(echo "$num2>1.5"|bc -l)));then

echo "yes"
else
echo "margin error"
###########################

fi

}
### func end

tra
