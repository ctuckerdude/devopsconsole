REM putty.exe -ssh openstack@localhost -P 2222 -pw openstack -m test.txt
REM putty -ssh openstack@localhost -P 2222 -pw openstack -m test.txt
REM plink -ssh openstack@localhost -P 2222 -pw openstack "deploy.sh hello"
plink -ssh openstack@localhost -P 2222 -pw openstack "bash provision.sh %1"