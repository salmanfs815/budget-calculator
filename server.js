const http = require('http');
const express = require('express');

var app = express();
var port = process.env.PORT || 8000;

var server = http.createServer(app).listen(port,
  () => console.log(`Server is listening on port ${port}`));

app.use('/', (req, res, next) => {
  console.log(req.method, 'request:', req.url)
  next()
});

app.use(express.static('static'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
