#!/bin/sh

dir1=/home/admin/codes/fly

nod=$(node  $dir1/vat/btc/ord.js) 

sid=$(echo $nod|grep --color side)

echo $sid

#for i in $nod
#do
#	$i
#done


