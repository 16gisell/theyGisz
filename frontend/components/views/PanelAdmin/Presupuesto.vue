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
            <h1 class="h2 textTitles"><img src="/image/porsentaje.png"> Lista de Presupuesto</h1>
            <h5 class="h2 textTitles" v-if="total > 0">Total:  {{total}},00</h5>
            <h5 class="h2 textTitlesCero" v-if="total == 0 || total <= 0">Total:  {{total}},00</h5>
        </div>

        <div>
            <table class="table table-striped table-dark">
                <thead  class="table-head">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Fecha salida</th>
                    <th scope="col">Cantidad salida</th>
                    <th scope="col">Fecha Entrada</th>
                    <th scope="col">Cantidad Entrada</th>
                    <th scope="col">Cuentas</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item, index of h" v-if="item.totalMonto != 0">
                        <th class="tablaHob"scope="row">{{index}}</th>
                        <td class="tablaHob">{{item.nombreElemento}} {{item.nombreCliente}} </td>
                        <td class="tablaHob" locale="en-US">{{item.fechaCompra}}</td>
                        <td class="tablaHob fondoTbl1">{{item.montoGastado}}</td>
                        <td class="tablaHob">{{item.fechaEntrega}}</td>
                        <td class="tablaHob fondoTbl1">{{item.totalMonto}}</td>
                        <td class="tablaHob fondoTbl2"><p style="color: red;">{{item.montoGastado}}</p> {{item.totalMonto}} </td>
                    </tr>
                    <tr >
                        <th class="fondoTbl1" scope="row"></th>
                        <td class="fondoTbl1"> </td>
                        <td class="fondoTbl1"></td>
                        <td class="tablaHob fondoTbl1" style="color: rgb(192, 255, 0);">{{sumaTotalGasto}}</td>
                        <td class="fondoTbl1"></td>
                        <td class="tablaHob fondoTbl1" style="color: rgb(192, 255, 0);">{{sumaTotalGanado}}</td>
                        <td class="tablaHob fondoTbl2"><p style="color: #c0ff00;">{{total}}</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
</template>

<script>
    import PedidoServices from '../../../services/pedidoServices.js';
    import GastoServices from '../../../services/gastosServices.js';
    import Userservices from '../../../services/usuarioServices.js';
    const userservices = new Userservices();
    const pedidoServices = new PedidoServices();
    const gastoServices = new GastoServices();

    export default {
        name: 'Presupuesto',
        data(){
            return{                
                nombreElemento:"",
                montoGastado:"",
                fechaCompra:"",                
                nombreCliente:"",
                fechaEntrega:"",
                totalMonto:"",
                gasto:[],
                pedidos:[],
                a:[],
                h:[],
                sumaTotalGasto:0,
                sumaTotalGanado:0,                
                total:0,
            }
        },
        created(){ 
            this.getUser()           
            this.getGasto()
            this.getPedido()
                       
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
            showModal() {
                this.$refs['my-modal'].show()
            },
            hideModal() {
                this.$refs['my-modal'].hide()
            },
            toggleModal() {
                this.$refs['my-modal'].toggle('#toggle-btn')
            },
            getGasto(){
                const gasto = gastoServices.getGastos();
                gasto.then(data => {
                    this.gasto = data;
                    for(let item of data){
                        this.h.push(item)                       
                    }
                   var b= [];
                    for(let i=0; i<this.gasto.length; i++){                        
                        var cuenta = this.gasto[i].montoGastado 
                        b.push(cuenta)
                    }
                    var suma = 0;
                    b.forEach (function(numero){
                        suma += numero;
                    });
                    this.sumaTotalGasto = suma
                } )
            },          
            getPedido(){
                const pedidos = pedidoServices.getPedidos();
                pedidos.then(data => {
                    this.pedidos = data;
                    this.a.push( this.pedidos)
                    for(let item of data){
                       this.h.push(item)
                    }                  
                    var b= [];
                    for(let i=0; i<this.pedidos.length; i++){ 
                        if(this.pedidos[i].typeEntrega == 'Entregado') {
                            var cuenta = this.pedidos[i].totalMonto 
                            b.push(cuenta)
                        }                                       
                    }
                    var suma = 0;
                    b.forEach (function(numero){
                        suma += numero;
                    });
                    this.sumaTotalGanado = suma
                    this.total = this.sumaTotalGanado - this.sumaTotalGasto
                } )                
            },
        }
    }
</script>