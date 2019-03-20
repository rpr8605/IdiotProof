// require dependencies
var express = require("express");
var path = require('path');
var exphbs = require("express-handlebars");
var PORT = process.env.PORT || 8080;
var bodyParser = require("body-parser");
var db = require("./models");

let routes = require("./routes/apiRoutes");
let htmlRouter = require("./routes/htmlRoutes");




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


app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes);



// Set Handlebars.
app.set('views', path.join(__dirname, 'views'));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use('/', htmlRouter);




db.sequelize.sync().then(() => {
  app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
  });
});
