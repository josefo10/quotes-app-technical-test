const express = require('express');
const morgan = require('morgan'); 

//Initalizations
const app = express();
require('./database'); 

// setings
app.set('port', process.env.PROT || 3000);
app.set('json spaces', 2);

//midelwares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
 

//starting the server
app.listen(app.get('port'),()=>{
    console.log('Server on port', app.get('port'));
});