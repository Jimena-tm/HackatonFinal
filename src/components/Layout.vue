<template>
  <div id="layout">
    <Header />
    <Main>
      <router-view></router-view>
    </Main>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Main from "./Main.vue";

export default {
  name: "Layout",
  components: {
    Header,
    Main,
  },
};
</script>

<style lang="scss" scoped>
#layout {
  display: flex;
  > :nth-child(2) {
    flex-grow: 1;
  }
}
</style>
