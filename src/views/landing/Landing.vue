<template>
  <div class="view-landing">
    <div id="logo">
      <img src="@/assets/imagenes/logotipo.png" alt="" />
    </div>

    <div class="caption">
      <div class="contenedor">
        <h1>¡Explota todo tu <br> potencial tecnológico!</h1>
        <h3>Con nuestros programas de especialización</h3>
      </div>
    </div>

    <section class="botones">
        <div class="contenedor">
          <div class="btn" >
            <Button v-on:onclick="register" type="primary">Registrate</Button>
            <Button v-on:onclick="sigin" type="ghost">Ingresar</Button>
          </div>

          <div class="laptop">
            <img src="@/assets/imagenes/laptop-small.png" alt="">
          </div>

        </div>
    </section>
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
    },
    sigin() {
      console.log('sigin!!');
    },
  },
};
</script>

<style lang="scss">

.view-landing {
background: transparent linear-gradient(180deg, #5640ff 0%, #586fff 100%) 0%
        0% no-repeat padding-box;
    height: 100vh;
    max-width: 100%;
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

img {
    margin-top: 40px;
    max-width: 100%;
}

#logo {
    display: block;
    max-width: 200px;
    margin: 20px;
    padding-left: 20px;
}

.caption {
    width: 100%;
    margin: 10px;
    position: relative;
    height: 40vh;
}

.caption .contenedor {
    display: block;
    position: absolute;
    top: 80px;
    left: 0;
    margin: 20px;
    padding-left: 20px;
}

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap');
.caption .contenedor h1 {
    font-family: 'Poppins';
    text-align: left;
    font-size: 80px;
    letter-spacing: 0px;
    color: #ffffff;
    opacity: 1;
}

.caption .contenedor h3 {
    font-family: 'Poppins';
    font-weight: 50;
    padding-top: 50px;
    text-align: left;
    font-size: 30px;
    letter-spacing: 0px;
    color: #ffffff;
    opacity: 1;
}

/*BOTONES LANDING*/
.botones {
    height: 50vh;
    width: 100%;
    margin: 10px;
    position: relative;
}

.botones .contenedor .btn {
    display: flex;
}

.botones .contenedor .btn Button {
    margin-right: 100px;
}

.botones .contenedor .btn Button:nth-child(odd) {
    margin: 20px;
    margin-top: 90px;
    text-align: center;
    //line-height: 45px;
    /* width: 300px;
    height: 50px; */
    //background: #ff1558 0% 0% no-repeat padding-box;
    /* border-radius: 25px;
    opacity: 1;
    text-decoration: none; */
    //color: #ffffff;
}

.botones .contenedor .btn Button:nth-child(even) {
    margin: 20px;
    margin-top: 90px;
    text-align: center;
    //line-height: 45px;
    /* width: 300px;
    height: 50px; */
    //background: transparent 0% 0% no-repeat padding-box;
    /* border-radius: 25px;
    opacity: 1;
    text-decoration: none; */
    //color: #ffffff;
    //border: 3px solid #ffffff;
}

.botones .contenedor .btn Button:nth-child(odd):hover {
  background: #ff1557c2 0% 0% no-repeat padding-box;
}

.botones .contenedor .btn Button:nth-child(even):hover {
    background: #ffffff 0% 0% no-repeat padding-box;
    color: #5640ff;
}

/*IMAGEN LAPTOP*/
.laptop {
    max-width: 100%;
    position: absolute;
    bottom: 190px;
    left: 850px;
    width: 698px;
    height: 465px;
}

@media (max-width: 768px) {
}


</style>