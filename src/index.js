const express = require('express');
const morgan = require('morgan');
require('dotenv').config();

//Initalizations
const app = express();
require('./database');

// setings 
app.set('port', process.env.PORT);
app.set('json spaces', 2);

//midelwares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
app.use(require('./routes/routes'));

//starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});