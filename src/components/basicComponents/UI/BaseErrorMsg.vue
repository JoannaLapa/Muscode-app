<template>
  <div class="text-xxxs text-danger-200 text-end -m-1">
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
