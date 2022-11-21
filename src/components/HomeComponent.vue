<template>
  <div>
    <h1>Home</h1>
    <div class="card" style="width: 18rem" v-for="cubo in cubos" :key="cubo">
      <img :src="cubo.imagen" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{cubo.nombre}}</h5>
        <p class="card-text">
          {{cubo.precio}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceCubos from "./../services/ServiceCubos";
const service = new ServiceCubos();

export default {
  name: "HomeComponent",
  methods: {
    mostrarCubos() {
    service.getCubos().then((result) => {
      this.cubos = result;
    });
  },
  },

  mounted() {
    this.mostrarCubos();
  },

  data() {
    return {
      cubos: [],
    };
  },
};
</script>

<style scoped></style>
