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
export default {
  name: "Messages",
  components: {
    ListaMensajes,
    Chat
  },
  methods: {
    openMessage(messageId) {
      this.selectedMessage = this.messages.filter(message => {
        return message.messageId === messageId;
      })[0];
    }
  },
  data() {
    return {
      loggedInUser: "Mario Gonzales",
      messages: [
        {
          messageId: 1,
          subjects: [
            {
              name: "Mario Gonzales"
            },
            {
              name: "Camila Cordova",
              profileUrl: "https://picsum.photos/100/100"
            }
          ],
          content: [
            {
              dialogId: 1,
              sender: "Mario Gonzales",
              message: "Lorem ipsum dolor sit",
              date: new Date()
            },
            {
              dialogId: 2,
              sender: "Camila Cordova",
              message: "amet consectetur adipisicing elit. Laboriosam",
              date: new Date()
            },
            {
              dialogId: 3,
              sender: "Mario Gonzales",
              message: "earum quod.",
              date: new Date()
            },
            {
              dialogId: 4,
              sender: "Mario Gonzales",
              message: "Molestias quod debitis facilis ex, odio",
              date: new Date()
            },
            {
              dialogId: 5,
              sender: "Camila Cordova",
              message:
                "exercitationem asdasd asdsads asdsadsds adsasdsd asdasdsd asdsadasdad asdsdasdas veniam sapiente, nam optio nobis modi officia necessitatibus",
              date: new Date()
            },
            {
              dialogId: 6,
              sender: "Camila Cordova",
              message: "unde? Aliquid",
              date: new Date()
            },
            {
              dialogId: 7,
              sender: "Mario Gonzales",
              message: "quam repellendus.",
              date: new Date()
            }
          ]
        },
        {
          messageId: 2,
          subjects: [
            {
              name: "Mario Gonzales"
            },
            {
              name: "Gabriela Vela",
              profileUrl: "https://picsum.photos/100/100"
            }
          ],
          content: [
            {
              dialogId: 1,
              sender: "Mario Gonzales",
              message: "Lorem ipsum dolor sit",
              date: new Date()
            },
            {
              dialogId: 2,
              sender: "Gabriela Vela",
              message: "amet consectetur adipisicing elit. Laboriosam",
              date: new Date()
            },
            {
              dialogId: 3,
              sender: "Mario Gonzales",
              message: "earum quod.",
              date: new Date()
            },
            {
              dialogId: 4,
              sender: "Mario Gonzales",
              message: "Molestias quod debitis facilis ex, odio",
              date: new Date()
            },
            {
              dialogId: 5,
              sender: "Gabriela Vela",
              message:
                "exercitationem veniamsadsa asdasdasdd asdasdasdad sapiente, nam optio nobis modi officia necessitatibus",
              date: new Date()
            },
            {
              dialogId: 6,
              sender: "Gabriela Vela",
              message: "unde? Aliquid",
              date: new Date()
            },
            {
              dialogId: 7,
              sender: "Mario Gonzales",
              message: "quam repellendus.",
              date: new Date()
            }
          ]
        }
      ],
      selectedMessage: null
    };
  }
};
</script>

<style lang="scss" scoped>
#messages {
  position: absolute;
  width: 100%;
  height: 100%;
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
}
</style>

