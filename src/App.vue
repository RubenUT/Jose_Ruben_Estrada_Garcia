<template>
  <div>
      <Menu/>     
  </div>
  <RouterView/>
</template>
<script lang="ts" setup>

import { RouterLink, RouterView } from 'vue-router'
import Menu from './components/Menu/Menu.vue'

</script>
<style scoped></style>