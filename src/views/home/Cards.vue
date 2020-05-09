<template>
  <div id="cards">
    <div v-bind:key="user.id" v-for="user in users">
      <CardUsuario
        v-bind:user="user"
        v-on:openModal="$emit('openModal', $event)"
      />
    </div>
  </div>
</template>
<script>
import CardUsuario from "../../components/CardUsuario";
export default {
  name: "Cards",
  props: ["users"],
  components: {
    CardUsuario,
  },
};
</script>

<style lang="scss" scoped>
#cards {
  display: grid;
  justify-items: center;
  column-gap: 12px;
  row-gap: 10px;
  grid-template-columns: 1fr;

  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
    row-gap: 39px;
  }

  @media (min-width: 850px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media (min-width: 1300px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
}
</style>
