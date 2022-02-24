require('dotenv').config()
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const sequelize = require('./database/db')

//DATABASE MODELS
const User = require('./models/user')
const Message = require('./models/message')


//ROUTES
const usersRouter = require('./routes/users')
const authRouter = require('./routes/auth')
const messagesRouter = require('./routes/messages')

var app = express();


//HEADERS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//SEQUELIZE

sequelize.sync({alter : true}).then((result) => {
    console.log('All models were synchronized succesfully')
}).catch((err) => {
    console.log('Not synchronized tables from database', err)
});

//USE ROUTES

app.use('/api/users', usersRouter)
app.use('/api/auth', authRouter);
app.use('/api/messages', messagesRouter)

module.exports = app; 
