<template>
    <div class="clase1">
        <nav class="navbar navbar-dark  barraH-Web fixed-top" >
            <ul class="navbar-nav px-3" style="padding-left: 33vh!important;">
                <li class="nav-item text-nowrap">
                    <router-link to="/" >
                        <img src="/image/logomio2.png" class="LogoBarra-Web">
                    </router-link>                     
                </li>
            </ul>
            <ul class="navbar-nav px-3">
                <li class="nav-item text-nowrap">
                    <a class="nav-link" href="#catalago">Catálagos</a>
                                    
                </li>
            </ul>
            <ul class="navbar-nav px-3">
                <li class="nav-item text-nowrap">
                    <a class="nav-link" href="#promociones">Promociones</a>                               
                </li>
            </ul>
            <ul class="navbar-nav px-3">
                <li class="nav-item text-nowrap">
                    <a class="nav-link" href="#pedidos">Pedidos</a>   
                </li>
            </ul>
            <ul class="navbar-nav px-3" style="padding-right: 47vh!important;">
                <li class="nav-item text-nowrap">
                    <a class="nav-link" href="#contactos">Contactos</a>   
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