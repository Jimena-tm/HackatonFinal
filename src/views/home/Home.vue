<template>
  <div id="view-init">
    <Appbar v-if="!firstTime && renderCards" />
    <Cards
      v-if="!firstTime && renderCards"
      v-bind:users="users"
      v-on:openModal="openModal($event)"
    />
    <div id="noUsersView" v-if="!renderCards">No hay nadie registrado aun.</div>
    <!-- <FirstTime v-if="firstTime" /> -->
    <Modal v-if="modalConfig.open" v-bind:user="modalConfig.user" v-on:closeModal="closeModal()" />
  </div>
</template>

<script>
import Cards from "./Cards";
import Appbar from "../../components/Appbar";
import FirstTime from "./FirstTime";
import Modal from "../../components/Modal";
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  name: "Home",
  components: {
    Cards,
    Appbar,
    FirstTime,
    Modal
  },
  watch: {
    user(value) {
      console.log(value);
    }
  },
  computed: mapState({
    user(state) {
      return state.authStore.user;
    },
    users(state) {
      return state.usersStore.users;
    }
  }),
  created() {
    this.fetchUsers();
  },
  data() {
    return {
      firstTime: false,
      renderCards: true,
      modalConfig: {
        open: false,
        user: null
      }
    };
  },
  methods: {
    ...mapMutations({
      fetchUsers: "usersStore/setUsers"
    }),
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
#view-init {
  display: flex;
  padding: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > :nth-child(1) {
    margin-bottom: 40px;
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
</style>
