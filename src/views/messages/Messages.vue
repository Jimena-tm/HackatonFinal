<template>
  <div id="messages">
    <div id="listaMensajes">
      <div v-if="!messages" id="noMessages">
        No tienes mensajes aun,
        <br />inicia una conversacion
      </div>
      <ListaMensajes id="listaMensajes" :messages="messages" @openMessage="openMessage($event)" />
    </div>
    <div id="chat" v-if="selectedMessage">
      <div @click="setSelectedMessageNull()" id="volver" class="volver">
        <img src="@/assets/icons/left-arrow.svg" alt />
        Volver
      </div>
      <div id="sender">
        <img id="profilePic" src="https://picsum.photos/100/100" alt />
        <div id="text">
          <p id="nameUser">{{ selectedMessage.subjects[1].name }}</p>
          <p id="course">Front-End</p>
        </div>
      </div>
      <div id="conversation">
        <div
          :key="index"
          v-for="(item, index) in selectedMessage.content"
          :class="item.sender == loggedInUser.username ? 'right' : 'left'"
        >
          <div
            :class="
            item.sender == loggedInUser.username
              ? 'bubble b-right'
              : 'bubble b-left'
          "
          >
            <p>{{ item.message }}</p>
          </div>
          <p class="date" v-if="index == 0">
            {{
            new Date(item.date).toLocaleDateString("es", {
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            })
            }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListaMensajes from "../../components/ListaMensajes";
import { mapActions, mapState, mapMutations } from "vuex";

export default {
  name: "Messages",
  components: {
    ListaMensajes
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
    }
  }),
  data() {
    return {
      mobileView: false
    };
  },
  watch: {
    selectedMessage(selectedMessage) {
      this.setMobileView();
    },
    mobileView(mobileView) {
      document.getElementById("listaMensajes").classList.toggle("show");
      document.getElementById("volver").classList.toggle("show");
    }
  },
  created() {
    this.fetchMessages();
    this.setMobileView();
    window.addEventListener("resize", this.setMobileView);
  },
  destroyed() {
    window.removeEventListener("resize", this.setMobileView);
  },
  methods: {
    ...mapMutations({
      fetchMessages: "messagesStore/setMessages",
      openMessage: "messagesStore/openMessage",
      setSelectedMessageNull: "messagesStore/setSelectedMessageNull"
    }),
    setMobileView() {
      if (window.innerWidth < 900 && Boolean(this.selectedMessage)) {
        this.mobileView = true;
      } else {
        this.mobileView = false;
      }
    }
  }
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
  .volver {
    display: flex;
    align-items: center;
    background: #5640ff;
    padding: 20px;
    color: white;
    height: 50px;
    > :nth-child(1) {
      cursor: pointer;
      margin-right: 10px;
    }
  }
  #chat {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    color: #000425;
    height: 100%;

    #sender {
      border: 2px solid #f8f8fa;
      display: flex;
      align-items: center;
      height: 88px;
      width: auto;
      padding: 30px;
      #profilePic {
        margin-right: 20px;
        height: 60px;
        width: 60px;
        border-radius: 50%;
      }
      #text {
        #nameUser {
          font-size: 20px;
          font-weight: 500;
          margin-bottom: 5px;
        }
        #course {
          font-family: Roboto;
        }
      }
    }
    #conversation {
      flex-grow: 1;
      border: 2px solid #f8f8fa;
      padding: 0 5% 20px 10%;
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      .left {
        align-self: flex-start;
      }
      .b-left {
        background: #f8f8fa;
      }
      .right {
        align-self: flex-end;
      }
      .b-right {
        background: #8e80ff;
        color: white;
      }
      .bubble {
        max-width: 277px;
        width: auto;
        line-height: 130%;
        margin-bottom: 2px;
        padding: 10px;
        border-radius: 25px;
        font-size: 14px;
        font-family: Roboto;
      }
      .date {
        margin-top: 10px;
        font-family: Roboto;
        color: #bab8cc;
        text-transform: uppercase;
      }
    }
  }
  .show {
    display: none;
  }
}
</style>
