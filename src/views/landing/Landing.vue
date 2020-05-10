<template>
  <div class="view-landing">
    <div class="wrapper">
        <div class="logo">
            <img src="@/assets/imagenes/logotipo.png"  alt="" />
        </div>
        <div class="banner">
          <div class="text-main">
            <h1>
                ¡Explota todo tu<br />
                potencial teconológico!
            </h1>

            <h3>Con nuestros programas de especialización</h3>
          </div>
            <div class="laptop">
              <img src="@/assets/imagenes/laptop-small.png"  alt="" />
            </div>
            <div class="botones">
              <Button v-on:onclick="register" type="primary">Registrate</Button>
              <Button v-on:onclick="sigin" type="ghost">Ingresar</Button>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  name: 'Landing',
  components: {
    Button
  },
  methods: {
    register() {
      console.log('register!!');
      this.$router.push({name: 'Register'})
    },
    sigin() {
      console.log('sigin!!');
      this.$router.push({name: 'Login'})
    },
  },
};
</script>

<style lang="scss" scoped>
.view-landing {
  height: 100vh;
  background: #5640ff;
}

.wrapper {
  width: 100%;
  height: 100vh;
  position: relative;
  background: transparent linear-gradient(180deg, #5640ff 0%, #586fff 100%) 0%
        0% no-repeat padding-box;
}

img {
  max-width: 100%;
}

/*LOGOOOO*/
.wrapper .logo img {
  display: block;
  width: 200px;
  padding-top: 20px;
  padding-left: 20px;
}

/*TEXTO PRINCIPAL*/
.text-main {
    display: block;
    position: relative;
    top: 120px;
    left: 2%
}

.text-main h1 {
    font-family: 'Poppins';
    font-weight: 600;
    color: #ffff;
    font-size: 70px;
    left: 0;
}

.text-main h3 {
    color: #ffff;
    font-size: 20px;
    left: 0;
    padding-top: 40px;
}
/*SECTION LAPTOP Y BTN*/
.banner {
    display: block;
    position: relative;
}

.laptop img {
    width: 50%;
    position: absolute;
    left: 750px;
    right: 0;
    top: 25%;
}
.botones {
    width: 50%;
    display: flex;
    position: relative;
    top: 170px;
    left: 2%;
}
.botones Button:nth-child(odd) {
    text-align: center;
    line-height: 45px;
    margin: 20px;
    width: 200px;
    height: 50px;
    background: #ff1558 0% 0% no-repeat padding-box;
    border-radius: 25px;
    opacity: 1;
    text-decoration: none;
    color: #ffffff;
}

.botones Button:nth-child(even) {
    text-align: center;
    line-height: 45px;
    margin: 20px;
    width: 200px;
    height: 50px;
    background: transparent 0% 0% no-repeat padding-box;
    border-radius: 25px;
    opacity: 1;
    text-decoration: none;
    color: #ffffff;
    border: 2px solid #ffff;
}

.botones Button:hover {
    background: #ff1558 0% 0% no-repeat padding-box;
}

/*responsive*/

@media screen and (max-width: 768px) {
    .logo img {
        max-width: 100%;
    }

    .text-main h1,
    h3 {
        font-size: 2.5rem;
        text-align: center;
    }

    .botones {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .laptop img {
        width: 200%;
        left: 5%;
        display: block;
        top: 180%;
    }
}
</style>