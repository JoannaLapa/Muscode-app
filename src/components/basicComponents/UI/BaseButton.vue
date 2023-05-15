<template>
  <component :is="tag">{{ title }}</component>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  variant: {
    type: String,
    required: true,
    validation: (variant) => ['primary', 'pure'].includes(variant)
  },
  tag: {
    type: String,
    default: 'button',
    validation: (tag) => ['button', 'router-link'].includes(tag)
  }
})
</script>
