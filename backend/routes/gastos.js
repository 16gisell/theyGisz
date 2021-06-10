const{Router} = require('express');
const router = Router();
const fs = require('fs-extra');
const path = require('path');
const Gasto = require('../models/Gasto');

router.get('/', async(req, res) =>{
    const gasto = await Gasto.find();
    res.json(gasto);
})

router.post('/', async(req, res) =>{
    const {nombreElemento, montoGastado, fechaCompra} = req.body;
    const NewGasto = new Gasto({nombreElemento, montoGastado, fechaCompra})
    await NewGasto.save();
   res.send({message: "Registrado gasto nuevo"})
})

router.delete('/:id', async(req, res) =>{
    const gasto = await Gasto.findByIdAndDelete(req.params.id);
    fs.unlink(path.resolve('./backend/public'+ gasto.imagePathClient))
    console.log(gasto)
    res.send({message: "gasto eliminado"})
})

router.put('/:id', async (req, res) =>{
    await Gasto.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        status: 'Actualizado'
    })
})

router.get('/:id', async (req, res)=>{
    const gasto = await Gasto.findById(req.params.id);
    res.json(gasto);
})

module.exports = router;