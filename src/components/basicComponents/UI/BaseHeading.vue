<template>
  <component :is="tag" class="font-bold p-2 text-left sm:p-0">{{ title }}</component>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  tag: {
    type: String,
    default: 'h2',
    validation: (tag) => ['h2', 'h3', 'caption', 'figcaption'].includes(tag)
  }
})
</script>
