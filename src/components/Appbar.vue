<template>
  <div id="Appbar">
    <Buscador />
    <div id="filters">
      <Selector v-bind:data="selectFilter" />
      <Selector v-bind:data="selectProgramData" />
      <Selector v-bind:data="selectOrderData" />
    </div>
  </div>
</template>

<script>
import Selector from "./Selector";
import Buscador from "./Buscador";
export default {
  name: "Appbar",
  components: { Selector, Buscador },
  data() {
    return {
      selectProgramData: {
        title: "Programa de Especialización",
        options: [
          "Front-End",
          "Back-End",
          "Desarrollo de APPS",
          "Diseño UX",
          "Desarrollo de Videojegos en Unity",
        ],
      },
      selectOrderData: {
        title: "Ordenar por:",
        options: ["A-Z", "Z-A"],
      },
      selectFilter: {
        title: "Filtrar",
        options: ["Programa de Especializacion", "Ordenar por"],
      },
    };
  },
};
</script>
<style lang="scss" scoped>
#Appbar {
  height: 50px;
  display: flex;
  * {
    margin-right: 10px;
  }
  #filters {
    > :nth-child(1) {
      display: block;
    }
    > :nth-child(2) {
      display: none;
    }
    > :nth-child(3) {
      display: none;
    }
    @media (min-width: 900px) {
      display: flex;
      flex-direction: row;
      > :nth-child(1) {
        display: none;
      }
      > :nth-child(2) {
        display: block;
      }
      > :nth-child(3) {
        display: block;
      }
    }
  }
}
</style>