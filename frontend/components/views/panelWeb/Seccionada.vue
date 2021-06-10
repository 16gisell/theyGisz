<template>
    <main role="main" class="col-md-9 col-lg-12" style="margin-top: 15vh;">

        <div class="FondoWebPromoHome" >
            <div class="container" style="margin-top: 6vh;">
                <div class="row">
                    <div class="col-12 ">
                        <img style="margin: 1px 283px 1px 290px !important;" src="/backend/public/image/logomio2.png" class="">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-8 ">
                        <h1 class="TextHome-Web">¡Complacerte es Nuestro placer!</h1>
                    </div>
                </div>  
            </div>
        </div>
        <div class="FondoWebPromoCatalago" >
            <div class="container" style="margin-top: 6vh;">
                <div class="row">
                    <div class="col Col-Web1">
                        <div style="text-align: center;">
                            <h2 class="text-WebCatalago-h2">¿Qué Prefieres?</h2>
                            <h6  class="text-WebCatalago-h6">Tus gustos nos interesa</h6>
                        </div>                    
                        <div class="row">
                            <div class="col-6 col-sm-6">
                                <div class="card CardCatalago">
                                    <img src="/backend/image/dulce.jpg" class="imagenCardCatalago">
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
                                        <small class="text-muted">Last updated 3 mins ago</small>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6 col-sm-6">
                                <div class="card CardCatalago">
                                    <img src="/backend/image/salsas.jpg" class="imagenCardCatalago">
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
                                        <small class="text-muted">Last updated 3 mins ago</small>
                                    </div>
                                </div>
                            </div>

                            <!-- Force next columns to break to new line -->
                            <div class="w-100"></div>
                            <div class="col-6 col-sm-6">
                                <div class="card CardCatalago">
                                    <img src="/backend/image/panes.jpg" class="imagenCardCatalago">
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
                                        <small class="text-muted">Last updated 3 mins ago</small>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6 col-sm-6">
                                <div class="card CardCatalago">
                                    <img src="/backend/image/salado.jpg" class="imagenCardCatalago">
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
                                        <small class="text-muted">Last updated 3 mins ago</small>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="col fondoCatalago" style="background: black;">
                            <flipbook class="flipbook" :pages="pages" v-slot="flipbook">
                                <b-button @click="flipbook.flipLeft" class="btnLEFRig"><img src="/backend/public/image/fI.png" style="width: 30px;"></b-button>
                                <b-button @click="flipbook.flipRight" class="btnLEFRig"><img src="/backend/public/image/fD.png" style="width: 30px;"></b-button>
                            </flipbook>
                        </div>
                    </div>
                </div>
            </div> 
        </div>

        <div class="FondoWebPromoPromo" >
            <div class="container" style="margin-top: 6vh; margin-left: 20px; ">
                    <div class="row">
                        <div class="col Col-Web1">
                            <div style="text-align: center;">
                                <h2 class="text-WebCatalago-h2">Promociones Del mes</h2>
                            </div>                    
                            <div class="row" style="margin-top: 90px;"  >
                                <div class="col-12 col-sm-3 fondimgPromo" v-for="item of promos" v-if="item.typeCombo == 'Combo1'">
                                <img id="show-btn" @click="getGastoUnico(item._id)" src="/backend/public/image/promociones/Diapositiva5.jpg" class="imagen" style="width: 24vw;">
                                </div>
                                <div class="col-12 col-sm-3 fondimgPromo" v-for="item of promos" v-if="item.typeCombo == 'Combo2'">
                                    <img id="show-btn" @click="getGastoUnico(item._id)" src="/backend/public/image/promociones/Diapositiva6.jpg" class="imagen" style="width: 24vw;">
                                </div>
                                <div class="col-12 col-sm-3 fondimgPromo" v-for="item of promos" v-if="item.typeCombo == 'Combo3'">
                                    <img id="show-btn" @click="getGastoUnico(item._id)" src="/backend/public/image/promociones/Diapositiva7.jpg" class="imagen" style="width: 24vw;">
                                </div>
                                <div class="col-12 col-sm-3 fondimgPromo" v-for="item of promos" v-if="item.typeCombo == 'Combo4'">
                                <img id="show-btn" @click="getGastoUnico(item._id)" src="/backend/public/image/promociones/Diapositiva8.jpg" class="imagen" style="width: 24vw;">
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
                                <img src="/backend/image/iconoA.png" class="imageModal" >
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


        <div class="FondoWebPromoPedido" >
           <div class="container" style="margin-top: 6vh;">
                <div class="row">
                    <div class="col Col-Web1">
                        <div style="text-align: center;">
                            <h2 class="text-WebCatalago-h2">Has tu pedido</h2>
                            <h6  class="text-WebCatalago-h6">Llena el siguiente formulario para solicitar tu pedido</h6>
                        </div>                    
                        <div class="row">
                            <div class="col-6 col-sm-12">
                                <div class="card CardPedidos">
                                    <div class="card-body">
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
                                                    <input type="text" v-model="totalMonto" class="form-control" placeholder="Precio estimado" required>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <textarea  name="description" class="form-control" cols="30" v-model="descripcion" rows="10" placeholder="Descripción" required></textarea>
                                            </div>
                                            <div class="form-group">
                                                <input type="file" id="file"  ref="myFiles" @change="previewFiles" class="form-control" title="insertar foto" required>
                                            </div>
                                            <div class="card-footer">
                                                <button class="btn btn-primary btn-lg btn-block btnG">Guardar</button>
                                            </div>                                        
                                        </form>
                                    </div>
                                    <div class="card-footer">
                                        <small class="text-muted">Last updated 3 mins ago</small>
                                    </div>
                                </div>
                            </div>
                            
                            </div>
                        </div>
                    <div class="col fondoCatalago" style="background: black;">
                        <img src="/backend/image/instruciones2.png" style="width: 35vw;height: 64vh;">
                    </div>
                </div>
            </div>     
        </div>


        <div class="FondoWebPromoContacto" >
             <div class="container" style="margin-top: 10vh;">
                <div class="row">
                    <div class="col Col-Web1">
                        <div style="text-align: center;margin: 1px 1px 54px 1px;">
                            <h2 class="text-WebCatalago-h2">Contactate Con nosotros</h2>
                            <h6  class="text-WebCatalago-h6">Es nuestro placer Atenderte y serte de mucha ayuda</h6>
                        </div>                    
                        <div class="row">
                             <div class="col-6 col-sm-4">
                                <div class="card CardContcto">
                                    <img src="/backend/image/foto.png" class="imagenCcontacto">
                                    <div class="card-header cardHeAgenda">
                                        <h5 class="card-title">Gisell Hernández</h5>
                                        <small class="text-muted">Promotora</small>                                        
                                    </div>
                                    <div class="card-body">     
                                        <h6 style="text-align: center;">Tlf: 0412-5936787</h6>
                                    </div>
                                    <div class="card-footer">
                                        <small class="text-muted">Los Teques, Edo. Miranda</small>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6 col-sm-4">
                                <div class="card CardContcto">
                                    <img src="/backend/image/foto.png" class="imagenCcontacto">
                                    <div class="card-header cardHeAgenda">
                                        <h5 class="card-title">José Hernandez</h5>
                                        <small class="text-muted">Promotor</small>                                        
                                    </div>
                                    <div class="card-body">
                                        <h6 style="text-align: center;">Tlf: 0412-5936787</h6>
                                    </div>
                                    <div class="card-footer">
                                        <small class="text-muted">Los Teques, San Antonio, Edo. Miranda</small>
                                    </div>
                                </div>
                            </div>
                             <div class="col-6 col-sm-4">
                                <div class="card CardContcto">
                                    <img src="/backend/image/foto.png" class="imagenCcontacto">
                                    <div class="card-header cardHeAgenda">
                                        <h5 class="card-title">Gismar Hernández</h5>
                                        <small class="text-muted">Promotora</small>                                        
                                    </div>
                                    <div class="card-body">
                                        <h6 style="text-align: center;">Tlf: 0412-5936787</h6>
                                    </div>
                                    <div class="card-footer">
                                        <small class="text-muted">Valencia, Edo Carabobo</small>
                                    </div>
                                </div>
                            </div>
                            
                            </div>
                        </div>
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
        pedidos:[],
        promos:[],
        AdminPUg:[],
        errors:[],
        aprov: [],
         pages: [
            null,
           '/backend/image/Catalago/Diapositiva1.jpg',
           '/backend/image/Catalago/Diapositiva2.jpg',
           '/backend/image/Catalago/Diapositiva3.jpg',
           '/backend/image/Catalago/Diapositiva4.jpg',
           '/backend/image/Catalago/Diapositiva5.jpg',
           '/backend/image/Catalago/Diapositiva6.jpg',
           '/backend/image/Catalago/Diapositiva7.jpg',
           '/backend/image/Catalago/Diapositiva8.jpg',
           '/backend/image/Catalago/Diapositiva9.jpg',
           '/backend/image/Catalago/Diapositiva10.jpg',
           '/backend/image/Catalago/Diapositiva11.jpg',
           '/backend/image/Catalago/Diapositiva12.jpg',
           '/backend/image/Catalago/Diapositiva13.jpg',
           '/backend/image/Catalago/Diapositiva14.jpg',
           '/backend/image/Catalago/Diapositiva15.jpg',
           '/backend/image/Catalago/Diapositiva16.jpg',
           '/backend/image/Catalago/Diapositiva17.jpg',
           '/backend/image/Catalago/Diapositiva18.jpg',
           '/backend/image/Catalago/Diapositiva19.jpg',
           '/backend/image/Catalago/Diapositiva20.jpg',
           '/backend/image/Catalago/Diapositiva21.jpg',
           '/backend/image/Catalago/Diapositiva22.jpg',
           '/backend/image/Catalago/Diapositiva23.jpg',
           '/backend/image/Catalago/Diapositiva24.jpg',
           '/backend/image/Catalago/Diapositiva25.jpg',
           '/backend/image/Catalago/Diapositiva26.jpg',
            ],
        gtuId:"",
        AdminPU:"",
        nombreCliente:"",
        fechaEntrega:"",
        descripcion:"",
        tlfCliente:"",
        totalMonto: "",                
        typeEntrega:"",
        dismissSecs: 5,
                dismissCountDown: 0,
                imagePathClient: null,
                id:null,
                showDismissibleAlert: false,

      }
    },
    components: {
        Flipbook  
    },
    created(){
      this.getPedido()
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
      getCatalago(){
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
      agendar(e){
          e.preventDefault();   
        //   http://localhost:3000/api/pedidos                  
          fetch('/api/pedidos',{
              method:'POST',
              body: JSON.stringify({
                  "nombreCliente": this.nombreCliente,
                  "descripcion": this.AdminPUg.descripcion,
                  "fechaEntrega": this.fechaEntrega,
                  "tlfCliente": this.tlfCliente,
                  "totalMonto": this.AdminPUg.Precio,
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
                  this.errors.push(res.errors)
              } else {
                  this.aprov.push(res.message)
                  this.dismissCountDown = this.dismissSecs
                  this.toggleModalAgenda()
                  this.$refs['anyName'].reset()
                  this.getPedido()  
              }             
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