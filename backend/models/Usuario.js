var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;

const UsuarioSchema =new Schema({
    nombreUCompleto:{type:String, requite:true},
    telfUsuario:{type:String, require:true},
    username:{type:String, require:true},
    typeUser:{type:String, required:true},
    password:{type:String, require:true},
    correo:{type:String, require:true, unique:true},
    created_at:{type: Date, default:Date.now}
});

UsuarioSchema.methods.encryptPassword = async password =>{
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt)
}

UsuarioSchema.methods.matchPassword = async function(password){
    return await bcrypt.compare(password, this.password)
}

module.exports = mongoose.model('Usuario', UsuarioSchema);