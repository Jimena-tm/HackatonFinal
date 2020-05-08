<template>
  <div id="Buscador">
    <input id="Input" type="text" placeholder="Buscar" />
    <img id="Icono" src="../assets/icons/lupa.svg" alt />
  </div>
</template>

<script>
export default {
  name: "Buscador"
};
</script>

<style lang="scss">
#Buscador {
  display: flex;
  align-items: center;
  position: relative;
  min-width: 250px;
  height: 50px;
  letter-spacing: 0px;
  color: #000425;
  padding: 0 50px 0 20px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #bab8cc4d;
  border-radius: 25px;
  #Input {
    height: 50px;
    width: 100%;
    border: none;
    font-family: Poppins;
    font-size: 14px;
    font-weight: bold;
    background: none;
    color: #000425;
  }
  ::placeholder {
    color: #000425;
  }
  :focus,
  a:active {
    outline: none;
  }
  #Icono {
    position: absolute;
    right: 15px;
    width: 24px;
    height: 24px;
  }
}
</style>