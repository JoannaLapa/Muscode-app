<template>
  <li class="px-1 py-2 sm:p-2.5">
    <input class="sr-only" type="checkbox" id="id" value="description" />
    <label for="description" class="flex items-center gap-1">
      <CheckIcon />
      {{ description }}</label
    >
  </li>
</template>

<script setup>
import CheckIcon from '../icons/CheckIcon.vue'

defineProps({
  id: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>
