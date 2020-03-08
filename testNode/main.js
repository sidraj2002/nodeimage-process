var http = require ("http")
var AWS = require("aws-sdk");
AWS.config.update({region: 'us-west-1'});
var ec2 = new AWS.EC2();

AWS.config.getCredentials(function(err) {
  if (err) console.log(err.stack);
  // credentials not loaded
  else {
    console.log("Access key:", AWS.config.credentials.accessKeyId);
    console.log("Secret access key:", AWS.config.credentials.secretAccessKey);
  }
});

var meta  = new AWS.MetadataService();

meta.request("/latest/meta-data/instance-id", function(err, data){
    console.log(data);

//var Ec2params = { InstanceIds: [data]};
var Ec2params = {};
ec2.describeInstances(Ec2params, function(err, data2) {
   if (err) console.log(err, err.stack); // an error occurred
   else     console.log(data2);           // successful response
   /*
   data = {
   }
   */
 });
});
