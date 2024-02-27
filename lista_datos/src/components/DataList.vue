<template>
    <div>
        <form @submit.prevent="agregarDato">
            <label for="nuevoNombre">Nombre:</label>
            <input v-model="formulario.nombre" type="text" />
            <label for="nuevoApellido">Apellido:</label>
            <input v-model="formulario.apellido" type="text" />
            <label for="nuevaCiudad">Ciudad:</label>
            <input v-model="formulario.ciudad" type="text" />
            <label for="nuevaEdad">Edad:</label>
            <input v-model.number="formulario.edad" type="number" />
            <button type="submit">Agregar</button>
        </form>
    </div>
    <div class="datos-lista">
        <h2>Lista de datos</h2>
        <div>
            <button @click="ordenAscendente">Orden Ascendente</button>
            <button @click="ordenDescendente">Orden Descendente</button>
        </div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Ciudad</th>
                    <th>Edad</th>
                </tr>
            </thead>
            <tbody>
                <DataItem v-for="(datanum, index) in data" :key="index" :data="datanum" />
            </tbody>
        </table>
    </div>
</template>

<script lang="ts" setup>

import { ref, onMounted } from 'vue';
import DataItem from '@/components/DataItem.vue';
import InfoData from '@/data/InfoData';
import type { IData } from '@/interfaces/IData';

const data = ref<IData[]>([]);
const formulario = ref<IData>({
    id: 0,
    nombre: '',
    apellido: '',
    ciudad: '',
    edad: 0
});
onMounted(() => {
    data.value = InfoData;
})

const agregarDato = () => {
    if (
        formulario.value.nombre &&
        formulario.value.nombre.length > 0 &&
        formulario.value.apellido &&
        formulario.value.apellido.length > 0 &&
        formulario.value.ciudad &&
        formulario.value.ciudad.length > 0 &&
        formulario.value.edad > 0
    ) {
        if (!data.value.some(item => item.nombre === formulario.value.nombre)) {
            data.value.push({
                id: data.value.length + 1,
                nombre: formulario.value.nombre,
                apellido: formulario.value.apellido,
                ciudad: formulario.value.ciudad,
                edad: formulario.value.edad
            });
        } else {
            alert('La informacion que ingresó ya se encuentra en la tabla, ingresa campos diferentes')
        }
    } else {
        alert('Todos los campos son obligatorios y la edad debe ser mayor a cero.');
    }

    formulario.value = {
        id: 0,
        nombre: '',
        apellido: '',
        ciudad: '',
        edad: 0
    };
};

const ordenAscendente = () => {
    data.value.sort((a, b) => a.id - b.id);
};

const ordenDescendente = () => {
    data.value.sort((a, b) => b.id - a.id);
};
</script>
<style scoped>
th,
td {
    border: 1px solid rgb(160 160 160);
    padding: 8px 10px;
}
</style>