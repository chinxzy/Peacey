<template>
  <button
    :class="[
      'py-2 px-4 rounded-md focus:outline-none',
      {
        'bg-primary-500 text-white': props.type === 'primary',
        'bg-primary-100 text-white': props.type === 'primary-disabled',
        'bg-secondary text-gray-700 ': props.type === 'secondary',
        'bg-danger text-white hover:bg-red-600': props.type === 'danger',
        'bg-green-500 text-white hover:bg-green-600': props.type === 'success',
      }
    ]"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
// import { defineEmits } from 'vue';

const props = defineProps<{
  type: 'primary' | 'secondary' | 'danger' | 'success' | 'primary-disabled' ;
}>();

const emits = defineEmits(['click']);

const handleClick = () => {
  emits('click');
};
</script>