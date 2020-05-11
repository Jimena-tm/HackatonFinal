<template>
  <div id="view-home">
    <form v-if="firstTime" @submit.prevent="handleSubmit" action>
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
    <div v-else id="standardHome">
      <Appbar />
      <div id="cards">
        <div v-bind:key="user.id" v-for="user in users">
          <CardUsuario v-bind:user="user" v-on:openModal="openModal($event)" />
        </div>
      </div>
      <Modal v-if="modalConfig.open" v-bind:user="modalConfig.user" v-on:closeModal="closeModal()" />
      <!--<div id="noUsersView" v-if="!users">No hay nadie registrado aun.</div>-->
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
import { SET_USER } from "@/views/auth/store/mutatios-type";
import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";
import Appbar from "../../components/Appbar";
import Modal from "../../components/Modal";
import CardUsuario from "../../components/CardUsuario";
export default {
  name: "Home",
  components: {
    Input,
    Button,
    Appbar,
    Modal,
    CardUsuario
  },
  data() {
    return {
      profile: "",
      phone: "",
      place: "",
      specialization: "",
      email: "",
      id: "",
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
        console.log("state.authStore.user", state.authStore.user);
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
    })
  },
  watch: {
    user(user) {
      console.log("user", user);
    },
    user(value) {
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
      fetch(
        `https://my-json-server.typicode.com/Mariega/jsonServerHackatonFinal/users/${this.id}`,
        {
          method: "PATCH",
          body: JSON.stringify({
            firstTime: false,
            profile: this.profile,
            email: this.email
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        }
      )
        .then(response => response.json())
        .then(user => this.setUser(user));
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
  }
};
</script>

<style lang="scss" scoped>
#view-home {
  display: flex;
  padding: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  #standardHome {
    width: 100%;
    > :nth-child(1) {
      margin-bottom: 40px;
    }
    #cards {
      width: 100%;
      display: grid;
      justify-items: center;
      row-gap: 10px;
      grid-template-columns: 1fr;
      @media (min-width: 700px) {
        grid-template-columns: 1fr 1fr;
        row-gap: 39px;
      }
      @media (min-width: 850px) {
        grid-template-columns: 1fr 1fr 1fr;
      }
      @media (min-width: 1100px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
      }
      @media (min-width: 1300px) {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      }
    }
    #noUsersView {
      text-align: center;
      font-family: Poppins;
      font-weight: bold;
      font-size: 20px;
      color: #bab8cc;
      @media (min-width: 600px) {
        font-size: 40px;
      }
    }
  }
}
</style>