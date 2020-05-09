<template>
  <div id="messages">
    <div id="listaMensajes">
      <div v-if="!messages" id="noMessages">
        No tienes mensajes aun,
        <br />inicia una conversacion
      </div>
      <ListaMensajes :messages="messages" @openMessage="openMessage($event)" />
    </div>
    <Chat :message="selectedMessage" :loggedInUser="loggedInUser" />
  </div>
</template>

<script>
import ListaMensajes from "../../components/ListaMensajes";
import Chat from "../../components/Chat";
import { mapActions, mapState, mapMutations } from "vuex";

export default {
  name: "Messages",
  components: {
    ListaMensajes,
    Chat,
  },
  computed: mapState({
    messages(state) {
      return state.messagesStore.messages;
    },
    selectedMessage(state) {
      return state.messagesStore.selectedMessage;
    },
    loggedInUser(state) {
      return state.authStore.user;
    },
  }),
  created() {
    this.fetchMessages();
  },
  methods: {
    ...mapMutations({
      fetchMessages: "messagesStore/setMessages",
      openMessage: "messagesStore/openMessage",
    }),
  },
};
</script>

<style lang="scss" scoped>
#messages {
  display: flex;
  #listaMensajes {
    #noMessages {
      text-align: center;
      font-weight: bold;
      font-size: 20px;
      color: #bab8cc;
      @media (min-width: 600px) {
        font-size: 40px;
      }
    }
  }
  > :nth-child(2) {
    flex-grow: 1;
  }
}
</style>
