const express = require('express');
const morgan = require('morgan'); // middleware do logowania requestow
const {
  PORT
} = require('./constants');
const rootRouter = require('./rootRouter');


const app = express();

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(rootRouter);

app.set('port', PORT);

app.listen(app.get('port'), () => {
  console.info(`express app running on port: ${app.get('port')}`);
});