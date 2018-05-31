#!/usr/bin/env bash

echo "Wait for grid to be ready"
attempt_counter=0
max_attempts=10
while ! curl --silent http://localhost:4444/wd/hub/status | grep "\"ready\":true" -c > /dev/null
do
if [ ${attempt_counter} -eq ${max_attempts} ];then
echo "[ERROR] - Grid was not ready after 60 seconds"
exit 1
fi
attempt_counter=$(($attempt_counter+1))
sleep 6
done
echo "Grid up and running"