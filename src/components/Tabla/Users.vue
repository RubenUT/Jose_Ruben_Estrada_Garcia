<template>
    <div class="usuarios-container">
        <div class="usuarios-acciones">
            <h2>{{ editingUser ? 'Editar Usuario' : 'Agregar Usuario' }}</h2>
            <form @submit.prevent="saveUser">
                <label for="email">Email:</label>
                <input type="text" id="email" v-model="currentUser.email" />

                <label for="password">Password:</label>
                <input type="text" id="password" v-model="currentUser.password" />

                <button type="submit">{{ editingUser ? 'Guardar cambios' : 'Agregar' }}</button>
            </form>
        </div>

        <div class="usuarios-list">
            <h2>Lista de Usuarios</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Correo Electronico</th>
                        <th>Contraseña</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.id">
                        <td>{{ user.id }}</td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.password }}</td>
                        <td>
                            <button @click="editUser(user)">Editar</button>
                            <button @click="deleteUser(user.id)">Eliminar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue';
import type { IUser } from '@/interfaces/IUser';
import UsersData from '@/data/UsersData';

const users = ref([...UsersData]);
const currentUser = ref<IUser>({ id: 0, email: '', password: '' });
const editingUser = ref(false);

const editUser = (user: IUser) => {
    currentUser.value = { ...user };
    editingUser.value = true;
};

const deleteUser = (userId: number) => {
    users.value = users.value.filter((user) => user.id !== userId);
};


const saveUser = () => {
    if (editingUser.value) {
        const index = users.value.findIndex((user) => user.id === currentUser.value.id);
        if (index !== -1) {
            users.value[index] = { ...currentUser.value };
        }
    } else {

        const newId = users.value.length + 1;
        users.value.push({ ...currentUser.value, id: newId });
    }

    currentUser.value = { id: 0, email: '', password: '' };
    editingUser.value = false;
};
</script>

<style scoped>
th,
td {
    border: 1px solid rgb(160 160 160);
    padding: 8px 10px;
}

.usuarios-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}
</style>