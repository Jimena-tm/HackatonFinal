<template>
  <div id="listaMensajes">
    <Buscador />
    <div
      class="itemMessage"
      :key="message.messageId"
      @click="$emit('openMessage', message.messageId)"
      v-for="message in messages"
    >
      <img
        class="profilePic"
        :src="
          message.subjects[1].profileUrl
            ? message.subjects[1].profileUrl
            : require(`../assets/account.png`)
        "
      />
      <div class="content">
        <p class="sender">{{ message.subjects[1].name }}</p>
        <div class="text">
          <p class="msg">
            {{ message.content[0].message.substring(0, 37) + "..." }}
          </p>
          <p class="date">
            {{
              new Date(message.content[0].date).toLocaleDateString("es", {
                month: "short",
                day: "numeric",
              })
            }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Buscador from "../components/Buscador";
export default {
  name: "ListaMensajes",
  components: { Buscador },
  props: ["messages"],
  methods: {},
};
</script>

<style lang="scss" scoped>
#listaMensajes {
  width: 408px;
  border: 2px solid #f8f8fa;
  .itemMessage {
    display: flex;
    align-items: center;
    text-align: left;
    height: 80px;
    padding-left: 30px;
    padding-right: 30px;
    cursor: pointer;
    .profilePic {
      margin-right: 10px;
      height: 50px;
      width: 50px;
      border-radius: 50%;
    }
    .content {
      width: 100%;
      .sender {
        font-size: 16px;
        margin-bottom: 5px;
        font-weight: 500;
      }
      .text {
        display: flex;
        justify-content: space-between;
        .msg {
          font-family: Roboto;
          font-weight: 300;
          letter-spacing: 0;
          font-size: 14px;
          color: #bab8cc;
          margin-right: 10px;
        }
        .date {
          text-transform: uppercase;
          color: #bab8cc;
          font-size: 12px;
          font-family: Roboto;
          font-weight: 500;
        }
      }
    }
  }
  :hover {
    background: #f8f8fa;
  }
}
</style>
