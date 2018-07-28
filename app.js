var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');

var index = require('./routes/index');
var news = require('./routes/newsApi');
var repositories = require('./routes/repositoriesApi');
var issues = require('./routes/issuesApi');
var report = require('./routes/reportApi');

const socketIo = require("socket.io");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

app.use('/api/news', news);
app.use('/api/repositories', repositories);
app.use('/api/issues', issues);
app.use('/api/report', report);

// init server
const server = http.createServer(app);
var port = '8080';
// const host = '0.0.0.0';
server.listen(port, () => console.log(`Listening on port ${port}`));

//init socket io
const io = socketIo(server);

io.on("connection", socket => {
    console.log("New client connected with id " + socket.id.toString());
    var connectedClients = Object.keys(io.clients().connected);
    console.log("Connected clients " + connectedClients.length)
    socket.on("disconnect", () => console.log("Client disconnected"));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports.app = app;
module.exports.io = io;
