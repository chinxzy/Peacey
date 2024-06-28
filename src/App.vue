<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style lang="scss">
#app {
  font-family: "Outfit", sans-serif;
}

.swal2-icon {
  width: 4em;
  height: 4em;
}

div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left] {
  left: 0.6em;
  top: 1.79em !important;
  transform: rotate(45deg);
}

div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right] {
  right: 0.5em;
  transform: rotate(-45deg);
  top: 1.8em;
}
</style>