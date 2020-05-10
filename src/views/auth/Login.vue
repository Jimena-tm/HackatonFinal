<template>
  <div class="view-login">
    <div class="logo">
        <img src="@/assets/imagenes/logotipo.png" alt="">
    </div>

<div class="contenedor">
    <div class="fila1">
      <img src="@/assets/imagenes/manbook.png" alt="" />
    </div>

    <div class="fila2">
      <h1>Iniciar Sesión</h1>
      <form @submit.prevent="handleSubmit" action="">
          <Input
          @input="(value) => (username = value)"
          placeholder="Usuario"
          label="Usuario"
          required
          />
          <br />
            <Input
            @input="(value) => (password = value)"
            type="password"
            placeholder="Contraseña"
            label="Contraseña"
            required
          />
          <br />
        <Button type="secondary">Ingresar</Button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';

export default {
  name: 'Login',
  components: {
    Input,
    Button,
  },
  data() {
    return {
      username: '',
      password: '',
    };
  },
  watch: {
    isLogin(value) {
      if (value) {
        /* eslint-disable */
        alert('¡Bienvenido!');
        this.$router.replace('/');
      } else {
        /* eslint-disable */
        alert('Usuario no encontrado!!');
      }
    },
  },
  computed: {
    ...mapState({
      isLogin: (state) => state.authStore.isLogin,
    }),
  },
  methods: {
    ...mapActions({
      login: 'authStore/login',
    }),
    handleSubmit() {
      this.login({
        username: this.username,
        password: this.password,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.view-login {
  height: 100vh;
}

.contenedor {
    padding-top: 20px;
    display: flex;
    width: 100%;
    height: 100%;
    margin: 0;
}
img {
    padding-top: 180px;
    width: 100%;
}
.logo {
    background: #5640FF;
}
.logo img {
    display: block;
    padding: 20px;
    max-width: 200px;
}

.fila1 {
    width: 100%;
    background: #f8f8fa;
    padding: 20px;
}

.fila2 {
    width: 100%;
    padding: 30px;
}
.fila2 h1 {
    text-align: center;
    font-weight: 600;
    letter-spacing: 0px;
    color: #000425;
    opacity: 1;
    padding-bottom: 20px;
}
.fila2 p {

    padding-top: 20px;
    padding: 20px;
}

.ingreso {
    display: block;
    position: relative;
    width: 300px;
    height: 40px;
    top: 30px;

}
/*
Input{
    width: 40%;
} */


@media screen and (max-width: 768px) {
    .contenedor {
        width: 100%;
        padding-top: 20px;
        display: block;
        margin: 10px;
    }
    .fila1 {
        display: none;
    }

    .fila2 {
        width: 100%;
        padding: 0;
        margin: auto;
    }

    .fila2 h1 {

        text-align: center;
    }
    .ingreso {
        top: 25px;

    }
}

</style>
