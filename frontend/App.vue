<template>
  <component :is="layout"></component>
</template>
<script>
  import LoginLayout from './components/layouts/Login.vue'
  import PrincipalLayout from './components/layouts/Principal.vue'
  import WebLayout from './components/layouts/Web.vue'
  import {mapState} from 'vuex'
  export default {
    components: {LoginLayout, PrincipalLayout, WebLayout},
    computed: mapState(['layout'])
  }
</script>