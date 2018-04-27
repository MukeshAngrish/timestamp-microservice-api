// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/api/timestamp/:str", (req, res) => {
  var str = req.params.str;
  var unix, utc;
  if(isNaN(str)) {
    var dateStr = new Date(str);
    if(isNaN(Date.parse(dateStr))) {
      res.json({"error": "Invalid Date"});
    } else {
      unix = dateStr.getTime();
      utc = dateStr.toUTCString();
      res.json({
        "unix": unix,
        "utc": utc
      });
    }
  } else {
    unix = Number(str);
    utc = (new Date(unix)).toUTCString();
    res.json({
      "unix": unix,
      "utc": utc
    });
  }
});

app.get('/api/timestamp', (req, res) => {
  // var dateStr = new Date();
  // var unix = dateStr.getTime();
  // var utc = dateStr.toUTCString();
  res.json({
    "unix": null,
    "utc": null
  });
})

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
