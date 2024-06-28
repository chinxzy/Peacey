<template>
  <nav class="bg-gray-800 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <div class="text-white text-lg font-semibold">Peacey's app</div>
      <!-- <ul class="flex space-x-4">
        <li>
          <router-link to="/" class="text-gray-300 hover:text-white">Home</router-link>
        </li>
        <li>
          <router-link to="/about" class="text-gray-300 hover:text-white">About</router-link>
        </li>
        <li>
          <router-link to="/contact" class="text-gray-300 hover:text-white">Contact</router-link>
        </li>
      </ul> -->
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Navbar'
})
</script>

<style scoped>
/* Add any scoped styles if needed */
</style>
