<template>
  <div>
    <h1>Marcas</h1>
    <div class="card" style="width: 18rem" v-for="cubo in cubos" :key="cubo" @click="comentarios(cubo.idCubo)">
      <img :src="cubo.imagen" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ cubo.nombre }}</h5>
        <p class="card-text">
          {{ cubo.precio }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceCubos from "./../services/ServiceCubos";
const service = new ServiceCubos();

export default {
  name: "MarcasComponent",
  methods: {
    mostrarCubosMarca(marca) {
      service.getCubosMarcas(marca).then((result) => {
        this.cubos = result;
      });
    },
    comentarios(id){
        this.$router.push("/comentarios/"+id);
    }
  },
  mounted() {
    //COGER LA MARCA DE $route
    if (this.$route.params.marca == ""){
                console.log("Sin parámetros");
                this.mensaje = "No tenemos parámetros";
            }else{
                this.mostrarCubosMarca(this.$route.params.marca);
            }

  },
  data() {
    return {
      cubos: [],
    };
  },
};
</script>

<style scoped></style>
