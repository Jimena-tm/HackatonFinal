<template>
  <div id="Appbar">
    <Buscador />
    <Selector v-bind:data="selectProgramData" />
    <Selector v-bind:data="selectOrderData" />
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
          "Desarrollo de Videojegos en Unity"
        ]
      },
      selectOrderData: {
        title: "Ordenar por:",
        options: ["A-Z", "Z-A"]
      }
    };
  }
};
</script>
<style lang="scss" scoped>
#Appbar {
  height: 50px;
  display: flex;
  > * {
    margin-right: 10px;
  }
}
</style>

