var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});
const port = process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 8080;
//const ip = process.env.OPENSHIFT_NODEJS_IP || process.env.IP || '0.0.0.0';
app.listen(port, function () {
  console.log('Example app listening on port :',port);
});