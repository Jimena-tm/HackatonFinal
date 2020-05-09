<template>
  <div class="view-register">
    <div class="logo">
        <img src="@/assets/imagenes/logotipo.png" alt="">
    </div>

    <div class="contenedor">
        <div class="fila1">
          <img src="@/assets/imagenes/manbook.png" alt="" />
        </div>
    <!-- <section id="logo">
      <img src="@/assets/imagenes/logotipo.png" alt="" />
    </section>
    <section id="wrap">
      <div class="contenedor">
        <h1>¡Bienvenid@!</h1>
          <div class="frm">
              <img src="@/assets/imagenes/manbook.png" alt="" />
              <br/> -->
          <div class="fila2">
            <h1>Registro</h1>
            <br/>
            <form @submit.prevent="handleSubmit" action="">
              <Input
              @input="(value) => (name = value)"
              :value="name"
              placeholder="Escriba aqui"
              label="Nombre y Apellido"
              required
              />
              <br/>
              <Input
              @input="(value) => (username = value)"
              :value="username"
              placeholder="Usuario"
              label="Usuario"
              required
              />
              <br/>
              <Input
              @input="(value) => (password = value)"
              :value="password"
              type="password"
              placeholder="Password"
              label="Password"
              required
              />
              <br/>
              <Input
              @input="(value) => (age = value)"
              :value="age"
              placeholder="Escriba aqui"
              label="Edad"
              required
              />
              <br/>
              <Input
              @input="(value) => (phone = value)"
              :value="phone"
              placeholder="Escriba aqui"
              label="Celular"
              required
              />
              <br/>
              <Input
              @input="(value) => (place = value)"
              :value="place"
              placeholder="Sede"
              label="Sede"
              required
              />
              <br/>
              <Input
              @input="(value) => (specialization = value)"
              :value="specialization"
              placeholder="Escriba aqui"
              label="Programa de especialización"
              required
              />
              <br />
              <Button type="secondary">Registrar</Button>
            </form>
          </div>
         <!--</div>
      </div>
    </section> -->
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";

export default {
  name: 'Register',
  components: {
    Input,
    Button,
  },
  data () {
    return {
      name: '',
      username: '',
      password: '',
      age: '',
      phone: '',
      place: '',
      specialization: '',
    };
  },
  watch: {
    successRegister(value) {
      if (value) {
        /* eslint-disable */
        alert('Tu registro fue correcto');
        this.$router.replace('login');
      } else {
        alert('Tu registro fue incorrecto, ¡vuelve a intentarlo!');
      }
    },
  },
  computed: {
    ...mapState('authStore', {
      successRegister: 'successRegister',
    }),
  },
  methods: {
    ...mapActions({
      register: 'authStore/register',
    }),
    handleSubmit () {
     this.register({
        name: this.name,
        username: this.username,
        password: this.password,
        age: this.age,
        phone: this.phone,
        place: this.place,
        specialization: this.specialization,
        firstTime: true,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.view-register {
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
