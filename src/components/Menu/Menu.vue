<template>
    <div>
        <MenuItem v-for="routes in routeView" :name="routes.name" :path="routes.path"></MenuItem>
    </div>
</template>
<script lang="ts" setup>
import type IMenuItem from '@/interfaces/IMenuItem';
import MenuItem from './MenuItem.vue';
import router from '@/router'

const routeView = router.options.routes.filter(route => {

    return { name: route.name, path: route.path } 
}) as IMenuItem[];


</script>