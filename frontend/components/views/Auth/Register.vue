<template>
    <main role="main" class="col-lg-12">
        <div class="container" style="margin-top: 27px;">
            <div class="row">
                <div class="col Col-Web1">                                           
                    <div class="row">
                        <div class="col-6 col-sm-12">
                            <div class="card CardLoginRegister">
                                <div class="card-header cardHeAgenda">
                                    <h5 class="card-title text-WebCatalago-h2">Registrar</h5>
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
                                    <form @submit.prevent="registrar"  ref="anyName" id="book-form">              
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <input type="text" v-model="nombreUCompleto" class="form-control" placeholder="nombre y apellido" required>
                                            </div>
                                            <div class="form-group col-md-6">
                                                <input type="text" v-model="telfUsuario" class="form-control" placeholder="Telefono" required>
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <input type="text" v-model="username" class="form-control" placeholder="nombre de usuario" required> 
                                            </div>
                                            <div class="form-group col-md-6">
                                                <input type="password" v-model="password" class="form-control" placeholder="Contraseña" required>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <input type="email" v-model="correo" class="form-control" placeholder="Correo" required>
                                        </div>
                                        <div class="card-footer">
                                            <button class="btn btn-primary btn-lg btn-block btnG">Registrar</button>
                                        </div>                                        
                                    </form>
                                </div>
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
                nombreUCompleto:"",
                telfUsuario:"",
                username:"",
                password:"",
                correo:"",
                errors:"",
                aprov: "",
                dismissSecs: 3,
                dismissCountDown: 0,
                error:null,                
            }
        },
        created () {
            this.$store.commit('SET_LAYOUT', 'login-layout')
        },
        methods: { 
            registrar(){
                var data={}
                data={
                    "nombreUCompleto": this.nombreUCompleto,
                    "telfUsuario":this.telfUsuario,
                    "username":this.username,
                    "correo":this.correo,
                    "password":this.password,
                    "typeUser":"nuevo"
                }
                // http://localhost:3000/api/usuario/register
                 fetch('/api/usuario/register',{
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
                    } else {
                        this.aprov=res.message
                        this.$router.push('/login')                       
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