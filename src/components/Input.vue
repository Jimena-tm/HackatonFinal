<template>
    <form class="regist" action="">
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
    </form>
</template>

<script>
export default {

}
</script>

<style lang="scss">

.regist .datos {
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
}

</style>