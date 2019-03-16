// require dependencies
var express = require("express");
var path = require('path');
var exphbs = require("express-handlebars");
var PORT = process.env.PORT || 8080;
var bodyParser = require("body-parser");
var app = express();
// require routes files
 var htmlRouter = require("./routes/htmlRoutes");

//[ Hi Backend People, Can this two line below go inside .env file so that we don't have any passcode/password on the surface of the file for people to see]
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

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set Handlebars.
app.set('views', path.join(__dirname, 'views'));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use('/', htmlRouter);




app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });
  