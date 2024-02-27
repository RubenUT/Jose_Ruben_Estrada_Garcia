<template>
    <tr>
        <td>{{ task.id }}</td>
        <td>{{ task.title }}</td>
        <td :class="{ 'tarea-pendiente': !task.completed, 'tarea-completada': task.completed }">{{ task.completed ? 'Completada' :
            'Pendiente' }}</td>
        <td>
            <button @click="cambiarEstado">{{ task.completed ? 'Marcar como pendiente' : 'Marcar como completada'
            }}</button>
            <button @click="borrarTarea">Borrar</button>
        </td>
    </tr>
</template>
<script lang="ts" setup>
import type { ITask } from '@/interfaces/ITask';
const props = defineProps<{ task: ITask }>();
const emits = defineEmits();
const cambiarEstado = () => {
    props.task.completed = !props.task.completed;
    emits('cambiar-estado', props.task)
};
const borrarTarea = () => {
    emits('borrar-tarea', props.task.id);
}
</script>
<style scoped>
th,
td {
    border: 1px solid rgb(160 160 160);
    padding: 8px 10px;
}

.tarea-pendiente {
    background-color: yellow;
}

.tarea-completada {
    background-color: green;
}
</style>