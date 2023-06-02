<template>
  <h2 class="font-bold p-2 text-left sm:p-0">
    {{ title }}
  </h2>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
});
</script>
