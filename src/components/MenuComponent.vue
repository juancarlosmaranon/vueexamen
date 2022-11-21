<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
            <!-- <a class="navbar-brand color-black" [routerLink]="['/registrar']">Registro</a>
            <a class="navbar-brand color-black" [routerLink]="['/loguear']">Login</a> -->
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link class="nav-link active" aria-current="page" to="/">Cubos</router-link>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Marcas
                    </a>
                    <ul class="dropdown-menu" >
                    <li><router-link class="dropdown-item" v-for="marca in marcas" :key="marca" :to="'/marcas/'+marca">{{marca}}</router-link></li>
                    </ul>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    </div>
</template>

<script>
import ServiceCubos from "./../services/ServiceCubos";
const service = new ServiceCubos();

export default {
    name: 'MenuComponent',
    methods:{
        mostrarMarcas(){
            service.getMarcas().then((result)=>{
                this.marcas = result;
            })
        }
    },
    mounted() {
        this.mostrarMarcas();
    },
    data() {
        return {
            marcas:[]
        };
    },
};
</script>

<style scoped>

</style>