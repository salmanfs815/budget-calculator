const http = require('http');
const express = require('express');

const app = express();
const port = process.env.PORT || 8000;

const server = http.createServer(app).listen(port,
  () => console.log(`Server is listening on port ${port}`));

app.use('/', (req, res, next) => {
  console.log(req.method, 'request:', req.url);
  next();
});

app.use(express.static('static'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
