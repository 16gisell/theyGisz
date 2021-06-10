<template>
    <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4" >
        <div class="chartjs-size-monitor" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;">
            <div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                <div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div>
            </div>
            <div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                <div style="position:absolute;width:200%;height:200%;left:0; top:0"></div>
            </div>
        </div>
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
            <h1 class="h2 textTitles"><img src="/image/iconoA.png"> Agenda</h1>
            <b-button id="show-btn" @click="showModalAgenda" class="btnG"> Agendar</b-button>
        </div>
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
        
        <div class="container">
            <div class="row">
            <!--Solo deseo mostrar los pedidos especificos-->
                <div class="col-xs-12 col-sm-6 col-md-6" v-for="item of pedidos" v-if="item.typeEntrega == 'Espera' || item.typeEntrega == 'Promo'">               
                    <div class="card-deck">
                        <div class="card cardAgenda">                            
                            <div class="card-header cardHeAgenda">
                                <h5 class="card-title">{{item.nombreCliente}}</h5>
                                <small class="text-mutedText">{{item._id}}</small>
                                <img src="/image/imagesftue.png" v-if=" item.typeEntrega == 'Promo'">
                            </div>
                            <div class="card-body">
                                <p class="card-text texCardBodyAgTitulo">Fecha de Entrega: <span class="texCardBodyAg">{{item.fechaEntrega}}</span></p>
                                <p class="card-text texCardBodyAgTitulo">Descripcion:</p>
                                <p class="card-text texCardBodyAg">{{item.descripcion}}</p>
                            </div>
                            <div class="card-footer">
                                <button class="btn btn-primary btn-lg btn-block btnCardVer" @click="showModalver(item._id)">Ver</button>
                                <button class="btn btn-primary btn-lg btn-block btnCardEntreg" @click="showModalEntrega(item._id)">Entregado</button>
                                <button class="btn btn-primary btn-lg btn-block btnCardCancel" @click="showModalelimi(item._id)" >Cancelado</button>
                            </div>
                        </div>
                    </div>
                </div>               
            </div>
        </div>
        
        <div>
            <!--Modal para agendar los pedidos-->
            <b-modal ref="my-modalA" hide-footer title="Agendar" v-if="alert == false">
                <div class="d-block text-center">
                    <div class="card-deck">
                        <div class="card" style="background: rgb(191 107 147 / 55%);">
                            <img src="/image/iconoA.png" class="imageModal" >
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
                                            <input type="text" v-model="totalMonto" class="form-control" placeholder="Total factura" required>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <textarea  name="description" class="form-control" cols="30" v-model="descripcion" rows="10" placeholder="Descripción" required></textarea>
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

            <!--Modal para mostrar el contenido de cada targeta-->
            <b-modal ref="my-modalA" hide-footer v-if="alert == true && ver== true && accion == null">
                <div class="d-block text-center">
                    <div class="card-deck">
                        <div class="card" style="background: rgb(191 107 147 / 55%);">
                            <img :src="'/public/'+this.gastoU.imagePathClient" class="imageModal" >
                            <div class="card-header cardHeAgenda">
                                <h5 class="card-title">{{this.gastoU.nombreCliente}}</h5>
                                <small class="text-mutedText">{{this.gastoU._id}}</small>
                            </div>
                            <div class="card-body">
                                {{this.gastoU.descripcion}}
                            </div>
                        </div>
                    </div>
                </div>
            </b-modal>

            <!--Modal para  anular pedido-->
            <b-modal ref="my-modalA" hide-footer v-if="alert == true && accion == false">
                <div class="d-block text-center">
                    <div class="card-deck">
                        <div class="card"  style="background: rgb(171 69 117 / 55%);">
                            <img src="/image/alert.png" class="imageModal">
                            <div class="card-body">
                                <h3>¿Usted esta seguro que desea anular este pedido?</h3>
                                <div class="card-footer">
                                    <button class="btn btn-primary btn-lg btn-block btnCardCancel" @click="AnularDeAgenda(id)"> Sí, Cancelado</button>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </b-modal>

            <!--Modal para Accion de entrega de pedido-->
            <b-modal ref="my-modalA" hide-footer title="" v-if="alert == true && accion == true">
                <div class="d-block text-center">
                    <div class="card-deck">
                        <div class="card"  style="background: #28a74569;">
                            <img src="/image/aletr2.png" class="imageModal">
                            <div class="card-body">
                                <h3>¿ Desea marcar este producto como entregado ?</h3>
                                <div class="card-footer">
                                    <button class="btn btn-primary btn-lg btn-block btnCardEntreg" @click="EntregadoAgenda(id)">Sí, Entregado</button>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </b-modal>
        </div>
    </main>
</template>

<script>
   import PedidoServices from '../../../services/pedidoServices.js';
   import Userservices from '../../../services/usuarioServices.js';
   const userservices = new Userservices();
   const pedidoServices = new PedidoServices();

    export default {
        name: 'Agenda',
        data(){
            return{                
                nombreCliente:"",
                fechaEntrega:"",
                descripcion:"",
                tlfCliente:"",
                totalMonto: "",                
                typeEntrega:"",
                gtuId:"",
                errors:"",
                aprov: "",
                pedidos:[],
                files: [],                
                gastoU:[],
                dismissSecs: 3,
                dismissCountDown: 0,
                imagePathClient: null,
                id:null,
                alert:false,                
                accion:false,   
                ver:false
            }
        },
        created(){
            this.getPedido()  
            this.getUser()     
        },
        methods: { 
            getUser(){
                const user = userservices.getCurrenUser()
                if(user == null){
                    this.$router.push('/login')
                }else{
                    return user
                }                
            },
            showModalAgenda(){
                this.$refs['my-modalA'].show()
                this.alert=false
            },
            hideModalAgenda(){
                this.$refs['my-modalA'].hide()
            },
            toggleModalAgenda(){
                this.$refs['my-modalA'].toggle('#toggle-btn')
            },
            getPedido(){
                const pedidos = pedidoServices.getPedidos();
                pedidos.then(data => {
                    this.pedidos = data;                    
                })                
            },            
            agendar(e){
                e.preventDefault();   
                // http://localhost:3000/api/pedidos                  
                fetch('/api/pedidos',{
                    method:'POST',
                    body: JSON.stringify({
                        "nombreCliente": this.nombreCliente,
                        "descripcion": this.descripcion,
                        "fechaEntrega": this.fechaEntrega,
                        "tlfCliente": this.tlfCliente,
                        "totalMonto": this.totalMonto,
                        "typeEntrega": "Espera"
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
            },
            previewFiles(event) {
                this.files = this.$refs.myFiles.files[0].name
            },
            showModalelimi(id){
                this.$refs['my-modalA'].show()
                this.alert=true
                this.accion=false
                this.id =id
            },
            showModalEntrega(id){
                this.$refs['my-modalA'].show()
                this.alert=true
                this.accion=true
                this.id =id
            },
            AnularDeAgenda(id){
                // http://localhost:3000/api/pedidos/
                fetch('/api/pedidos/'+id,{
                    method:'PUT',
                    body: JSON.stringify({
                        "typeEntrega": "Anulado",                        
                        "totalMonto" :  0
                    }),
                    headers:{
                        'Accept' : 'application/json',
                        'content-type': 'application/json'
                    }
                })
                .then(res => console.log(res))
                .then(res => {
                    this.error=true
                    this.errors="Se ha enviado como anulado"
                    this.dismissCountDown = this.dismissSecs
                    this.toggleModalAgenda()
                    this.getPedido()
                })
            },
            EntregadoAgenda(id){
                // http://localhost:3000/api/pedidos/
                fetch('/api/pedidos/'+id,{
                    method:'PUT',
                    body: JSON.stringify({
                        "typeEntrega": "Entregado",
                    }),
                    headers:{
                        'Accept' : 'application/json',
                        'content-type': 'application/json'
                    }
                })
                .then(res => console.log(res))
                .then(res => {
                    this.aprov="se ha enviado como entregado"
                    this.dismissCountDown = this.dismissSecs
                    this.toggleModalAgenda()
                    this.getPedido()
                })               
            },
            showModalver(id){
                this.$refs['my-modalA'].show()
                this.alert = true
                this.ver =true
                this.accion=null
                const gastoUnico = pedidoServices.getGastosU(id);
                gastoUnico.then(data => {
                    this.gastoU = data;
                    this.gtuId =this.gastoU._id                    
                } )
            }, 
            countDownChanged(dismissCountDown) {
                this.dismissCountDown = dismissCountDown
            }
        }
    }
</script>