const AWS = require("aws-sdk");
AWS.config.update({region: 'ap-east-1'});

const documentclient = new AWS.DynamoDB.DocumentClient();

var params = {
    Item: { /* required */
      user_id: 'banana',
      timestamp: 1,
      title: "new my title added by code",
      content: "new my content added by code"
    },
    TableName: 'td_notes' /* required */
};


documentclient.put(params, function(err, data) {
if (err) console.log(err, err.stack); // an error occurred
else     console.log(data);           // successful response
});