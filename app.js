var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var electronic = require("./models/electronic");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var electronicRouter = require('./routes/electronic');
var starsRouter = require('./routes/stars');
var slotRouter = require('./routes/slot');

var app = express();

const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
{useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded");});

// We can seed the collection if needed on server start
async function recreateDB(){
  // Delete everything
  await electronic.deleteMany();
  let instance1 = new electronic({category:"mobile", item:'iphone',
  price:500});
  let instance2 = new electronic({category:"laptop", item:'macbook',
  price:700});
  let instance3 = new electronic({category:"watch", item:'iwatch',
  price:300});
 
  instance1.save( function(err,doc) {
  if(err) return console.error(err);
  console.log("First object saved")
  });
  instance2.save( function(err,doc) {
    if(err) return console.error(err);
    console.log("second object saved")
    });
    instance3.save( function(err,doc) {
      if(err) return console.error(err);
      console.log("third object saved")
      });
}
let reseed = true;
 if (reseed) { recreateDB();}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/index', indexRouter);
app.use('/users', usersRouter);
app.use('/electronic', electronicRouter);
app.use('/stars', starsRouter);
app.use('/slot', slotRouter);

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