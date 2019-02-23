#!/bin/bash

PATH=/bin:/usr/bin:/sbin:/usr/sbin:/usr/local/bin:/home/admin/codes/fly/cmd

dir1=/home/admin/codes/fly
nod=/usr/bin/node

bal=$($nod $dir1/vat/btc/bal.js)
pri=$($nod pub/btc.js)
sum=$(echo $bal*$pri|bc)
sumr=$(printf "%.0f" $sum)
printf "%'d" $sumr
echo ""
