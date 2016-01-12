var express = require('express');
var useragent = require('express-useragent');
var app = express();

var port = process.env.PORT || 3000;

app.use(useragent.express());

app.get("/", function(req, res) {
  res.send({
    ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
    language: (req.headers["accept-language"] || "").split(",")[0],
    software: req.useragent.os
  });
});

module.exports = app.listen(port, function() {
  console.log('WhoAmI app listening on port ' + port + '!');
});
