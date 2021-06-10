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
            <h1 class="h2 textTitles"><img src="/image/iconoP.png"> Contenido Promociones</h1>
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
                    <th scope="col">Imagen</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Tipo de combo</th>
                    <th scope="col">Acción</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item, index of pedidos">
                        <th scope="row">{{index}}</th>
                        <td><img :src="'/'+item.imgPromo" style="width: 100px;"></td>
                        <td>{{item.descripcion}}</td>
                        <td>{{item.typeCombo}}</td>
                        <td>
                            <button class="btn btn-primary btn-lg btn-block btnCardCancel" @click="showModalelimi(item._id)">Eliminar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>  

        <!--modal para confirmar eliminar el registro -->
        <b-modal ref="my-modalG" hide-footer >
            <div class="d-block text-center">
                <div class="card-deck">
                    <div class="card"  style="background: rgb(171 69 117 / 55%);">
                        <img src="/image/alert.png" class="imageModal">
                        <div class="card-body">
                            <h3>¿Usted esta seguro que desea eliminar este registro?</h3>
                            <div class="card-footer">
                                <button class="btn btn-primary btn-lg btn-block btnCardCancel" @click="deleteCatalago(id)"> Sí, Eliminar</button>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </b-modal>    
    </main>
</template>

<script>
    import AdminWebServices from '../../../services/adminwebServices.js';
    import Userservices from '../../../services/usuarioServices.js';
    const userservices = new Userservices();
    const adminWebServices = new AdminWebServices();

    export default {
        name: 'TblPromociones',
        data(){
            return{
                descripcion:"",
                imgPromo:"",                               
                errors:"",
                aprov: "",
                pedidos:[], 
                dismissSecs: 5,
                dismissCountDown: 0,
                id:null,
                error:false
            }
        },
        created(){
            this.getCatalago() 
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
            getCatalago(){
                const pedidos = adminWebServices.getAdminP();
                pedidos.then(data => {
                    this.pedidos = data;
                } )                
            },
            showModalelimi(id){
                this.$refs['my-modalG'].show()
                this.edit=true
                this.accion=true
                this.id =id
            },
            async deleteCatalago(id){
                await adminWebServices.delitePromo(id);
                this.errors="Se ha eliminado registro de compra"
                this.dismissCountDown = this.dismissSecs
                this.toggleModalG()
                this.getCatalago()
            },
            countDownChanged(dismissCountDown) {
                this.dismissCountDown = dismissCountDown
            },                    
        }
    }
</script>