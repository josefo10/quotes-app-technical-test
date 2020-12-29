const quote = require('../models/quotes');

exports.saveDataQuote = async(quoteData, imageUrl)=>{
    const quotesSchema = new quote({Cita: quoteData, Imagen: imageUrl});
    const quoteSave = await quotesSchema.save();
    return(quoteSave);
}

exports.quoteDelete = async(id)=>{
    const deleteQuote = await quote.deleteOne({_id:id});
    return(deleteQuote);
}

exports.quoteFind = async(id)=>{
    const findId = await quote.findById(id);
    return(findId);
}