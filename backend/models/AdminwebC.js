var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const AdminWebCSchema =new Schema({
    imgCatalago:{type:String},
    typeImg:{type:String},
    descripcion:{type:String},
    typeCatalago:{type:String},
    created_at:{type: Date, default:Date.now}
});

module.exports = mongoose.model('AdminWebC', AdminWebCSchema);