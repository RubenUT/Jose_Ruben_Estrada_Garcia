<template>
    <div>
        <form @submit.prevent="agregarTarea">
            <label for="nuevaTarea">Nueva tarea:</label>
            <input type="text" id="nuevaTarea" v-model="tituloNuevaTarea" required>
            <button type="submit">Agregar tarea</button>
        </form>

        <table v-if="tasks.length > 0">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Titulo</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <TaskItem v-for="(task, index) in tasks" :key="index" :task="task" @borrar-tarea="deleteTask"
                    @cambiar-estado="cambiarEstado" />
            </tbody>
        </table>
        <p v-else>No hay tareas todavia</p>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import TaskItem from './TaskItem.vue';
import TaskData from '@/data/TaskData';
import type { ITask } from '@/interfaces/ITask';

const tasks = ref<ITask[]>([]);
const tituloNuevaTarea = ref('');
onMounted(() => {
    tasks.value = TaskData;
});

const agregarTarea = () => {
    if (tituloNuevaTarea.value.trim() !== '') {
        tasks.value.push({
            id: tasks.value.length + 1,
            title: tituloNuevaTarea.value.trim(),
            completed: false,
        });
        tituloNuevaTarea.value = '';
    }
};

const deleteTask = (taskId: number) => {
    tasks.value = tasks.value.filter((task) => task.id !== taskId);
    alert(`Tarea eliminada`);
};

const cambiarEstado = (task: ITask) => {
    alert(`Tarea completada! ${task.title}`);
}

</script>

<style scoped>
tr{
    background-color: azure;
}
th,
td {
    border: 1px solid rgb(160 160 160);
    padding: 8px 10px;
}
</style>