<template>
  <div class="text-[7px]] text-danger-200 text-end w-full">
    <p>{{ title }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'Pole nie może być puste'
  }
})
</script>
