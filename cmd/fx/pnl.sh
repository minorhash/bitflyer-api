#!/bin/bash


dir1=/home/admin/codes/fly
nod=/usr/bin/node

pnl=$($nod $dir1/vat/fx/pnl.js)
num=$(printf "%.0f" $pnl)

if [[ "$num" -lt  0 ]];then
	echo "neg"
else
	echo $pnl 
fi
