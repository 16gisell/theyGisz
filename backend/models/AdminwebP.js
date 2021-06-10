var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const AdminWebPSchema =new Schema({
    imgPromo:{type:String},
    typeImg:{type:String},
    descripcion:{type:String},
    precio:{type:Number},
    typeCombo:{type:String},
    created_at:{type: Date, default:Date.now}
});

module.exports = mongoose.model('AdminWebP', AdminWebPSchema);