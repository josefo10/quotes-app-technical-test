const dotenv = require('dotenv');
dotenv.config();

module.exports = { 
    'PORT': process.env.PORT || 3000,
    'URL_DB': process.env.URL_DB,
    URL_IMAGES = process.env.URL_IMAGES,
    URL_QUOTES = process.env.URL_QUOTES
};