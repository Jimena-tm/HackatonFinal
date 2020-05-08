<template>
  <div id="firstTime">
    <h1 id="title">Cuentanos sobre ti</h1>
    <h2 id="subtitle">esta informacion la podran ver las demas personas</h2>
    <form id="form" action>
      <p id="perfil" class="field">
        <label for="size_1">Perfil</label>
        <input type="text" name="size" id="size_1" placeholder="Hola soy Lorem Ipsum" />
      </p>
      <p class="field">
        <label for="size_1">Programa de especializacion</label>
        <input type="text" name="size" id="size_1" placeholder="Escriba aqui..." />
      </p>
      <p class="field">
        <label for="size_1">Celular</label>
        <input type="text" name="size" id="size_1" placeholder="Escriba aqui..." />
      </p>
      <p class="field">
        <label for="size_1">Sede</label>
        <input type="text" name="size" id="size_1" placeholder="Escriba aqui..." />
      </p>
      <p class="field">
        <label for="size_1">Correo electronico</label>
        <input type="text" name="size" id="size_1" placeholder="Escriba aqui..." />
      </p>
    </form>
  </div>
</template>

<script>
export default {
  name: "FirstTime"
};
</script>

<style lang="scss" scoped>
#firstTime {
  #title {
    font-weight: bold;
    font-size: 40px;
    color: #000425;
    margin-bottom: 20px;
  }
  #subtitle {
    font-weight: medium;
    font-size: 20px;
    color: #000425;
    margin-bottom: 60px;
  }
  form {
    display: grid;
    row-gap: 30px;
    column-gap: 50px;
    grid-template-columns: 1fr;
    @media (min-width: 600px) {
      grid-template-columns: 1fr 1fr;
    }
    .field {
      display: flex;
      flex-direction: column;
      label {
        font-family: Roboto;
        font-weight: 500;
        font-size: 12px;
        color: #bab8cc;
        text-transform: uppercase;
        margin-bottom: 6px;
      }
      input {
        height: 50px;
        border-radius: 5px;
        border: 1px solid #bab8cc;
        padding: 10px;
      }
    }
    #perfil {
      @media (min-width: 600px) {
        grid-column-start: 1;
        grid-column-end: 3;
      }
      input {
        height: 109px;
        @media (min-width: 600px) {
          height: 50px;
        }
      }
    }
  }
}
</style>