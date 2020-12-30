const express = require('express');
const morgan = require('morgan');
const settings = require('./settings');

//Initalizations
const app = express();
const {connectDb} = require('./database');


// setings 
app.set('port', settings.PORT);
app.set('json spaces', 2);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
app.use(require('./routes/routes'));

//starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});

 connectDb()
