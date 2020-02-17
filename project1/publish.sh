rm project1.zip 
zip -r project1.zip * 
aws lambda update-function-code --function-name project1 --zip-file fileb://project1.zip
aws lambda publish-version --function-name project1
aws lambda invoke --function-name project1 out --log-type Tail \
--query 'LogResult' --output text |  base64 -d
