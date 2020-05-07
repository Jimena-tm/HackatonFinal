<template>
  <div class="layout">
    <Header />
    <Main>
      <router-view></router-view>
    </Main>
  </div>
</template>

<script>
import Header from './Header.vue';
import Main from './Main.vue';

export default {
  name: 'Layout',
  components: {
      Header,
      Main,
    },
};
</script>

<style>

</style>