const{Router} = require('express');
const router = Router();
const multer = require('multer');
const fs = require('fs-extra');
const path = require('path');
const AdminWC = require('../models/AdminwebC.js');

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
    const adminW = await AdminWC.find();
    res.json(adminW);
})

router.post('/uploads', upload.single('image'), async(req, res) =>{
    const NewPromo = 'uploads/' + req.file.filename;
    res.json(NewPromo);
})

router.post('/', async(req, res) =>{
    const {typeCatalago, typeImg, descripcion,imgCatalago} = req.body;
    const Newcatalago = new AdminWC({typeCatalago, typeImg, descripcion,imgCatalago})
    await Newcatalago.save();
   res.send({message: "Imagen catálago guardada"})
})

router.delete('/:id', async(req, res) =>{
    const adminW = await AdminWC.findByIdAndDelete(req.params.id);
    fs.unlink(path.resolve('./backend/public'+ adminW.imagePath))
    res.send({message: "Se Ha eliminado Contenido de catálago"})
})

router.get('/:id', async (req, res)=>{
    const adminW = await AdminWC.findById(req.params.id);
    res.json(adminW);
})

module.exports = router;