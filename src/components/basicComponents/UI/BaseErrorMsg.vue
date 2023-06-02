<template>
    <p class="text-xxxs text-danger-200 text-end -m-1">{{ title }}</p>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'Pole nie może być puste'
  }
});
</script>
