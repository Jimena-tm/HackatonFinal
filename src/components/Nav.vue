<template>
  <nav class="nav">
    <ul>
      <router-link class="li" to="/">
        <div class="item">
          <img src="@/assets/imagenes/icons/home.png" alt />
          Inicio
        </div>
      </router-link>
      <router-link class="li" to="/messages">
        <div class="item">
          <img src="@/assets/imagenes/icons/chat2.png" alt />
          Mensajes
        </div>
      </router-link>
      <router-link class="li" to="/account">
        <div class="item">
          <img src="@/assets/imagenes/icons/person2.png" alt />
          Mi cuenta
        </div>
      </router-link>
    </ul>
    <div class="close">
      <img src="@/assets/imagenes/icons/close2.png" alt />
      <h2>Cerrar sesión</h2>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav"
};
</script>


<style lang="scss" scoped>
.nav {
  border: 1px solid red;
}
ul {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap");
.li {
  padding: 20px;
  font-family: "Poppins";
  font-size: 1.5rem;
  text-align: center;
  color: #bab8cc;
  opacity: 1;
  text-decoration: none;
}

.li:hover {
  background: #8e80ff 0% 0% no-repeat padding-box;
  color: white;
}
.item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.close {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-family: "Poppins";
  font-size: 1.5rem;
  text-align: center;
  color: #bab8cc;
  opacity: 1;
  text-decoration: none;
  margin-top: 400px;
}

.close:hover {
  background: #8e80ff 0% 0% no-repeat padding-box;
}

img {
  padding-right: 7px;
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
</style>
