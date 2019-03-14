var express = require("express");
var bodyParser = require("body-parser");
const accountSid = 'ACb3cd2a2b23b182e38a3cafa530af2c63';
const authToken = '93bbc9a970c9f088fbb437c91fb50766';
const client = require('twilio')(accountSid, authToken);


//+16602102135

// //client.messages
// .create({
//   body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
//   from: '+15017122661',
//   to: '+15558675310'
// })
// .then(message => console.log(message.sid));

var app = express();

var PORT = process.env.PORT || 8080;


app.use(express.static("public"));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });
  