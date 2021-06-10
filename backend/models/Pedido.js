var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const PedidoSchema =new Schema({
    nombreCliente:{type:String, require: true},
    imagePathClient:{type:String},
    fechaEntrega:{type: Date},
    descripcion:{type:String},
    tlfCliente:{type:Number},
    totalMonto:{type:Number},
    typeEntrega:{type:String},
    created_at:{type: Date, default:Date.now}
});

module.exports = mongoose.model('Pedido', PedidoSchema);