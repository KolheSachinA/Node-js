var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const addRouter = require('./routes/add');
const subRouter = require('./routes/sub')
const mulRouter = require('./routes/mul')
const divRouter = require('./routes/div')
const home = require('./routes/home')
const updateRecord = require('./routes/updateRecord')
const deleteRecord = require('./routes/deleteRecord')
const addRecord = require('./routes/addRecord')
const getRecord = require('./routes/getRecord')
const HomeOne = require('./routes/HomeOne')
const getRecordOne = require('./routes/getRecordOne')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.get('/add',addRouter);
app.get('/sub',subRouter)
app.get('/mul',mulRouter)
app.get('/div',divRouter)
app.get('/getRecord',getRecord)
app.get('/homeOne',HomeOne)
app.get('/getRecordOne',getRecordOne)

app.post('/home',home)
app.post('/addRecord',addRecord)
app.put('/updateRecord',updateRecord)
app.delete('/deleteRecord',deleteRecord)

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
