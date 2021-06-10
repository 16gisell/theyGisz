const{Router} = require('express');
const router = Router();
const fs = require('fs-extra');
const path = require('path');
const Usuario = require('../models/Usuario');

router.get('/', async(req, res) =>{
    const usuario = await Usuario.find();
    res.json(usuario);
})

router.post('/register', async(req, res) =>{
    const {nombreUCompleto, telfUsuario, username, password, correo, typeUser} = req.body;
    const userEmail = await Usuario.findOne({correo:correo})
    if(userEmail){
        res.status(404).send({error:"Este Correo ya existe"})
    }else{
        const NewUsuario = new Usuario({nombreUCompleto, telfUsuario, username, password, correo, typeUser})
        NewUsuario.password = await NewUsuario.encryptPassword(password)
        await NewUsuario.save();
        res.send({message: "Registrado Usuario nuevo"})
    }   
})

router.post('/login', async(req, res) =>{
    const {password, correo} = req.body;
    console.log(req.body)
    const userEmail = await Usuario.findOne({correo:correo})
    if(!userEmail){
        res.status(404).send({error:"Este Correo no existe"})
    }else{
        const match = await userEmail.matchPassword(password)
        if(!match){
            return res.status(404).send({error: "La contraseña no es corrrecta"})
        }else{
            return res.send(userEmail)
        }
        
    }   
})

router.delete('/:id', async(req, res) =>{
    const usuario = await Usuario.findByIdAndDelete(req.params.id);
    res.send({message: "Usuario eliminado"})
})

router.put('/:id', async (req, res) =>{
    await Usuario.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        status: 'Actualizado'
    })
})

router.get('/:id', async (req, res)=>{
    const usuario = await Usuario.findById(req.params.id);
    res.json(usuario);
})

module.exports = router;