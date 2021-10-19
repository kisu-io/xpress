//Load the express module installed to constant express
const express = require('express');
//Load the path module installed to constant path
const path = require('path');
//Load the cookieParser module installed to constant cookieParser
const cookieParser = require('cookie-parser');
//Load the morgan module installed to constant logger
const logger = require('morgan');
// Load the index router path from './routes/index
const indexRouter = require('./routes/index');
// define the function express under the constant app
const app = express();
// Execute and use the middleware CORS
app.use(cors());
// Execute and use morgan as a logger
app.use(logger('dev'));
//Execute and use express method translating data to json() format as App level middlewares.
app.use(express.json());
// parse application basically can only parse incoming Request Object if strings or arrays
app.use(express.urlencoded({ extended: false }));
//  Execute and use cookie parser, parsing cookie header and populate req.cookies with an object keyed by the cookie names.
app.use(cookieParser());
// Excute and use static ẽpress method to join static file in public path to app js
app.use(express.static(path.join(__dirname, 'public')));
// use news as an endpoint
app.use('/news', indexRouter)
// export app module installed to constant
module.exports = app;
