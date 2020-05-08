<template>
  <div class="view-register">
    <div class="image">
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
          <div class="form">
            <h1>Registro</h1>
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
  display: flex;


  .image {
    width: 60%;
  };
  .form {
    width: 40%;
    padding: 40px;
    align-self: center;
  }
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap');
  h1 {
    font-family: 'Poppins';
    text-align: center;
    margin-bottom: 40px;
  }
}


/* .view-register {
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
 */

</style>
