<template>
    <div class="form-contenedor">
        <h2>Registro</h2>
        <form @submit.prevent="register" class="form-input">
            <div>
                <label for="username">Nombre de usuario:</label>
                <input type="text" id="email" v-model="email">
                <p v-if="showEmailError" class="error-message">Ingrese un nombre de usuario.</p>
            </div>
            <div>
                <label for="password">Contraseña:</label>
                <input type="password" id="password" v-model="password">
                <p v-if="showPasswordError" class="error-message">Ingrese una contraseña.</p>
            </div>
            <button type="submit" class="btnSubmit">Registrarse</button>
        </form>
    </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue';
import type { IUser } from '@/interfaces/IUser';

const email = ref('');
const password = ref('');
const showEmailError = ref(false);
const showPasswordError = ref(false);

const registeredUsers = ref<IUser[]>([]);

const register = () => {
    showEmailError.value = !email.value.trim();
    showPasswordError.value = !password.value.trim();

    if (showEmailError.value || showPasswordError.value) {
        return;
    }

    registeredUsers.value.push({
        id: registeredUsers.value.length + 1,
        email: email.value,
        password: password.value
    });

    email.value = '';
    password.value = '';

    window.alert('Registro exitoso');
};

</script>

<style scoped>
.error-message{
    color: red;
}
</style>