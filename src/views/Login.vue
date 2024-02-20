<template>
    <div class="form-contenedor">
        <h2>Iniciar sesión</h2>
        <form @submit.prevent="login" class="form-input">
            <div>
                <label for="email"> Correo Electronico:</label>
                <input type="text" id="email" v-model="email" required/>
            </div>
            <div>
                <label for="password">Contraseña:</label>
                <input type="password" id="password" v-model="password" required/>
            </div>
            <button class="btnSubmit" type="submit">Iniciar sesión</button>
        </form>
    </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');

const login = () => {
    if(email.value === 'usuario@ejemplo.com' || password.value === '12345'){
        alert('Sesion iniciada')
    }else{
        alert('Credenciales incorrectas')
    }

    email.value = '';
    password.value = '';
};
</script>

<style scoped>
.login-contenedor{
    display: block;
}

.btnSubmit {
    margin-top: 1%;
}
</style>