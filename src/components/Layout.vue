<template>
  <div id="layout">
    <Header />
    <div id="volumen" />
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
    Main
  }
};
</script>

<style lang="scss" scoped>
#layout {
  display: flex;
  #volumen {
    width: 200px;
    @media (max-width: 700px) {
      display: none;
    }
  }
  > :nth-last-child(1) {
    flex-grow: 1;
  }
}
</style>