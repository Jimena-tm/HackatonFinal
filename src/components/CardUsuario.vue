<template>
  <div id="cardUsuario">
    <img
      id="FotoPerfil"
      :src="
        user.profileUrl ?
        user.profileUrl :
        require(`../assets/account.png`)"
    />
    <div id="Nombres">
      <p id="NombreUsuario">{{user.firstName+" "+user.lastName}}</p>
      <p id="NombreCurso">{{user.course}}</p>
    </div>
    <div id="Boton" v-on:click="$emit('openModal', user.id)">
      <img id="IconoVerMas" src="../assets/icons/ver-mas.svg" alt />
      <p id="TextoBoton">Ver más</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardUsuario",
  props: ["user"]
};
</script>

<style lang="scss">
#cardUsuario {
  display: flex;
  flex-direction: row;
  position: relative;
  width: 305px;
  height: 80px;
  background: #f8f8fa 0% 0% no-repeat padding-box;
  border: 1px solid #bab8cc4d;
  border-radius: 25px;
  align-items: center;
  padding: 0 20px 0 50px;
  justify-content: space-between;
  @media (min-width: 450px) {
    padding: 70px 0 15px 0;
    flex-direction: column;
    margin-top: 50px;
    width: 190px;
    height: 177px;
    opacity: 1;
    text-align: center;
  }
  #FotoPerfil {
    width: 60px;
    height: 60px;
    position: absolute;
    left: -30px;
    @media (min-width: 450px) {
      border-radius: 50%;
      width: 100px;
      height: 100px;
      left: 45px;
      top: -50px;
    }
  }
  #Nombres {
    display: flex;
    flex-direction: column;
    justify-content: center;
    #NombreUsuario {
      color: #000425;
      font-weight: 500;
      font-size: 16px;
      margin-bottom: 10px;
    }
    #NombreCurso {
      color: #000425;
      font-family: Roboto;
      font-weight: 600;
      font-size: 10px;
    }
  }
  #Boton {
    @media (min-width: 450px) {
      border: 1px;
      display: flex;
      font-size: 14px;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      cursor: pointer;
    }
    #TextoBoton {
      display: none;
      color: #5640ff;
      @media (min-width: 450px) {
        display: block;
      }
    }
    #IconoVerMas {
      @media (min-width: 450px) {
        width: 24px;
        margin-right: 5px;
      }
    }
  }
}
</style>

