require('dotenv').config()

const express = require('express');
const { createServer } = require('http');
const realtimeServer = require('./realtimeServer')
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();
const httpServer = createServer(app);


// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));

// auth middleware (check cookies)
app.use(cookieParser());

// Routes
app.use(require('./routes'));

// Public
app.use(express.static(path.join(__dirname, 'public')))

// Levantar server

httpServer.listen(app.get('port'), () => {
    console.log('Server running on port ', app.get('port'));
});

// LLamada al Socker.io Server
realtimeServer(httpServer);