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
            <h1 class="h2 textTitles"><img src="/image/web.png">Admin Web</h1>
        </div>
        <p v-if="errors.length">
            <b-alert :show="dismissCountDown"  dismissible  fade variant="success" @dismiss-count-down="countDownChanged">                               
               {{errors}} {{ dismissCountDown }} seconds...
            </b-alert>
        </p>
        <p v-if="aprov.length">
            <b-alert :show="dismissCountDown"  dismissible  fade variant="success" @dismiss-count-down="countDownChanged">                               
                {{aprov}} {{ dismissCountDown }} seconds...
            </b-alert>
        </p>
        <div>
            <div class="card-deck">
                <div class="row">
                    <div class="col-xs-12 col-sm-6 col-md-6">
                        <div class="card CardCatalago"> <!--Card para listar elementod del catalago-->
                            <img src="/image/logomio2.png" class="card-img-top ImgcardAdminweb" >
                            <div class="card-header cardHeAgenda">
                                <h5 class="card-title">Cargar imagen para catálagos</h5>
                            </div>
                            <div class="card-body">
                                <p class="card-text">Ingresara las imagenes prediseñadas para mostar en el catálago de contenido del sitio web.</p>
                            </div>
                            <div class="card-footer">
                                <button class="btn btn-primary btn-lg btn-block btnCardVer" @click="showModal" id="show-btn">Cargar</button>
                                <router-link to="/panelAd/tblCatalago" class="nav-link active textBH btn btn-primary btn-lg btn-block btnCardEntreg"> Ver imagenes de catalago subidas</router-link> 
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-6">
                        <div class="card CardCatalago"><!--Card para listar elementod del Promociones-->
                            <img src="/image/logomio2.png" class="card-img-top ImgcardAdminweb">
                            <div class="card-header cardHeAgenda">
                                <h5 class="card-title">Cargar imagen para Promociones</h5>
                            </div>
                            <div class="card-body">
                                <p class="card-text">Ingresara las imagenes prediseñadas para mostar en el panel de promociones del sitio web</p>
                            </div>
                            <div class="card-footer">
                                <button class="btn btn-primary btn-lg btn-block btnCardVer" @click="showModal2" id="show-btn">Cargar</button>
                                <router-link to="/panelAd/tblPromo" class="nav-link active btn btn-primary btn-lg btn-block btnCardEntreg">Ver imagenes de promociones subidas</router-link>                         
                            </div>
                        </div>
                    </div>
                </div>               
            </div>
        </div>

        <!--Modal para registrar elementos para el catalago-->
        <div>        
            <b-modal ref="my-modal" hide-footer title="Catálogo">
                <div class="d-block text-center">
                    <div class="card-deck">
                        <div class="card" style="background: #96245a8c;">
                            <div class="card-body">
                                <form @submit.prevent="addCatralogo" id="book-form" ref="anyName">
                                    <div class="form-group">
                                        <input type="file" v-on:change="set_file($event)" v-on:click="$event.target.value = null" id="image" name="image">                                        
                                    </div>
                                    <div class="form-group">
                                        <input type="text" v-model="typeCatalago" class="form-control" placeholder="Tipo de catalago">
                                    </div>
                                    <div class="form-group">
                                        <textarea  name="description" class="form-control" cols="30" v-model="descripcion" rows="10" placeholder="Descripción"></textarea>
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

        <!--Modal para registrar elementos para las promociones-->
        <div>
            <b-modal ref="my-modal2" hide-footer title="Promociones">
                <div class="d-block text-center">
                    <div class="card-deck">
                        <div class="card" style="background: #96245a8c;">
                            <div class="card-body">
                                <form @submit.prevent="addPromo" id="book-form" ref="anyNameP" enctype="multipart/form-data">
                                    <div class="form-group">
                                        <input type="file" v-on:change="set_fileP($event)" v-on:click="$event.target.value = null" id="image" name="image">                                        
                                    </div>
                                   <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <input type="text" v-model="precio" class="form-control" placeholder="Precio" required>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <b-form-select v-model="typeCombo" class="form-control">
                                                <option disabled value="">Seleccione un elemento</option>
                                                <option>Combo1</option>
                                                <option>Combo2</option>
                                                <option>Combo3</option>
                                                <option>Combo4</option>
                                            </b-form-select>           
                                        </div>
                                    </div>
                                     <div class="form-group">
                                        <textarea  name="descripcion" class="form-control" cols="30" v-model="descripcionPromo" rows="10" placeholder="Descripción"></textarea>
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
    </main>
</template>

<script>
    import axios from 'axios';
    import AdminWebServices from '../../../services/adminwebServices.js';
    import Userservices from '../../../services/usuarioServices.js';
    const userservices = new Userservices();
    const adminWebServices = new AdminWebServices();

    export default {
        name: 'AdminWeb',
        data(){
            return{
                typeCatalago:"",
                typeImg:"",
                descripcion:"",
                descripcionPromo:"",
                imgCatalago:"",
                typeCombo:"",                                                
                errors:"",
                aprov:"",
                dismissSecs: 3,
                dismissCountDown: 0,
                precio:0,
                error:false,
                file:false,
                img:null,
                imgC:""
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
            showModal(){
                this.$refs['my-modal'].show()
            },
            hideModal(){
                this.$refs['my-modal'].hide()
            },
            toggleModal(){
                this.$refs['my-modal'].toggle('#toggle-btn')
            },
            showModal2(){
                this.$refs['my-modal2'].show()
            },
            hideModal2(){
                this.$refs['my-modal2'].hide()
            },
            toggleModal2(){
                this.$refs['my-modal2'].toggle('#toggle-btn')
            },
            set_file(ev) {
                this.file = ev.target.files[0]
                const formData = new FormData();
                formData.append('image',this.file);
                // http://localhost:3000/api/adminwebC/uploads
                axios.post('/api/adminwebC/uploads',formData)
                .then(response => {
                    this.imgC = response.data
                    
                })
            },
            set_fileP(ev) {
                this.file= ev.target.files[0]
                const formData = new FormData();
                formData.append('image',this.file);
                // http://localhost:3000/api/adminwebP/uploads
                axios.post('/api/adminwebP/uploads',formData)
                .then(response => {
                    this.img = response.data                   
                }) 
            },
            getPedido(){
                const pedidos = adminWebServices.getAdminC();
                pedidos.then(data => {
                    this.pedidos = data;
                } )                
            },
            addCatralogo(){
                // http://localhost:3000/api/adminwebC
                fetch('/api/adminwebC',{
                    method:'POST',
                    body: JSON.stringify({
                        "typeCatalago":this.typeCatalago,
                        "typeImg":"Catalago",
                        "descripcion": this.descripcion,
                        "imgCatalago": this.imgC
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
                        this.$refs['anyName'].reset()
                        this.aprov=res.message
                        this.dismissCountDown = this.dismissSecs
                        this.toggleModal()                        
                        document.getElementById('book-form').reset()
                    }             
                })
            },
            addPromo(){
                console.log(this.img)  
                // http://localhost:3000/api/adminwebP      
                fetch('/api/adminwebP',{
                    method:'POST',
                    body: JSON.stringify({
                        "typeImg":"Promo",
                        "descripcion": this.descripcionPromo,
                        "precio":this.precio,
                        "imgPromo":this.img,
                        "typeCombo":this.typeCombo
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
                        this.toggleModal2()
                        // this.$refs['anyName'].reset()
                        // document.getElementById('book-form').reset()
                    }             
                })
            },
            countDownChanged(dismissCountDown) {
                this.dismissCountDown = dismissCountDown
            },
        }
    }
</script>