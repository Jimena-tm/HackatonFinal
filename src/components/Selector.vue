<template>
  <div :id="data.title + 'selector'" class="selector roundBorder">
    <button id="button" @click="open()">{{ data.title }}</button>
    <div :id="data.title + 'dropdown'" class="dropdown show">
      <a
        class="option"
        v-for="option in data.options"
        v-bind:value="option"
        v-bind:key="option"
        >{{ option }}</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Selector",
  props: ["data"],
  methods: {
    open() {
      document
        .getElementById(this.data.title + "selector")
        .classList.toggle("roundBorder");
      document
        .getElementById(this.data.title + "dropdown")
        .classList.toggle("show");
    },
  },
};
</script>

<style scoped lang="scss">
.selector {
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-color: #bab8cc4d;
  border-style: solid;
  border-width: 1px 1px 0 1px;
  position: relative;
  display: inline-block;
  border-radius: 25px 25px 0 0;
  #button {
    border: none;
    padding: 0 15px 0 15px;
    background: none;
    font-family: Poppins;
    font-size: 14px;
    width: 100%;
    height: 50px;
    font-weight: bold;
    cursor: pointer;
  }
  :focus {
    outline: 0;
  }
  .dropdown {
    display: block;
    position: absolute;
    background-color: #fff;
    border-radius: 0 0 25px 25px;
    width: 100%;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    cursor: pointer;
    .option {
      color: #000425;
      font-family: Roboto;
      font-size: 14px;
      padding: 12px 16px;
      text-decoration: none;
      display: flex;
      align-items: center;
      height: 50px;
    }
    :hover {
      background-color: #8e80ff;
      color: white;
    }
  }
  .show {
    display: none;
  }
}
.roundBorder {
  border-width: 1px 1px 1px 1px;
  border-radius: 25px 25px 25px 25px;
}
</style>
