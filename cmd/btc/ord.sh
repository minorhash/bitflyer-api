#!/bin/sh

dir1=/mnt/sdb2/codes/fly

nod=$(node  $dir1/vat/btc/ord/ord.js)

sid=$(echo $nod|grep --color side)

echo $sid

#for i in $nod
#do
#	$i
#done


