<template>
  <div class="view-account">
    <h1>Perfil</h1>
      <h2>Configuración de cuenta</h2>
        <form @submit.prevent="handleSubmit" action="">
          <div class="form">
              <Input
              @input="(value) => (username = value)"
              :value="username"
              placeholder="Usuario"
              label="Nombre de Usuario"
              required
              disabled
              />
              <Input
              @input="(value) => (password = value)"
              :value="password"
              type="password"
              placeholder="Escriba aqui"
              label="Contraseña actual"
              required
              />
              <Input
              @input="(value) => (password = value)"
              :value="password"
              type="password"
              placeholder="Escriba aqui"
              label="Nueva contraseña"
              required
              />
              <Input
              @input="(value) => (password = value)"
              :value="password"
              type="password"
              placeholder="Escriba aqui"
              label="Confirmar nueva contraseña"
              required
              />
              <br />
              <Button type="secondary">Guardar Cambios</Button>
            </div>
        </form>
        <h2>Mi Perfil</h2>
        <form @submit.prevent="handleSubmit" action="">
              <div class="inp1">
                <Input
                @input="(value) => (profile = value)"
                :value="profile"
                placeholder="Perfil"
                label="Perfil"
                required
                />
                </div>
              <br />
              <div class="form">
                <Input
                @input="(value) => (specialization = value)"
                :value="specialization"
                placeholder="Escriba aqui"
                label="Programa de especialización"
                required
                disabled
                />
                <Input
                @input="(value) => (phone = value)"
                :value="phone"
                placeholder="Escriba aqui"
                label="Celular"
                required
                />
                <Input
                @input="(value) => (place = value)"
                :value="place"
                placeholder="Sede"
                label="Sede"
                required
                disabled
                />
                <Input
                @input="(value) => (email = value)"
                :value="email"
                placeholder="Escriba aqui"
                label="Correo Electrónico"
                required
                />
                <br />
                <Button type="secondary">Guardar Cambios</Button>
              </div>
        </form>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { SET_USER } from '@/views/auth/store/mutatios-type';
import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";

export default {
  name: 'Account',
  components: {
    Input,
    Button,
  },
  data() {
    return {
      username: '',
      password: '',
      profile: '',
      phone: '',
      place: '',
      specialization: '',
      email: '',
      id: '',
    };
  },
  computed: {
    ...mapState({
      user(state) {
        console.log('state.authStore.user', state.authStore.user);
        this.username = state.authStore.user.username;
        this.password = state.authStore.user.password;
        this.profile = state.authStore.user.profile;
        this.phone = state.authStore.user.phone;
        this.place = state.authStore.user.place;
        this.specialization = state.authStore.user.specialization;
        this.email = state.authStore.user.email;
        this.id = state.authStore.user.id;
      },
    }),
  },
  watch: {
    user(user) {
      console.log('user', user);
    },
  },
  methods: {
    ...mapMutations({
      setUser: `authStore/${SET_USER}`,
    }),
    handleSubmit() {
      fetch(`http://localhost:3000/users/${this.id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          profile: this.profile,
          email: this.email,
          phone: this.phone,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((user) => this.setUser(user));
    },
  },
}
</script>

<style lang="scss" scoped>
h1{
  margin-left:220px;
  padding-top: 50px;
}

h2{
  margin-left:220px;
  margin-top: 30px;
  font-size: 2rem;
}

.form {
  margin-top: 20px;
  margin-left: 250px;
  display: inline-grid;
  grid-template-columns: 500px 500px;
  grid-column-gap: 50px
}


.inp1 {
  margin-top: 20px;
  margin-left: 250px;
  width: 69%;
}
</style>