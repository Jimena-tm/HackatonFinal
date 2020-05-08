<template>
  <div id="chat">
    <div id="sender">
      <img id="profilePic" src="https://picsum.photos/100/100" alt />
      <div id="text">
        <p id="nameUser">{{message.subjects[1].name}}</p>
        <p id="course">Front-End</p>
      </div>
    </div>
    <div id="conversation">
      <div
        :key="index"
        v-for="(item,index) in message.content"
        :class="item.sender==loggedInUser?'right':'left'"
      >
        <div :class="item.sender==loggedInUser?'bubble b-right':'bubble b-left'">
          <p>{{item.message}}</p>
        </div>
        <p
          class="date"
          v-if="index == 0"
        >{{item.date.toLocaleDateString('es',{ month: 'short', day: 'numeric', year: 'numeric',hour:'2-digit',minute:'2-digit' })}}</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Chat",
  props: ["message", "loggedInUser"],
  methods: {}
};
</script>
<style lang="scss" scoped>
#chat {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  color: #000425;
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
</style>