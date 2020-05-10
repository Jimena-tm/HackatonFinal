<template>
  <div class="wrap-input">
    <label v-if="label">{{ label }}</label>
    <input
      :value="value"
      @input="updateInput"
      :type="type"
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
      class="input"
    />
    <!-- <form class="regist" action="">
            <div class="datos">
                <label for="">Nombres </label><br>
                <input type="text" placeholder="Escriba aquí…"><br><br>
                <label for="">Apellidos </label><br>
                <input type="text" placeholder="Escriba aquí…"><br><br>
                <label for="">Edad</label><br>
                <input type="text" placeholder="Escriba aquí…"><br><br>
                <label for="">Celular</label><br>
                <input type="number" placeholder="Escriba aquí…"><br><br>
                <label for="">Correo Electrónico</label><br>
                <input type="number" placeholder="Escriba aquí…"><br><br>
                <label for="">Sede</label><br>
                <input type="text" placeholder="Escriba aquí…"><br><br>
                <label style="white-space: nowrap;" for="">Programa de especialización</label><br>
                <input type="text" placeholder="Escriba aquí…">
                <br><br>
                <button>Ingresar</button>
            </div>
    </form>-->
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    value: [String, Number],
    placeholder: String,
    label: String,
    type: {
      type: String,
      default: "text"
    },
    required: {
      type: Boolean
    },
    disabled: Boolean,
    eye: String
  },
  data() {
    return {
      inpValue: ""
    };
  },
  methods: {
    updateInput(value) {
      this.$emit("input", value.target.value);
    }
  }
};
</script>

<style lang="scss" scoped>
.wrap-input {
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 8px;
    color: #bab8cc;
    text-transform: uppercase;
  }
}
.input {
  border: 1px solid #bab8cc;
  height: 50px;
  padding: 18px 10px;
  border-radius: 5px;
  width: 100%;
  color: #4e4e4e;

  &:focus {
    outline: none;
    border-color: #5640ff;
  }
}

/* .regist .datos {
    text-align: left;
    padding: 20px;
    display: block;
    padding-top: 20px;
    margin-left: 200px;
}

.regist .datos label {
    text-align: left;
    font: Medium 12px/16px Roboto;
    letter-spacing: 0px;
    color: #bab8cc;
    text-transform: uppercase;
    opacity: 1;
}

input::placeholder{
    text-align: left;
    font: Medium 12px/16px Roboto;
    letter-spacing: 0px;
    color: #bab8cc;
    text-transform: uppercase;
    opacity: 1;
}
.regist .datos input {
    top: 300px;
    left: 945px;
    width: 335px;
    height: 50px;
    border: 1px solid #bab8cc;
    border-radius: 5px;
    opacity: 1;

}

.regist .datos button {
    width: 300px;
    height: 50px;
    border-radius: 25px;
    opacity: 1;
    text-decoration: none;
    background: #5640ff  0% 0% no-repeat padding-box;
    border: none;
    color: #ffffff;
    font-family: calibri;
    font-weight: bold;
    font-size: 1.5rem;
    cursor: pointer;

    //preguntar por este botón al profe
}

.ing {
    position: relative;
    text-align: center;
    line-height: 50px;
    width: 320px;
    height: 60px;
    background: #5640ff 0% 0% no-repeat padding-box;
    border-radius: 25px;
    opacity: 1;
    display: block;
    top: 588px;
    left: 280px;
    text-decoration: none;
    color: #ffffff;
} */
</style>