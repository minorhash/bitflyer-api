if [ -z $1 ];then
	echo "usage"
else
get=$(nodejs $1)
printf "%'d" $get
echo 
fi
