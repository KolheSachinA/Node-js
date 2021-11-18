var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoConnection = require('./utils/connection').connectionObject;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const addRecord = require('./routes/addRecord');
const createToken = require('./routes/createJwtToken');
const info = require('./routes/info');
const welcome = require('./routes/welcome')
const login = require('./routes/login')
const authorize = require('./routes/authorize')
const logout = require('./routes/logout')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.get('/users', usersRouter);
app.get('/addRecord', addRecord);
app.get('/createJwtToken', createToken);
app.get('/info', info);
app.get('/testRoute', info);
app.get('/welcome',welcome)
app.get('/login',login)
app.get('/logout',logout)
app.post('/authorize',authorize)
// new route
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
