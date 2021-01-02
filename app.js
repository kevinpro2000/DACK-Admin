var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/user/users');
var userDetailRouter = require('./routes/user/userDetail');
var changePassRouter = require('./routes/user/changePass');
var addRouter = require('./routes/add');
var productRouter = require('./routes/product');
var updateRouter = require('./routes/update');
const passport = require('./passport/index');
var detailRouter = require('./routes/detail');
var loginRouter = require('./routes/login');
const commentRouter = require('./routes/api/comments');

require('./database/db');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'secret-cat',
  resave: true,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(function(req,res,next){
  res.locals.user = req.user;
  next()
});


app.use('/', productRouter);
app.use('/users', usersRouter);
app.use('/userDetail', userDetailRouter);
app.use('/changePass', changePassRouter);
app.use('/add',addRouter);
app.use('/product',productRouter);
app.use('/update', updateRouter);
app.use('/detail', detailRouter);
app.use('/login', loginRouter);
app.use('/api/comment', commentRouter);


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
