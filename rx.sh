#!/bin/bash

cd /sys/class/net/eth0/statistics
old=$(<rx_bytes);
sleep 1
now=$(<rx_bytes);
echo $((($now-$old)/1024));
