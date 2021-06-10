//solo para usar los elementos de mi base de datos en desarrollo
if(process.env.NODE_ENV !=='production'){
    require('dotenv').config();
}

const express = require('express');
const morgan = require('morgan');
// const multer = require('multer');
const path = require('path');
const cors = require('cors');

//inicializacion
const app= express();
require('./database');

//Midelwares
 app.use(morgan('dev'));
// const storage= multer.diskStorage({ //ruta de carpeta donde se configura la forma en la que se guarda
//     destination: path.join(__dirname, 'public/uploads'),
//     filename:(req,file,cb)=>{
//         cb(null, file.originalname);
//     }
// })
// app.use(multer({
//     storage,
//     dest:path.join(__dirname, 'public/uploads'),
// }).single('image'));//para guardar los archivos o imagenes
app.use(express.urlencoded({extended:false})); //para entender los formularios
app.use(express.json());// entender los json
app.use(cors());

//static files
app.use(express.static(path.join(__dirname, 'public')));//interactuar con todos los archivos staticos

//routes APIS
app.use('/api/pedidos',require('./routes/pedidos'));
app.use('/api/gastos',require('./routes/gastos'));
app.use('/api/adminwebC',require('./routes/adminwebC'));
app.use('/api/adminwebP',require('./routes/adminwebP'));
app.use('/api/usuario',require('./routes/usuarios'));

//settings
app.set('port', process.env.PORT || 3000);

//start the server
app.listen(app.get('port'), () =>{
    console.log('server on port', app.get('port'))
})
