var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var farmsRouter = require('./routes/FarmRoute');

const mongoose=require('mongoose');
const app=express();
const PORT=5000;
app.listen(PORT,()=>console.log( `server running on port http:localhost:${PORT}`));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.get("/",(req,res)=>{
  console.log('test');
  res.send('hello from the other siiiide');
})
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/farms', farmsRouter);
console.log("aazafsq");
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

const dbURI='mongodb+srv://user:user@node.xsua2nl.mongodb.net/node_db?retryWrites=true&w=majority';
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true}).then((result)=>console.log("connected to db"))
.catch((err)=>console.log(err));

module.exports = app;
