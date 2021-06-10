<template>
    <main role="main" class="col-lg-12">
        <div class="container" style="margin-top: 27px;">
            <div class="row">
                <div class="col Col-Web1">                     
                    <div class="col-6 col-sm-12">                                                    
                        <div class="card CardLoginRegister">
                            <div class="card-header cardHeAgenda">
                                <h5 class="card-title text-WebCatalago-h2">Login</h5>
                                <p v-if="errors.length">
                                    <b-alert :show="dismissCountDown"  dismissible  fade variant="danger" @dismiss-count-down="countDownChanged">                               
                                        {{errors}} {{ dismissCountDown }} seconds...
                                    </b-alert>
                                </p>
                                <p v-if="aprov.length">
                                    <b-alert :show="dismissCountDown"  dismissible  fade variant="success" @dismiss-count-down="countDownChanged">                               
                                        {{aprov}} {{ dismissCountDown }} seconds...
                                    </b-alert>
                                </p>                                       
                            </div>                                                                
                            <div class="card-body">                                       
                                <form @submit.prevent="login"  ref="anyName" id="book-form">
                                    <div class="form-group">
                                        <input type="email" v-model="correo" class="form-control" placeholder="Correo" required>                                                
                                    </div>
                                    <div class="form-group">
                                        <input type="password" v-model="password" class="form-control" placeholder="Password" required>                                                
                                    </div>
                                    <div class="card-footer">
                                        <button class="btn btn-primary btn-lg btn-block btnG">Ingresar</button>
                                    </div>                                        
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col fondoCatalago" style="background: black;">                   
                    <img src="/image/letrasnegras.png" style="width:43vw; height:60vh;">
                </div>
            </div>
        </div>        
    </main>
</template>

<script>
    import Userservices from '../../../services/usuarioServices.js';
    const userservices = new Userservices();

    export default {
        name: 'Login',
        data(){
            return{
                password:"",
                correo:"",
                errors:"",
                aprov: "",
                dismissSecs: 3,
                dismissCountDown: 0,
                imagePathClient: null,
                id:null,   
                URI:"http://localhost:3000/api/usuario"             
            }
        },
        created () {
            this.$store.commit('SET_LAYOUT', 'login-layout')
        },
        methods: { 
            login(){
                var data={}
                data={
                    "correo":this.correo,
                    "password":this.password
                }
                fetch('/api/usuario/login',{
                    method:'POST',
                    body: JSON.stringify(data),
                    headers:{
                        'Accept' : 'application/json',
                        'content-type': 'application/json'
                    }
                })
                .then(res => res.json())
                .then(res =>  {
                    if(res.error){
                        this.errors=res.error
                    }
                    if(res.typeUser != "Permitido"){
                        this.errors="Usuario no tiene acceso"
                    }
                    else{
                        this.$router.push('/principal')
                        const usuario= userservices.setUser(res)
                        const usuarioT= userservices.setToken(res._id)
                    }      
                    this.dismissCountDown = this.dismissSecs 
                })                 
            },
            countDownChanged(dismissCountDown) {
                this.dismissCountDown = dismissCountDown
            },
        }
    }
</script>