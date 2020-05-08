<template>
  <div class="view-account">
    <h1>Perfil</h1>
      <h2>Configuración de cuenta</h2>
        <div class="form">
              <Input
              @input="(value) => (name = value)"
              :value="name"
              placeholder="Escriba aqui"
              label="Nombre de Usuario"
              required
              />
              <Input
              @input="(value) => (name = value)"
              :value="name"
              placeholder="Escriba aqui"
              label="Contraseña actual"
              required
              />
              <Input
              @input="(value) => (name = value)"
              :value="name"
              placeholder="Escriba aqui"
              label="Nueva contraseña"
              required
              />
              <Input
              @input="(value) => (name = value)"
              :value="name"
              placeholder="Escriba aqui"
              label="Confirmar nueva contraseña"
              required
              />
              <br />
              <Button type="secondary">Guardar Cambios</Button>
        </div>
        <h2>Mi Perfil</h2>

        <div class="form">
              <Input
              @input="(value) => (name = value)"
              :value="name"
              placeholder="Escriba aqui"
              label="Perfil"
              required
              />
              <Input
              @input="(value) => (name = value)"
              :value="name"
              placeholder="Escriba aqui"
              label="Programa de especialización"
              required
              />
              <Input
              @input="(value) => (name = value)"
              :value="name"
              placeholder="Escriba aqui"
              label="Celular"
              required
              />
              <Input
              @input="(value) => (name = value)"
              :value="name"
              placeholder="Escriba aqui"
              label="Confirmar nueva contraseña"
              required
              />
              <Input
              @input="(value) => (name = value)"
              :value="name"
              placeholder="Escriba aqui"
              label="Correo Electrónico"
              required
              />
              <br />
              <Button type="secondary">Guardar Cambios</Button>
        </div>
    </div>
</template>

<script>
import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";

export default {
  name: 'Account',
  components: {
    Input,
    Button,
  },
}
</script>

<style lang="scss" scoped>
h1{
  margin-left:220px;
  padding-top: 20px;
}

h2{
  margin-left:220px;
  margin-top: 30px;
  font-size: 2rem;
}

.form {
  margin-top: 20px;
  margin-left: 250px;
  display: inline-grid;
  grid-template-columns: 500px 500px;
  grid-column-gap: 50px
}

</style>