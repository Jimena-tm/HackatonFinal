<template>
    <nav class="nave">
      <ul>
        <router-link class="li" to="/">Inicio</router-link>
        <router-link class="li" to="/messages">Mensajes</router-link>
        <router-link class="li" to="/account">Mi cuenta</router-link>
      </ul>
      <h2>Cerrar sesión</h2>
    </nav>
</template>

<script>
export default {
  name: 'Nav',
};
</script>


<style lang="scss" scoped>
ul{
margin-top: 20px;
display: flex;
flex-direction: column;
}

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap');
.li {
    padding: 20px;
    font-family: 'Poppins';
    font-size: 1.5rem;
    text-align: center;
    color: #ffffff;
    opacity: 1;
    text-decoration: none;
}

.li:hover {
    background: #8e80ff 0% 0% no-repeat padding-box;
}

h2{
    font-family: 'Poppins';
    font-size: 1.5rem;
    text-align: center;
    color: #BAB8CC;
    opacity: 1;
    text-decoration: none;
    margin-top: 400px;
}

</style>
