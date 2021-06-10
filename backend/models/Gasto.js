var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const GastoSchema =new Schema({
    nombreElemento:{ type:String},
    montoGastado:{type:Number},
    fechaCompra:{type:Date},
    created_at:{type: Date, default:Date.now}
});

module.exports = mongoose.model('Gasto', GastoSchema);