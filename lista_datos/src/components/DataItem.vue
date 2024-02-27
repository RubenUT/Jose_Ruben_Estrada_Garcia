<template>
    <tr :class="{ 'selected': isSelected }" @click="toggleSelection">
        <td> {{ data.id }}</td>
        <td> {{ data.nombre }}</td>
        <td> {{ data.apellido }}</td>
        <td> {{ data.ciudad }}</td>
        <td> {{ data.edad }}</td>
    </tr>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import type { IData } from '@/interfaces/IData';
const props = defineProps<{ data: IData }>();

const isSelected = ref(false);
const toggleSelection = () => {
    isSelected.value = !isSelected.value;
};
</script>
<style scoped>
th,
td {
    border: 1px solid rgb(160 160 160);
    padding: 8px 10px;
}

.selected {
    background-color: lightblue;
    color: darkblue;
}
</style>