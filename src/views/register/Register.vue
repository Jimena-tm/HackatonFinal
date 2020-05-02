<template>
  <div class="view-register">
    <section id="logo">
      <img src="@/assets/imagenes/logotipo.png" alt="" />
    </section>
    <section id="wrap">
      <div class="contenedor">
        <h1>¡Bienvenid@!</h1>
          <div class="frm">
              <img src="@/assets/imagenes/manbook.png" alt="" />
              <br>
              <Input />
          </div>
      </div>
    </section>

  </div>

</template>

<script>
import Input from "@/components/Input.vue";
export default {
  name: 'Register',
  components: {
    Input,
  },
};
</script>

<style lang="scss" scoped>

.view-register {
  height: 100vh;
}

section {
    width: 100%;
    margin-bottom: 20px;
    box-sizing: border-box;
}

.contenedor {
    width: 98%;
    margin: auto;
}

#wrap {
    margin: 50px;
}
img {
    max-width: 100%;
}

#logo {
    display: block;
    padding-left: 20px;
    background: black;
}
.frm img{
    max-width: 100%;
}
.frm {
    position: relative;
    display: flex;
    padding: 20px;
    top: 0px;
    left: 0px;
    width: 1366px;
    height: 660px;
}

h1 {
    position: absolute;
    margin-left: 950px;
}

Input {
  position: absolute;
  background: white;
  left: 900px;
}


</style>
