const AWS = require("aws-sdk");
AWS.config.update({region: 'ap-east-1'});

const dynamodb = new AWS.DynamoDB();

// var params = {
//     TableName: 'td_notes' /* required */
// };
// dynamodb.describeTable(params, function(err, data) {
// if (err) console.log(err, err.stack); // an error occurred
// else     console.log(JSON.stringify(data, null, 2));           // successful response
// });

// dynamodb.listTables({}, function(err, data) {
//     if (err) console.log(err, err.stack); // an error occurred
//     else     console.log(data);           // successful response
//     /*
//     data = {
//      TableNames: [
//         "Forum", 
//         "ProductCatalog", 
//         "Reply", 
//         "Thread"
//      ]
//     }
//     */
//   });