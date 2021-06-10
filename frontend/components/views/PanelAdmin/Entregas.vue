<template>
    <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
        <div class="chartjs-size-monitor" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;">
            <div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                <div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div>
            </div>
            <div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                <div style="position:absolute;width:200%;height:200%;left:0; top:0"></div>
            </div>
        </div>
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
            <h1 class="h2 textTitles"><img src="/image/iconoE.png"> Lista de Entregas</h1>
            <h5 class="h2 textTitles">Total Ganancia:  {{sumaTotal}},00</h5>
        </div>
        <p v-if="errors.length">
            <b-alert :show="dismissCountDown"  dismissible  fade variant="danger" @dismiss-count-down="countDownChanged">                               
                {{errors}} {{ dismissCountDown }} seconds...
            </b-alert>
        </p>
        <div>
            <table class="table table-striped table-dark">
                <thead class="table-head">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">N° del pedido</th>
                    <th scope="col">Nombre del cliente</th>
                    <th scope="col">Fecha de entrega</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Total del pago</th>
                    <th scope="col">Acción</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item, index of pedidos">
                        <th scope="row">{{index}}</th>
                        <td>{{item._id}}</td>
                        <td>{{item.nombreCliente}}</td>
                        <td>{{item.fechaEntrega}}</td>                        
                        <td v-if="item.typeEntrega !== 'Entregado'">{{item.typeEntrega}}</td>
                        <td v-if="item.typeEntrega == 'Entregado'"  style="color: rgb(192, 255, 0);">{{item.typeEntrega}}</td>
                        <td class="fondoTbl1">
                            <p v-if="item.typeEntrega == 'Espera'" style="color: rgb(14 14 14);text-decoration: underline;">{{item.totalMonto}}</p>
                            <p v-if="item.typeEntrega !== 'Espera' && item.typeEntrega !== 'Anulado'">{{item.totalMonto}}</p>
                            <p v-if="item.typeEntrega == 'Anulado'" style="color: red;text-decoration: line-through;">{{item.totalMonto}}</p>
                        </td>
                        <td>
                            <button class="btn btn-primary btn-lg btn-block btnCardCancel" @click="showModalelimi(item._id)">Eliminar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!--Modal para verificar si desea eliminar el contendo-->
        <b-modal ref="my-modalG" hide-footer >
            <div class="d-block text-center">
                <div class="card-deck">
                    <div class="card"  style="background: rgb(171 69 117 / 55%);">
                        <img src="/image/alert.png" class="imageModal">
                        <div class="card-body">
                            <h3>¿Usted esta seguro que desea eliminar este registro?</h3>
                            <div class="card-footer">
                                <button class="btn btn-primary btn-lg btn-block btnCardCancel" @click="deleteEntrega(id)"> Sí, Eliminar</button>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </b-modal>   
    </main>
</template>

<script>
   import PedidoServices from '../../../services/pedidoServices.js';
    import Userservices from '../../../services/usuarioServices.js';
   const userservices = new Userservices();
   const pedidoServices = new PedidoServices();

    export default {
        name: 'Entregas',
        data(){
            return{                
                nombreCliente:"",
                fechaEntrega:"",
                descripcion:"",
                tlfCliente:"",
                totalMonto:"",
                typeEntrega:"",                
                errors:"",
                aprov: "",
                pedidos:[],
                sumaTotal:0,                                
                dismissSecs: 1,
                dismissCountDown: 0,
                id:null,
                error:false
            }
        },
        created(){
            this.getEntregas()
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
            showModalG() {
                this.$refs['my-modalG'].show()
                this.edit=false
            },
            hideModalG() {
                this.$refs['my-modalG'].hide()
            },
            toggleModalG() {
                this.$refs['my-modalG'].toggle('#toggle-btn')
            },
            getEntregas(){
                const entregas = pedidoServices.getPedidos();
                entregas.then(data => {
                    this.pedidos = data;
                    var a= [];
                    for(let i=0; i<this.pedidos.length; i++){     
                        if(this.pedidos[i].typeEntrega == "Entregado") {                  
                            var cuenta = this.pedidos[i].totalMonto 
                            a.push(cuenta)
                        }
                    }
                    var suma = 0;
                    a.forEach (function(numero){
                        suma += numero;
                    });
                    this.sumaTotal = suma
                } )               
            }, 
            showModalelimi(id){
                this.$refs['my-modalG'].show()
                this.edit=true
                this.accion=true
                this.id =id
            },
            async deleteEntrega(id){
                await pedidoServices.delitePedido(id);
                this.error=true
                this.errors="Se ha eliminado registro de compra"
                this.dismissCountDown = this.dismissSecs
                this.getEntregas()
                this.toggleModalG()
            },
            countDownChanged(dismissCountDown) {
                this.dismissCountDown = dismissCountDown
            },       
        }
    }
</script>