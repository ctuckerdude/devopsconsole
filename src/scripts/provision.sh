#!/bin/bash

# Prepare
rm -r $1

# Checkout from Git 
git clone http://192.168.99.1:7990/scm/dev/$1.git 
cd $1
bash deploy.sh