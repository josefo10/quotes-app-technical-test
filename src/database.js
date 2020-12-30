const mongoose = require('mongoose');
const settings = require('./settings');

exports.connectDb = async () => {
    await mongoose.connect(settings.URL_DB, {
        useNewUrlParser: true,    
        useUnifiedTopology: true
    })
    console.log('connected');
}