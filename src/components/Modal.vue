<template>
  <div id="modal">
    <div id="label">
      <p>Perfil</p>
      <img id="closeIcon" src="../assets/icons/close.svg" v-on:click="$emit('closeModal')" alt />
    </div>
    <p id="name">{{user.firstName+' '+user.lastName}}</p>
    <p id="profile">{{user.profile}}</p>
    <div class="listItem">
      <img src="../assets/icons/book.svg" alt />
      {{user.course}}
    </div>
    <div class="listItem">
      <img src="../assets/icons/place.svg" alt />
      <p>{{user.campus}}</p>
    </div>
    <div class="listItem">
      <img src="../assets/icons/phone.svg" alt />
      <p>{{user.phone}}</p>
    </div>
    <div class="listItem">
      <img src="../assets/icons/email.svg" alt />
      <p>{{user.email}}</p>
    </div>
    <div id="buttonMensaje">Mandar mensaje</div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: ["user"]
};
</script>

<style lang="scss" scoped>
#modal {
  width: 400px;
  height: 504px;
  display: flex;
  flex-direction: column;
  background: #fff;
  z-index: 1;
  position: absolute;
  border: 1px solid #f3f3f3;
  border-radius: 25px;
  padding: 0 20px 17px 20px;
  color: #000425;
  #label {
    text-transform: uppercase;
    border-radius: 25px 25px 0 0;
    display: flex;
    align-items: center;
    height: 50px;
    font-size: 12px;
    font-family: Roboto;
    border-bottom: 1px solid #f0f0f0;
    margin-bottom: 20px;
    justify-content: space-between;
    #closeIcon {
      cursor: pointer;
    }
  }
  #name {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 20px;
  }
  #profile {
    font-family: Roboto;
    font-size: 14px;
    margin-bottom: 33px;
  }
  .listItem {
    height: 44px;
    font-family: Roboto;
    font-size: 14px;
    display: flex;
    align-items: center;
    img {
      margin-right: 20px;
    }
  }
  #buttonMensaje {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    width: 310px;
    height: 50px;
    border-radius: 25px;
    background: #5640ff;
    color: white;
    margin-top: 41px;
    align-self: center;
    cursor: pointer;
  }
}
</style>