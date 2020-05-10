<template>
  <div class="view-FirstTime">
    <form v-if="firstTime" @submit.prevent="handleSubmit" action="">
    <h1>Cuentanos Sobre ti</h1>
      <Input
        @input="(value) => (profile = value)"
        :value="profile"
        placeholder="Perfil"
        label="Perfil"
        required
      />
      <Input
        @input="(value) => (phone = value)"
        :value="phone"
        placeholder="Escriba aqui"
        label="Celular"
        required
        disabled
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
        @input="(value) => (specialization = value)"
        :value="specialization"
        placeholder="Escriba aqui"
        label="Programa de especialización"
        required
        disabled
      />
      <Input
        @input="(value) => (email = value)"
        :value="email"
        placeholder="Correo Electronico"
        label="Correo Electronico"
        required
      />
      <Button type="secondary">Registrar</Button>
    </form>
    <div v-else>
     <Appbar />
     <Cards
        v-bind:users="users"
        v-on:openModal="openModal($event)"
      />
      <!-- <div id="noUsersView" v-if="!renderCards
         <Cards //ME FALTA IMPORTAR CARD Y MODAL BIEN POR ESO ESTÁ COMENTADO
        v-bind:users="users"
        v-on:openModal="openModal($event)"
      /> -->
      <!-- <div id="noUsersView" v-if="!renderCards">No hay nadie registrado aun.</div>-->
      <!-- <FirstTime v-if="firstTime" /> -->
      <Modal v-if="modalConfig.open" v-bind:user="modalConfig.user" v-on:closeModal="closeModal()" />
      </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex';
import { SET_USER } from '@/views/auth/store/mutatios-type';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';
import Cards from "./Cards";
import Appbar from "../../components/Appbar";
import Modal from "../../components/Modal";
export default {
  name: 'FirstTime',
  components: {
    Input,
    Button,
    Cards,
    Appbar,
    Modal
  },
  data() {
    return {
      profile: '',
      phone: '',
      place: '',
      specialization: '',
      email: '',
      id: '',
      firstTime: true,
      renderCards: true,
      modalConfig: {
        open: false,
        user: null
      }
    };
  },
  computed: {
    ...mapState({
      user(state) {
        console.log('state.authStore.user', state.authStore.user);
        this.phone = state.authStore.user.phone;
        this.place = state.authStore.user.place;
        this.specialization = state.authStore.user.specialization;
        this.id = state.authStore.user.id;
        this.firstTime = state.authStore.user.firstTime;
        return state.authStore.user;
      },
      users(state) {
      return state.usersStore.users;
      }
    }),
  },
  watch: {
    user(user) {
      console.log('user', user);
    },
    user(value) { //añadido
      console.log(value);
    }
  },
    created() {
    this.fetchUsers();
  },
  methods: {
    ...mapMutations({
      setUser: `authStore/${SET_USER}`,
      fetchUsers: "usersStore/setUsers"
    }),
    handleSubmit() {
      fetch(`http://localhost:3000/users/${this.id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          firstTime: false,
          profile: this.profile,
          email: this.email,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((user) => this.setUser(user));
    },
    openModal(id) {
      this.modalConfig = {
        open: true,
        user: this.users.filter(user => user.id === id)[0]
      };
    },

    closeModal() {
      this.modalConfig = { open: false, user: null };
    }
  },
};
</script>

<style>
</style>