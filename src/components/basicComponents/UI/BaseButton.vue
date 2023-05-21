<template>
  <component :is="tag" class="w-fit py-[3px] px-3 text-sm border-[1.5px]" :class="{'bg-success-100 border-success-100 text-neutral-100': variant === 'primary', 'border-neutral-200 ': variant === 'pure'}">{{ title }}</component>
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
