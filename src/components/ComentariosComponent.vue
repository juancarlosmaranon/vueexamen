<template>
    <div>
       <h1>comen</h1> 
       <div v-for="comentario in comentarios" :key="comentario">
        <h1>{{comentario.comentario}}</h1>
        <h3>{{comentario.fecha}}</h3>
       </div>
    </div>
</template>

<script>
import ServiceCubos from "./../services/ServiceCubos";
const service = new ServiceCubos();

export default {
    name: 'ComentariosComponent',
    methods:{
        mostrarCubosMarca(id) {
            console.log(id);
            service.getComentarios(id).then((result) => {
                this.comentarios = result;
                console.log(result)
            });
    },
    },
    mounted(){
        if (this.$route.params.id == ""){
                console.log("Sin parámetros");
                this.mensaje = "No tenemos parámetros";
            }else{
                this.mostrarCubosMarca(this.$route.params.id);
            }
    },
    data() {
        return {
            comentarios:[]
        };
    },
};
</script>

<style scoped>

</style>