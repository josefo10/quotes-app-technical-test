const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const {Schema} = mongoose;

const QuoteSchema = new Schema({
    _id: {type: Number, },
    Cita: {type: String, required: true},
    Imagen: {type: String, required: true}    
},{versionKey: false});
QuoteSchema.plugin(AutoIncrement);

module.exports = mongoose.model('Quote', QuoteSchema)