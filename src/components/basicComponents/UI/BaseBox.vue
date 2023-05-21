<template>
  <div
    class="border-neutral-200 rounded-lg shadow-3xl p-1 sm:px-5 sm:pt-5 h-full bg-white"
    :class="{
      'max-w-96 md:min-h-79': variant === 'primary',
      'max-w-96 pb-3, min-h-79 lg:max-w-full': variant === 'secondary',
      'max-w-96 min-h-82.5 overflow-hidden relative hover:scale-105 transition duration-300': variant === 'tertiary'
    }"
  >
    <slot />
  </div>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: '',
    validation: (variant) => ['primary', 'secondary'].includes(variant)
  }
})
</script>
