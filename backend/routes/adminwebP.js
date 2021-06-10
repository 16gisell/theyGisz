const{Router} = require('express');
const router = Router();
const multer = require('multer');
const fs = require('fs-extra');
const path = require('path');
const AdminWP = require('../models/AdminwebP.js');

const imagen=null
const storage= multer.diskStorage({ //ruta de carpeta donde se configura la forma en la que se guarda
    destination: path.join(__dirname, '../public/uploads'),
    filename:(req,file,cb)=>{
        cb(null, file.originalname);
    }
})
const upload = multer({
    dest: path.join(__dirname, '../public/uploads'),
    storage,
  });


router.get('/', async(req, res) =>{
    const adminW = await AdminWP.find();
    res.json(adminW);
})

router.post('/uploads', upload.single('image'), async(req, res) =>{
    const NewPromo = 'uploads/' + req.file.filename;
    res.json(NewPromo);
})
router.post('/', async(req, res) =>{
    console.log(req.body)
    const {typeImg, descripcion, precio,typeCombo,imgPromo} = req.body;
    const NewPromo = new AdminWP({typeImg, descripcion, precio,typeCombo,imgPromo})
    await NewPromo.save();
   res.send({message: "Promocion guardada"})
})


router.delete('/:id', async(req, res) =>{
    const adminW = await AdminWP.findByIdAndDelete(req.params.id);
    fs.unlink(path.resolve('./backend/public'+ adminW.imagePath))
    res.send({message: "Se ha eliminado el combo"})
})

router.get('/:id', async (req, res)=>{
    const adminW = await AdminWP.findById(req.params.id);
    res.json(adminW);
})

module.exports = router;