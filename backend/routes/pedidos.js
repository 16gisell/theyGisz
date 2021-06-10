const{Router} = require('express');
const router = Router();
const fs = require('fs-extra');
const path = require('path');
const mailer = require('../templates/Pedido-template');
const mailerP = require('../templates/PedidoPromo-template');
const Pedido = require('../models/Pedido');

router.get('/', async(req, res) =>{
    const pedido = await Pedido.find();
    res.json(pedido);
})

router.post('/', async(req, res) =>{
    const {nombreCliente, fechaEntrega, descripcion, tlfCliente, totalMonto, typeEntrega} = req.body;
    const NewPedido = new Pedido({nombreCliente, fechaEntrega, descripcion, tlfCliente, totalMonto, typeEntrega})
    await NewPedido.save();
    res.send({message: "Pedido Agendado"})
})

router.post('/promo', async(req, res) =>{
    const {nombreCliente, fechaEntrega, descripcion, tlfCliente, totalMonto, typeEntrega} = req.body;
    const NewPedidoP = new Pedido({nombreCliente, fechaEntrega, descripcion, tlfCliente, totalMonto, typeEntrega})
    await NewPedidoP.save();
    res.send({message: "Pedido Promocion Realizado"})
    mailerP.enviaremail(NewPedidoP.nombreCliente, NewPedidoP.tlfCliente, NewPedidoP.typeEntrega, NewPedidoP.descripcion, NewPedidoP.fechaEntrega, NewPedidoP.totalMonto)
})

router.post('/web', async(req, res) =>{
    const {nombreCliente, fechaEntrega, descripcion, tlfCliente,  typeEntrega} = req.body;
    const NewPedidoW = new Pedido({nombreCliente, fechaEntrega, descripcion, tlfCliente, typeEntrega})
    await NewPedidoW.save();
    res.send({message: "Pedido Realizado"})
    mailer.enviaremail(NewPedidoW.nombreCliente, NewPedidoW.tlfCliente, NewPedidoW.typeEntrega, NewPedidoW.descripcion, NewPedidoW.fechaEntrega)
})

router.delete('/:id', async(req, res) =>{
    const pedido = await Pedido.findByIdAndDelete(req.params.id);
    // fs.unlink(path.resolve('./backend/public'+ pedido.imagePathClient))
    res.send({message: "Pedido eliminado"})
})

router.put('/:id', async (req, res) =>{
    await Pedido.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        status: 'pedido actualizado'
    })
})

router.get('/:id', async (req, res)=>{
    const pedido = await Pedido.findById(req.params.id);
    res.json(pedido);
})

module.exports = router;