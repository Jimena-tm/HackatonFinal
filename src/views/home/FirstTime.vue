<template>
  <div id="firstTime">
    <h1 id="title">Cuentanos sobre ti</h1>
    <h2 id="subtitle">esta informacion la podran ver las demas personas</h2>
    <form id="form" action>
      <p id="perfil" class="field">
        <label for="size_1">Perfil</label>
        <input type="text" name="size" id="size_1" placeholder="Hola soy Lorem Ipsum" />
      </p>
      <p class="field">
        <label for="size_1">Programa de especializacion</label>
        <input type="text" name="size" id="size_1" placeholder="Escriba aqui..." />
      </p>
      <p class="field">
        <label for="size_1">Celular</label>
        <input type="text" name="size" id="size_1" placeholder="Escriba aqui..." />
      </p>
      <p class="field">
        <label for="size_1">Sede</label>
        <input type="text" name="size" id="size_1" placeholder="Escriba aqui..." />
      </p>
      <p class="field">
        <label for="size_1">Correo electronico</label>
        <input type="text" name="size" id="size_1" placeholder="Escriba aqui..." />
      </p>
      <Button :fullWidth="true" type="primary">Registrar</Button>
    </form>
  </div>
</template>

<script>
import Button from "../../components/Button";
import { SET_USER } from "@/views/auth/store/mutatios-type";
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  name: "FirstTime",
  components: {
    Button
  },
  data() {
    return {
      profile: "",
      phone: "",
      place: "",
      specialization: "",
      email: "",
      id: "",
      firsTime: true
    };
  },
  computed: {
    ...mapState({
      user(state) {
        console.log("state.authStore.user", state.authStore.user);
        this.phone = state.authStore.user.phone;
        this.place = state.authStore.user.place;
        this.specialization = state.authStore.user.specialization;
        this.id = state.authStore.user.id;
        this.firsTime = state.authStore.user.firsTime;
      }
    })
  },
  watch: {
    user(user) {
      console.log("user", user);
    }
  },
  methods: {
    ...mapMutations({
      setUser: `authStore/${SET_USER}`
    }),
    handleSubmit() {
      fetch(`http://localhost:3000/users/${this.id}`, {
        method: "PATCH",
        body: JSON.stringify({
          firsTime: false,
          profile: this.profile,
          email: this.email
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(response => response.json())
        .then(user => this.setUser(user));
    }
  }
};
</script>

<style lang="scss" scoped>
#firstTime {
  #title {
    font-weight: bold;
    font-size: 40px;
    color: #000425;
    margin-bottom: 20px;
  }
  #subtitle {
    font-weight: medium;
    font-size: 20px;
    color: #000425;
    margin-bottom: 60px;
  }
  form {
    display: grid;
    row-gap: 30px;
    column-gap: 50px;
    grid-template-columns: 1fr;
    @media (min-width: 600px) {
      grid-template-columns: 1fr 1fr;
    }
    .field {
      display: flex;
      flex-direction: column;
      label {
        font-family: Roboto;
        font-weight: 500;
        font-size: 12px;
        color: #bab8cc;
        text-transform: uppercase;
        margin-bottom: 6px;
      }
      input {
        height: 50px;
        border-radius: 5px;
        border: 1px solid #bab8cc;
        padding: 10px;
      }
    }
    #perfil {
      @media (min-width: 600px) {
        grid-column-start: 1;
        grid-column-end: 3;
      }
      input {
        height: 109px;
        @media (min-width: 600px) {
          height: 50px;
        }
      }
    }
    #button {
      width: 300px;
      height: 50px;
      border-radius: 25px;
      opacity: 1;
      text-decoration: none;
      font-family: "Poppins";
      cursor: pointer;
      text-align: center;
      background: #5640ff 0% 0% no-repeat padding-box;
      border: none;
      color: #ffffff;
      font-family: Poppins;
      font-weight: bold;
      font-size: 1.5rem;
    }
  }
}
</style>
