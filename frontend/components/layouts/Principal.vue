<template>
  <div class="clase1">
    <nav class="navbar navbar-dark sticky-top flex-md-nowrap p-0 barraH">
      <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#"> </a>
      <ul class="navbar-nav px-3">
          <li class="nav-item text-nowrap">
            <a class="nav-link" href="#" @click="logauUser" style="color: #4d2e69;">Sign out</a>
          </li>
      </ul>
    </nav>

    <div class="container-fluid ">
      <div class="row">
        <nav class="col-md-2 d-none d-md-block sidebar barraV">
          <div class="sidebar-sticky">
            <ul class="nav flex-column">
              <li class="nav-item" style="margin-bottom: 59px;">
                <router-link to="/panelAd" class="navbar-brand col-sm-3 col-md-2 mr-0">
                  <img src="/image/logomio2.png" class="LogoBarra">
                </router-link>                            
              </li>
              <li class="nav-item">
                <router-link to="/panelAd/agenda" class="nav-link active textBH">
                  <img src="/image/iconoA.png" class="iconoBarra">
                  Agenda 
                </router-link> 
              </li>
              <li class="nav-item">
                <router-link to="/panelAd/gastos" class="nav-link active textBH">
                  <img src="/image/iconoG.png" class="iconoBarra">
                  Gastos
                </router-link> 
              </li>
              <li class="nav-item">
                <router-link to="/panelAd/entregas" class="nav-link active textBH">
                  <img src="/image/iconoE.png" class="iconoBarra">
                  Entregas
                </router-link> 
              </li>
              <li class="nav-item ">
                <router-link to="/panelAd/presupuesto" class="nav-link active textBH">
                  <img src="/image/porsentaje.png" class="iconoBarra">
                  Presupuestos
                </router-link> 
              </li> 
              <li class="nav-item ">
                <router-link to="/panelAd/adminWeb" class="nav-link active textBH">
                  <img src="/image/web.png" class="iconoBarra">
                  Admin Web
                </router-link> 
              </li>
            </ul>                        
          </div>
          <footer class="footer">
            <div class="container">
              <div class="text1Footer">
                &copy; <strong><span> TheyGisz</span></strong>
              </div>
              <div class="text2Footer">
                Diseños por <span class="text3Footer">GissHernandez</span>
              </div>
            </div>
          </footer>
        </nav>
        <router-view></router-view>
      </div>
    </div>            
  </div>
</template>

<script>
  import Userservices from '../../services/usuarioServices.js';
  const userservices = new Userservices();
  
  export default {
    data () {
      return { }
    },
    methods: {
      logauUser(){
        const api_consult = 'http://localhost:3000/api/user';
        localStorage.removeItem('accessToken')
        localStorage.removeItem('currenUser')
        this.$router.push('/login')
      }
    },
  }
</script>