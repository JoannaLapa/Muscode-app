<template>
  <div class="text-xxs text-danger-200 text-end">
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
