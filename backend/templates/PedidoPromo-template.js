'user strict'

const nodemailer = require('nodemailer');
require('dotenv').config();

this.enviaremail =(nombreCliente, tlfCliente, typeEntrega, descripcion, fechaEntrega, totalMonto) =>{
    let transporter = nodemailer.createTransport({
        service:process.env.SERVICE,
        Host: process.env.HOST,
        port: process.env.PORT, //587 o 465
        secure: true, 
        Authentication: true,
        auth:{
            type: "login",
            user: process.env.MAILUSER,
            pass: process.env.MAILPASSWD
        }
    });

    let mail_opcions ={
        from:'thy Gisz',
        to: process.env.MAILUSER,
        subject:'usted tiene un pedido',
        html:
        `
            <table border="1" cellpadding="0" cellspacing="0" width="100%">
                <tr bgcolor="#565353">
                    <td>
                        <h1 style="font-size: 45px; font-family: fantasy; color:white; text-shadow:2px 3px 4px #ca2372;" align="center">Han solicitado un pedido de Promoción</h1>
                    </td>                    
                </tr>
                <tr>
                    <td bgcolor="white" style="padding: 40px 30px 40px 30px;" align="center">  
                    
                        <p style="font-size: 20px; color:#ca2372;"> Nombre del cliente: <b style="color: #0e0e0e;"> ${nombreCliente},</b></p>
                        <p style="font-size: 20px; color:#ca2372;"> Numero telefonico: <b style="color: #0e0e0e;"> ${tlfCliente},</b></p>
                        <p style="font-size: 20px; color:#ca2372;">ha realizado un pedido desde: <b style="color: #0e0e0e;"> ${typeEntrega}</b></p>
                        <p style="font-size: 20px; color:#ca2372;">Con la siguiente descripción: <b style="color:#0e0e0e;">${descripcion}.</b></p>
                        <p style="font-size: 20px; color:#ca2372;">Para la fecha de: <b style="color:#0e0e0e;">${fechaEntrega}.</b></p>
                        <p style="font-size: 20px; color:#ca2372;">Por un costo de:  <b style="color:#0e0e0e;">${totalMonto} $.</b></p>
                        <p style="font-size: 20px; color:#ca2372;">Espera su confirmacion para finiquitar el pedido</p>                 
                    </td>
                </tr>
            </table>        
        `
    };

    transporter.sendMail(mail_opcions, (err, inf)=>{
        if(err){
            console.log(err);
        }else{
            console.log('Exito total', inf)
        }
    });
}

module.export=this;