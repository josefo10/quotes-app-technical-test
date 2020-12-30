const fetch = require('node-fetch');
const settings = require('../settings');

exports.imageapi = async (quotesData) => {
    const keywors = quotesData.split(" ").join();
    console.log(keywors);
    const response = await fetch(`${settings.URL_IMAGES}?${keywors}`);
    //const imageData = await response.text();
    return (response);
}

exports.quoteapi = async () => {
    const response = await fetch(settings.URL_QUOTES);
    const quotesData = await response.json();
    return ({ 'quoteData': quotesData[0].q, 'status': response.status });
}

