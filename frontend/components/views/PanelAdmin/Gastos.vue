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
            <h1 class="h2 textTitles"> <img src="/image/iconoG.png"> Lista de Gastos</h1>
            <b-button id="show-btn" @click="showModalG" class="btnG">Agregar</b-button>
        </div>
        <p v-if="errors.length && error == true">
            <b-alert :show="dismissCountDown"  dismissible  fade variant="danger" @dismiss-count-down="countDownChanged">                               
                {{errors}} {{ dismissCountDown }} seconds...
            </b-alert>
        </p>
        <p v-if="aprov.length">
            <b-alert :show="dismissCountDown"  dismissible  fade variant="success" @dismiss-count-down="countDownChanged">                               
                {{aprov}} {{ dismissCountDown }} seconds...
            </b-alert>
        </p>

        <div>
            <table class="table table-striped table-dark">
                <thead class="table-head">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Elementos de Compras</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Monto</th>
                    <th scope="col">Accion</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item, index of gasto">
                    <th scope="row">{{index}}</th>
                    <td>{{item.nombreElemento}}</td>
                    <td>{{item.fechaCompra}}</td>
                    <td class="fondoTbl1">{{item.montoGastado}}</td>
                    <td>
                        <button class="btn btn-primary btn-lg btn-block btnCardCancel" @click="showModalelimi(item._id)">Eliminar</button>
                        <button class="btn btn-primary btn-lg btn-block btnCardEntreg" @click="getGastoUnico(item._id)">Editar</button>
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div>
            <!--Modal para registar gastos-->
            <b-modal ref="my-modalG" hide-footer title="Registrar Gasto" v-if="edit == false">
                <div class="d-block text-center">
                    <div class="card-deck">
                        <div class="card"  style="background: rgb(191 107 147 / 55%);">
                            <img src="/image/iconoG.png" class="imageModal">
                            <div class="card-body">
                                <form @submit.prevent="addTarea">
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <input type="text" v-model="nombreElemento"  class="form-control" placeholder="Elemento comprado" required>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <input type="text" v-model="montoGastado" class="form-control" placeholder="Monto gastado" required>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                       <input type="date" class="form-control"  v-model="fechaCompra">  
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

            <!--Modal para editar gastos-->
            <b-modal ref="my-modalG" hide-footer title="Registrar Gasto" v-if="edit == true && accion == false">
                <div class="d-block text-center">
                    <div class="card-deck">
                        <div class="card"  style="background: rgb(191 107 147 / 55%);">
                            <img src="/image/iconoG.png" class="imageModal">
                            <div class="card-body">
                                <form @submit.prevent="EntregadoAgenda(gtuId)">
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <input type="text" v-model="nombreElementoEdi"  class="form-control" :placeholder="this.gastoU.nombreElemento"  required>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <input type="text" v-model="montoGastadoEdi" class="form-control" :placeholder="this.gastoU.montoGastado"  required>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                       <input type="date" class="form-control"  v-model="fechaCompraEdi" :placeholder="this.gastoU.fechaCompra"  required>  
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

            <!--Modal para confirmar si se elimina el registro del gastos-->
            <b-modal ref="my-modalG" hide-footer v-if="edit == true && accion == true">
                <div class="d-block text-center">
                    <div class="card-deck">
                        <div class="card"  style="background: rgb(171 69 117 / 55%);">
                            <img src="/image/alert.png" class="imageModal">
                            <div class="card-body">
                                <h3>¿Usted esta seguro que desea eliminar este registro de compra?</h3>
                                <div class="card-footer">
                                    <button class="btn btn-primary btn-lg btn-block btnCardCancel" @click="deleteGatos(id)"> Sí, Eliminar</button>
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
   import GastoServices from '../../../services/gastosServices.js';
   import Userservices from '../../../services/usuarioServices.js';
   const userservices = new Userservices();
   const gastoServices = new GastoServices();

    export default {
        name: 'Gastos',
        data(){
            return{                
                nombreElemento:"",
                montoGastado:"",
                fechaCompra:"",
                gtuId:"",
                gasto:[],
                errors:"",
                aprov: "", 
                nombreElementoEdi:"",
                montoGastadoEdi:"",
                fechaCompraEdi:"",               
                gastoU:[],
                dismissSecs: 5,
                dismissCountDown: 0,
                edit: false,
                id:null,
                accion:false,  
                error:false
            }
        },
        created(){
            this.getGasto()
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
            getGasto(){
                const gasto = gastoServices.getGastos();
                gasto.then(data => {
                    this.gasto = data;
                } )
            },            
            addTarea(){
                console.log("data", this.nombreCliente, this.descripcion)
                // http://localhost:3000/api/gastos
                fetch('/api/gastos',{
                    method:'POST',
                    body: JSON.stringify({
                        "nombreElemento": this.nombreElemento,
                        "montoGastado": this.montoGastado,
                        "fechaCompra": this.fechaCompra
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
                        this.toggleModalG()
                        this.getGasto()  
                    }             
                })
                // location.reload();
            },
            getGastoUnico(id){
                this.$refs['my-modalG'].show()
                this.edit=true
                this.accion=false
                const gastoUnico = gastoServices.getGastosU(id);
                gastoUnico.then(data => {
                    this.gastoU = data;
                    this.gtuId =this.gastoU._id                    
                } )
            },
            showModalelimi(id){
                this.$refs['my-modalG'].show()
                this.edit=true
                this.accion=true
                this.id =id
            },
            async deleteGatos(id){
                await gastoServices.deliteGasto(id);
                this.error=true
                this.errors="Se ha eliminado registro de compra"
                this.dismissCountDown = this.dismissSecs
                this.toggleModalG()
                this.getGasto()
            },
            EntregadoAgenda(id){
                // http://localhost:3000/api/gastos/
                fetch('/api/gastos/'+id,{
                    method:'PUT',
                    body: JSON.stringify({
                        "nombreElemento": this.nombreElementoEdi,
                        "montoGastado": this.montoGastadoEdi,
                        "fechaCompra": this.fechaComproEdi
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
                        this.toggleModalG()
                        this.getGasto()  
                    }             
                })            
            },
            countDownChanged(dismissCountDown) {
                this.dismissCountDown = dismissCountDown
            },           
        }
    }
</script>