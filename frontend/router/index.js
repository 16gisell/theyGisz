import Vue from 'vue'
import Router from 'vue-router'

//rutas auth
import Login from '../components/views/Auth/Login.vue'
import Register from '../components/views/Auth/Register.vue'

//rutas panel administrador
import Principal from '../components/views/PanelAdmin/Principal.vue'
import Agenda from '../components/views/PanelAdmin/Agenda.vue'
import Gastos from '../components/views/PanelAdmin/Gastos.vue'
import Entregas from '../components/views/PanelAdmin/Entregas.vue'
import Presupuesto from '../components/views/PanelAdmin/Presupuesto.vue'
import AdminWeb from '../components/views/PanelAdmin/AdminWeb.vue'
import TblCatalago from '../components/views/PanelAdmin/TblCatalago.vue'
import TblPromo from '../components/views/PanelAdmin/TblPromo.vue'

//rutas panel web
import Web from '../components/views/panelWeb/Web.vue'
import Catalago from '../components/views/panelWeb/Catalago.vue'
import Promociones from '../components/views/panelWeb/Promociones.vue'
import Pedidos from '../components/views/panelWeb/Pedidos.vue'
import Contactos from '../components/views/panelWeb/Contactos.vue'
import Secciones from '../components/views/panelWeb/Seccionada.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/principal',
      name: 'Principal',
      component: Principal,
    },
    {
      path: "/panelAd/agenda",
      name: "agenda",
      component: Agenda
    },
    {
      path: "/panelAd/gastos",
      name: "gastos",
      component: Gastos
    },
    {
      path: "/panelAd/presupuesto",
      name: "presupuesto",
      component: Presupuesto
    },
    {
      path: "/panelAd/entregas",
      name: "entregas",
      component: Entregas
    },
    {
      path: "/panelAd/adminWeb",
      name: "adminWeb",
      component: AdminWeb
    },
    {
      path: "/panelAd/tblCatalago",
      name: "tblCatalago",
      component: TblCatalago
    },
    {
      path: "/panelAd/tblPromo",
      name: "tblPromo",
      component: TblPromo
    },
    {
      path: "/",
      name: "web",
      component: Web,
      children: [
        {
          path: 'catalago',
          component: Catalago,
        },
        {
          path: "promociones",
          component: Promociones
        },
        {
          path: "pedidos",
          component: Pedidos
        },
        {
          path: "contactos",
          component: Contactos
        },
        {
          path: "secciones",
          component: Secciones
        },
      ]
    },    
  ]
})