<template>
  <header id="header">
    <router-link class="header_logo" to="/">
      <img id="logo" src="@/assets/imagenes/logotipo.png" alt />
    </router-link>
    <nav id="nav">
      <router-link class="btn" to="/">
        <img class="icons" src="@/assets/imagenes/icons/home.png" alt />
        <p class="text">Inicio</p>
      </router-link>
      <router-link class="btn" to="/messages">
        <img class="icons" src="@/assets/imagenes/icons/chat2.png" alt />
        <p class="text">Mensajes</p>
      </router-link>
      <router-link class="btn" to="/account">
        <img class="icons" src="@/assets/imagenes/icons/person2.png" alt />
        <p class="text">Mi cuenta</p>
      </router-link>
      <div id="space" />
      <div class="btn">
        <img class="icons" src="@/assets/imagenes/icons/close2.png" alt />
        <p class="text">Cerrar sesión</p>
      </div>
    </nav>
  </header>
</template>

<script>
import Nav from "./Nav.vue";

export default {
  name: "Header"
};
</script>

<style lang="scss" scoped>
#header {
  position: fixed;
  width: 200px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #5640ff;
  z-index: 1;
  @media (max-width: 700px) {
    width: 100%;
    height: 50px;
    bottom: 0;
  }
  #logo {
    padding: 20px;
    width: 200px;
    @media (max-width: 700px) {
      display: none;
    }
  }
  #nav {
    margin: 30px 0 30px 0;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    @media (max-width: 700px) {
      flex-direction: row;
      margin: 0;
      justify-content: space-between;
    }
    #space {
      flex-grow: 1;
      @media (max-width: 700px) {
        display: none;
      }
    }
    .btn {
      text-decoration: none;
      height: 50px;
      display: flex;
      align-items: center;
      padding: 0 20px 0 20px;
      font-size: 1.5rem;
      color: #bab8cc;
      cursor: pointer;
      .icons {
        padding-right: 7px;
      }
      .text {
        @media (max-width: 700px) {
          display: none;
        }
      }
      &:hover {
        background: #8e80ff 0% 0% no-repeat padding-box;
        color: white;
      }
    }
  }

  @media (max-width: 991px) {
    ul {
      flex-direction: row;
    }

    .li {
      padding: 20px;
      font-family: "Poppins";
      font-size: 2em;
      text-align: center;
      color: #bab8cc;
      opacity: 1;
      text-decoration: none;
    }

    .close {
      display: flex;
      flex-direction: row;
      position: relative;
      font-family: "Poppins";
      top: 11px;
      text-align: left;
      color: #bab8cc;
      opacity: 1;
      text-decoration: none;
      margin: 0;
    }
    img {
      display: flex;
      padding: 15px;
      width: 50px;
    }
    .close h2 {
      top: 25px !important;
      font-family: "Poppins";
      font-size: 1em;
      text-align: center;
      color: #bab8cc;
      margin: 0;
    }
  }
}
</style>
