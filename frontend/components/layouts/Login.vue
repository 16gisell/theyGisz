<template>
    <div class="clase1">
        <nav class="navbar navbar-dark sticky-top flex-md-nowrap p-0 barraHLogin">
            <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#"> </a>
            <ul class="navbar-nav px-3" style="margin-left: 53pc;">
                <li class="nav-item text-nowrap">
                    <router-link to="/login" class="nav-link" >Login </router-link>
                </li>
            </ul>
            <ul class="navbar-nav px-3" style="padding-right: 4vh!important;">
                <li class="nav-item text-nowrap">
                    <router-link to="/register" class="nav-link" >Register </router-link>
                </li>
            </ul>
        </nav>
         <div class="">
            <div class="row">
                <router-view></router-view>
            </div>
        </div>  
    </div>
</template>
<script>
    export default {
        created () {
            this.$store.commit('SET_LAYOUT', 'login-layout')
        }
    }
</script>