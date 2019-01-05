// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(req, res) {
  console.log(req.query)
  res.sendStatus(200);
  res.end();
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
