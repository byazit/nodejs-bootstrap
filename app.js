// load modules
const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const morgan = require('morgan');

const app = express();

// Initiate bodyParser to parse request body
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());
app.use(morgan('dev'));

// Routes
app.get('/', (req, res) => {
  res.json({ success: true, data: { message: 'Hello World!' } });
});

// Run server
app.set('port', process.env.PORT || 8081);
const server = http.createServer(app);
server.listen(app.get('port'), () => {
  console.log(`Express server listening on port ${app.get('port')}`);
});
server.on('error', (err) => console.log(err));
