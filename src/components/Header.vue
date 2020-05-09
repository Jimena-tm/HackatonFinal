<template>
  <header class="header">
    <router-link class="header_logo" to="/">
      <img src="@/assets/imagenes/logotipo.png" alt="" />
    </router-link>
    <Nav />
  </header>
</template>

<script>
import Nav from "./Nav.vue";

export default {
  name: "Header",
  components: {
    Nav,
  },
};
</script>

<style lang="scss" scoped>
.header {
  // position: fixed;
  width: 200px;
  height: 100%;
  background: #5640ff;
}

img {
  display: flex;
  padding: 20px;
  width: 200px;
}
</style>
