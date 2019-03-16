var bodyParser = require("body-parser");
const accountSid = 'ACb3cd2a2b23b182e38a3cafa530af2c63';
const authToken = '93bbc9a970c9f088fbb437c91fb50766';
const client = require('twilio')(accountSid, authToken);


client.messages
  .create({
     body: 'TEST TWILIO TEST',
     from: '+16602102135',
     to: '+16603511858'
   })
  .then(message => console.log(message.sid));