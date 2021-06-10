<template>
    <main role="main" class="col-md-12 col-lg-12" style="margin-top: 15vh; padding-left: 0px;padding-right: 0px;">

         <div class="FondoWebPromoHome" >
            <div class="container" style="margin-top: 6vh;" id="/">
                <div class="row">                    
                    <div class="col-xs-6 col-sm-6 col-md-6">
                        <h1 class="TextHome-Web" style="margin-top: 137px;">¡Complacerte es Nuestro placer!</h1>
                        <p  class="text-WebHome" style="margin: 1px 206px 1px 36px !important;">Todo para acortejar a tus invitados, compañeros de oficina, Amigos, Pequeñines de la casa e incluso tu esquicito paladar</p>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-6">
                       
                    </div>
                </div>  
            </div>
        </div>

        <div class="FondoWebPromoCatalago" >
            <div class="container" style="margin-top: 6vh;" id="catalago">
                <div class="row">
                    <div class="col" >
                        <div style="text-align: center;">
                            <h2 class="text-WebCatalago">¿Qué Prefieres?</h2>
                            <h6  class="WebCatalago2">Tus gustos nos interesa</h6>
                        </div>                    
                        <div class="row">
                            <div class="col-xs-12 col-sm-6 col-md-6">
                                <div class="card CardCatalago">
                                    <img src="/image/dulce.jpg" class="imagenCardCatalago">
                                    <div class="card-body">
                                        <h5 class="card-title">Dulces</h5>
                                        <ul>
                                            <li>Ponques</li>
                                            <li>Brownis</li>
                                            <li>Galletas</li>
                                            <li>Gelatinas</li>
                                            <li>Quesillos</li>
                                            <li>Trufas</li>
                                            <li>Donas</li>
                                            <li>Bombas</li>
                                        </ul>
                                    </div>
                                    <div class="card-footer">
                                        <small class="text-mutedText">Ricos dulces</small>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-6">
                                <div class="card CardCatalago">
                                    <img src="/image/salsas.jpg" class="imagenCardCatalago">
                                    <div class="card-body">
                                        <h5 class="card-title">Salsas</h5>
                                        <ul>
                                            <li>Tomate</li>
                                            <li>Ajo</li>
                                            <li>Cebolla</li>
                                            <li>Picante</li>
                                            <li>Aguacate</li>
                                            <li>Queso</li>
                                            <li>Bechamel</li>
                                            <li>Perejil</li>
                                            
                                        </ul>
                                    </div>
                                    <div class="card-footer">
                                        <small class="text-mutedText">Salsas al gusto</small>
                                    </div>
                                </div>
                            </div>

                            <!-- Force next columns to break to new line -->
                            <div class="w-100"></div>
                            <div class="col-xs-12 col-sm-6 col-md-6">
                                <div class="card CardCatalago">
                                    <img src="/image/panes.jpg" class="imagenCardCatalago">
                                    <div class="card-body">
                                        <h5 class="card-title">Panes</h5>
                                        <ul>
                                            <li>Pan navideño</li>
                                            <li>Pan de queso</li>
                                            <li>Pan de coco</li>
                                            <li>Quesadillas</li>
                                            <li>Golfeados</li>
                                        </ul>
                                    </div>
                                    <div class="card-footer">
                                        <small class="text-mutedText">Del horno para tu boca</small>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-6">
                                <div class="card CardCatalago">
                                    <img src="/image/salado.jpg" class="imagenCardCatalago">
                                    <div class="card-body">
                                        <h5 class="card-title">Salados</h5>
                                       <ul>
                                            <li>Tequeños</li>
                                            <li>Pastelitos</li>
                                            <li>Mini pizzas</li>
                                            <li>Tostadas</li>
                                            <li>Galletas Saladas</li>
                                        </ul>
                                    </div>
                                    <div class="card-footer">
                                        <small class="text-mutedText">Comparte y disfruta</small>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="col fondoCatalago" style="background: black;">
                            <flipbook class="flipbook" :pages="catalogoI" v-slot="flipbook">
                                <b-button @click="flipbook.flipLeft" class="btnLEFRig"><img src="/image/fI.png" style="width: 30px;"></b-button>
                                <b-button @click="flipbook.flipRight" class="btnLEFRig"><img src="/image/fD.png" style="width: 30px;"></b-button>
                            </flipbook>
                        </div>
                    </div>
                </div>
            </div> 
        </div>

        <div class="FondoWebPromoPromo" id="promociones">
            <div class="container" style="margin-top: 6vh; margin-left: 63px;">
                    <div class="row">
                        <div class="">
                            <div style="text-align: center;">
                                <h2 class="text-WebCatalago-h2">Promociones Del mes</h2>
                                <p v-if="errors.length">
                                    <b-alert :show="dismissCountDown"  dismissible  fade variant="danger" @dismiss-count-down="countDownChanged">                               
                                        {{errors}} Pedido no realizado{{ dismissCountDown }} seconds...
                                    </b-alert>
                                </p>
                                <p v-if="aprov.length">
                                    <b-alert :show="dismissCountDown"  dismissible  fade variant="success" @dismiss-count-down="countDownChanged">                               
                                        {{aprov}} {{ dismissCountDown }} seconds...
                                    </b-alert>
                                </p>
                            </div>                    
                            <div class="row" style="margin-top: 90px;"  >
                                <div class="col-xs-12 col-sm-3 col-md-3 fondimgPromo" v-for="item of promos" v-if="item.typeCombo == 'Combo1'">
                                <img id="show-btn" @click="getGastoUnico(item._id)" :src="'/'+item.imgPromo" class="imagen" style="width: 24vw;">
                                </div>
                                <div class="col-xs-12 col-sm-3 col-md-3 fondimgPromo" v-for="item of promos" v-if="item.typeCombo == 'Combo2'">
                                    <img id="show-btn" @click="getGastoUnico(item._id)" :src="'/'+item.imgPromo"  class="imagen" style="width: 24vw;">
                                </div>
                                <div class="col-xs-12 col-sm-3 col-md-3 fondimgPromo" v-for="item of promos" v-if="item.typeCombo == 'Combo3'">
                                    <img id="show-btn" @click="getGastoUnico(item._id)" :src="'/'+item.imgPromo"  class="imagen" style="width: 24vw;">
                                </div>
                                <div class="col-xs-12 col-sm-3 col-md-3 fondimgPromo" v-for="item of promos" v-if="item.typeCombo == 'Combo4'">
                                <img id="show-btn" @click="getGastoUnico(item._id)" :src="'/'+item.imgPromo"  class="imagen" style="width: 24vw;">
                                </div>
                                </div>
                            </div>
                    </div>
                </div> 
                <div style="margin-top: 16vh !important;">
                <b-modal ref="my-modalA" hide-footer title="Solicitar Pedido" >
                    <div class="d-block text-center" >
                        <div class="card-deck">
                            <div class="card" style="background: rgb(10 5 31 / 68%);">
                                <img src="/image/iconoA.png" class="imageModal" >
                                <div class="card-body" >
                                <form @submit.prevent="agendar"  ref="anyName" id="book-form">              
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <input type="text" v-model="nombreCliente" class="form-control" placeholder="nombre cliente" required>
                                            </div>
                                            <div class="form-group col-md-6">
                                                <input type="text" v-model="tlfCliente" class="form-control" placeholder="Telefono Cliente" required>
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <input type="date" class="form-control" v-model="fechaEntrega" required>  
                                            </div>
                                            <div class="form-group col-md-6">
                                                <p style="color: white;">{{this.AdminPUg.precio}} $</p>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <p style="color: white;">{{this.AdminPUg.descripcion}}</p>
                                        </div>
                                        <div class="card-footer">
                                            <button class="btn btn-primary btn-lg btn-block btnG">Guardar</button>
                                        </div>                                        
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </b-modal>
                </div> 
            </div>   
        </div>


        <div class="FondoWebPromoPedido" id="pedidos">
           <div class="container" style="margin-top: 6vh;">
                <div class="row">
                    <div class="col Col-Web1">
                        <div style="text-align: center;">
                            <h2 class="text-WebCatalago">Has tu pedido</h2>
                            <h6  class="WebCatalago2">Llena el siguiente formulario para solicitar tu pedido</h6>
                            <p v-if="errorsP.length">
                                <b-alert :show="dismissCountDown"  dismissible  fade variant="danger" @dismiss-count-down="countDownChanged">                               
                                    {{errorsP}} Pedido no realizado{{ dismissCountDown }} seconds...
                                </b-alert>
                            </p>
                            <p v-if="aprovP.length">
                                <b-alert :show="dismissCountDown"  dismissible  fade variant="success" @dismiss-count-down="countDownChanged">                               
                                    {{aprovP}} {{ dismissCountDown }} seconds...
                                </b-alert>
                            </p>
                        </div>                    
                        <div class="row">
                            <div class="col-6 col-sm-12">
                                <div class="card CardPedidos">
                                    <div class="card-body">
                                        <form @submit.prevent="pedir"  ref="anyName" id="book-form">              
                                            <div class="form-row">
                                                <div class="form-group col-md-6">
                                                    <input type="text" v-model="nombreClienteP" class="form-control" placeholder="nombre cliente" required>
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <input type="text" v-model="tlfClienteP" class="form-control" placeholder="Telefono Cliente" required>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <input type="date" class="form-control" v-model="fechaEntregaP" required> 
                                            </div>
                                            <div class="form-group">
                                                <textarea  name="description" class="form-control" cols="30" v-model="descripcionP" rows="10" placeholder="Descripción" required></textarea>
                                            </div>
                                            <div class="card-footer">
                                                <button class="btn btn-primary btn-lg btn-block btnG">Guardar</button>
                                            </div>                                        
                                        </form>
                                    </div>
                                </div>
                            </div>
                            
                            </div>
                        </div>
                    <div class="col fondoCatalago" style="background: black;">
                        <img src="/image/coltn.png" style="width: 42vw;height: 54vh;">
                    </div>
                </div>
            </div>     
        </div>


        <div class="FondoWebPromoContacto" id="contactos" >
             <div class="container" style="margin-top: 10vh;">
                <div class="row">
                    <div class="col Col-Web1">
                        <div style="text-align: center;margin: 1px 1px 54px 1px;">
                            <h2 class=" TextHome-Web">Contactate Con nosotros</h2>
                            <h6  class="text-WebCatalago-h6">Es nuestro placer Atenderte y serte de mucha ayuda</h6>
                        </div>                    
                        <div class="row">
                             <div class="col-xs-12 col-sm-4 col-md-4">
                                <div class="card CardContcto">
                                    <img src="/image/foto.png" class="imagenCcontacto">
                                    <div class="card-header cardHeAgenda">
                                        <h5 class="card-title">Giss Hernández</h5>
                                        <small class="text-mutedText">Promotora</small>                                        
                                    </div>
                                    <div class="card-body">     
                                        <h6 style="text-align: center;">Tlf: 0410-0000000</h6>
                                    </div>
                                    <div class="card-footer">
                                        <small class="text-mutedText">Venezuela</small>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-4 col-md-4">
                                <div class="card CardContcto">
                                    <img src="/image/foto.png" class="imagenCcontacto">
                                    <div class="card-header cardHeAgenda">
                                        <h5 class="card-title">José Hernandez</h5>
                                        <small class="text-mutedText">Promotor</small>                                        
                                    </div>
                                    <div class="card-body">
                                        <h6 style="text-align: center;">Tlf: 0410-0000000</h6>
                                    </div>
                                    <div class="card-footer">
                                        <small class="text-mutedText">Venezuela</small>
                                    </div>
                                </div>
                            </div>
                             <div class="col-xs-12 col-sm-4 col-md-4">
                                <div class="card CardContcto">
                                    <img src="/image/foto.png" class="imagenCcontacto">
                                    <div class="card-header cardHeAgenda">
                                        <h5 class="card-title">Gizz Hernández</h5>
                                        <small class="text-mutedText">Promotora</small>                                        
                                    </div>
                                    <div class="card-body">
                                        <h6 style="text-align: center;">Tlf: 0410-0000000</h6>
                                    </div>
                                    <div class="card-footer">
                                        <small class="text-mutedText">Venezuela</small>
                                    </div>
                                </div>
                            </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 ">                    
                        <footer class="footerWeb" style="margin: 226px 476px 1px 476px !important;">
                            <div class="container">
                            <div class="text1Footer">
                                &copy; <strong><span> TheyGisz</span></strong><span> Diseños y creado por <span class="text3Footer">GissHernandez</span></span>
                            </div>
                            </div>
                        </footer>
                    </div>
                </div>  
            </div>             
        </div>         
    </main>
</template>
<script>
    import Flipbook from 'flipbook-vue'
  import PedidoServices from '../../../services/pedidoServices.js';
  import AdminWebServices from '../../../services/adminwebServices.js';
  const adminWebServices = new AdminWebServices();
  const pedidoServices = new PedidoServices();

  export default {
    data() {
      return {
        nombreCliente:"",
        tlfCliente:"",
        fechaEntrega:"",
        descripcion:"",
        pedidos:[],
        promos:[],
        AdminPUg:[],
        errors:"",
        aprov: "",
        errorsP:"",
        aprovP: "",
        gtuId:"",
        AdminPU:"",
        nombreCliente:"",
        fechaEntrega:"",
        descripcion:"",
        tlfCliente:"",
        totalMonto: "",                
        typeEntrega:"",
        precio:"",
        dismissSecs: 3,
        dismissCountDown: 0,
        imagePathClient: null,
        id:null,
        showDismissibleAlert: false,
        nombreClienteP:"",
        tlfClienteP:"",
        fechaEntregaP:"",
        descripcionP:"",
        catalogoI:[],

      }
    },
    components: {
        Flipbook  
    },
    created(){
        this.$store.commit('SET_LAYOUT', 'web-layout')
        this.getPedido()
        this.getPromo() 
        this.getCatalago()   
    },
    methods: {
        showModalAgenda(){
            this.$refs['my-modalA'].show()
        },
        hideModalAgenda(){
            this.$refs['my-modalA'].hide()
        },
        toggleModalAgenda(){
            this.$refs['my-modalA'].toggle('#toggle-btn')
        },
        previewFiles(event) {
            this.files = this.$refs.myFiles.files[0].name
        },
        getPedido(){
            const pedidos = pedidoServices.getPedidos();
            pedidos.then(data => {
                this.pedidos = data;   
                console.log(data, "data")                 
            })                
        },
        getPromo(){
            const promo = adminWebServices.getAdminP();
            promo.then(data => {
                this.promos = data;
                console.log(data, "data")   
            } )                
        },
        getGastoUnico(id){
            this.$refs['my-modalA'].show()
            const pedido = adminWebServices.getAdminPU(id);
            pedido.then(data => {
                this.AdminPUg = data;
                this.AdminPU =this.AdminPUg._id 
                console.log(this.AdminPUg.typeCombo  , "data")                  
            } )
        },
        getCatalago(){
            const cata = adminWebServices.getAdminC();
            cata.then(dato => {
                console.log(dato, "desde catalago")
                for(let item of dato){
                    this.catalogoI.push(item.imgCatalago) 
                    console.log(this.catalogoI, "desde catalago for")                      
                }
            } )
        },           
        agendar(e){
            e.preventDefault();  
            //   http://localhost:3000/api/pedidos/promo                   
            fetch('/api/pedidos/promo',{
                method:'POST',
                body: JSON.stringify({
                    "nombreCliente": this.nombreCliente,
                    "descripcion": this.AdminPUg.descripcion,
                    "fechaEntrega": this.fechaEntrega,
                    "tlfCliente": this.tlfCliente,
                    "totalMonto": this.AdminPUg.precio,
                    "imagePathClient": this.files,
                    "typeEntrega": "Promo"
                }),
                headers:{
                    'Accept' : 'application/json',
                    'content-type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(res => {      
                if(res.error){
                    this.errors=res.errors
                } else {
                    this.aprov=res.message
                    this.dismissCountDown = this.dismissSecs
                    this.toggleModalAgenda()
                    this.$refs['anyName'].reset()
                    this.getPedido()  
                }             
            })
            // location.reload();
        },
        pedir(e){
            e.preventDefault();  
            //   http://localhost:3000/api/pedidos/web                   
            fetch('/api/pedidos/web',{
                method:'POST',
                body: JSON.stringify({
                    "nombreCliente": this.nombreClienteP,
                    "descripcion": this.descripcionP,
                    "fechaEntrega": this.fechaEntregaP,
                    "tlfCliente": this.tlfClienteP,
                    "typeEntrega": "PedidoWeb"
                }),
                headers:{
                    'Accept' : 'application/json',
                    'content-type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(res => {      
                if(res.error){
                    this.errorsP=res.errors
                } if(!res.error) {
                    this.$refs['anyName'].reset()
                }
                this.aprovP=res.message
                this.dismissCountDown = this.dismissSecs           
            })
            // location.reload();
        },
        countDownChanged(dismissCountDown) {
            this.dismissCountDown = dismissCountDown
        },
        showAlert() {
            this.dismissCountDown = this.dismissSecs
        }      
    }
  }
</script>