#!/bin/bash

#PATH=/bin:/usr/bin:/sbin:/usr/sbin:/usr/local/bin:/home/admin/codes/fly/cmd

dir1=/mnt/sdb2/codes/fly
#nod=/mnt/home/.nvm/versions/node/v10.12.0/bin/node

bal=$(node $dir1/vat/btc/bal.js)
# pri=$($nod pub/btc.js)
# sum=$(echo $bal*$pri|bc)
# sumr=$(printf "%.0f" $sum)
# printf "%'d" $sumr
echo $bal
