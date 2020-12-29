const {Router} = require('express');
const router = Router();
const {imageapi, quoteapi} = require('../services/servicesQuote');
const {saveDataQuote, quoteDelete, quoteFind} = require('../services/servicesDatabase');

const quote = require('../models/quotes');


router.get('/api/v1/generate-Changing-life-quote', async (req, res) =>{
    try {     
        const quotes = await quoteapi();
        const imageUrl = await imageapi(quotes.quoteData);
        const saveData = await saveDataQuote(quotes.quoteData, imageUrl.url) 
        console.log('Prueba de data', quotes.status, 'prueba cita', quotes.quoteData);
        if(imageUrl.status == '200' && quotes.status == '200' && saveData){
            res.status(200).send({saveData});
        }else{
            console.log('Parameters missing');
        }     
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/api/v1/find-Changing-life-quote/:id', async (req, res) =>{
    try{
        const id = req.params.id;
        const findId = await quoteFind(id);
        console.log(findId);
        if(findId){
            res.status(200).send(findId);
        }else{
            res.status(200).send('The quote related to the id was not found.'); 
        }
    }catch(error){  
        res.status(500).send(error);
    }
});

router.delete('/api/v1/delete-Changing-life-quote/:id', async(req, res) => {
    try{
        const id = req.params.id;
        const deleteQuote = await quoteDelete(id);
        //const data = await quote.deleteOne({_id:id});
        if(deleteQuote.deletedCount > 0){
            res.status(200).send('The quote was successfully deleted');
        }else{
            res.status(200).send('Quote id not found');
        }
    }catch(error){
        res.status(500).send(error);
    }
});

module.exports = router;