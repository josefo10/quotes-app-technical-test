const fetch = require('node-fetch');

exports.imageapi = async (quotesData) => {
    const keywors = quotesData.split(" ").join();
    console.log(keywors);
    const response = await fetch(`https://source.unsplash.com/300x200/?${keywors}`);
    //const imageData = await response.text();
    return (response);
}

exports.quoteapi = async () => {
    const response = await fetch('https://zenquotes.io/api/random');
    const quotesData = await response.json();
    console.log('probando citas', response);
    return ({ 'quoteData': quotesData[0].q, 'status': response.status });
}

