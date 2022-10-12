#!/bin/sh

echo “Building React Project …”
npm run build
echo “Copying html file …”
cp -r build html
echo “Connecting to AWS VM and copying file to /var/www/html/ …”
chmod 400 Ubuntu.pem
scp -i ../../../aws/Ubuntu.pem -r /Users/simo/Desktop/Projects/PersonalWebsite/personal-website/html ubuntu@ec2-18-190-103-59.us-east-2.compute.amazonaws.com:react
echo “Removing html file from local directory …”
rm -r html
