const quote = require('../models/quotes');

exports.saveDataQuote = async (quoteData, imageUrl) => {
    try {
        const quotesSchema = new quote({ Cita: quoteData, Imagen: imageUrl });
        const quoteSave = await quotesSchema.save();
        return (quoteSave);
    } catch (error) {
        return (error);
    }

}

exports.quoteDelete = async (id) => {
    try {
        const deleteQuote = await quote.deleteOne({ _id: id });
        return (deleteQuote);
    } catch (error) {
        return (error);
    }
}

exports.quoteFind = async (id) => {
    try {
        const findId = await quote.findById(id);
        return (findId);
    } catch (error) {
        return (error);
    }

}
