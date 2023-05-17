<template>
  <div
    class="border-neutral-200 rounded-lg shadow-3xl p-1 sm:p-6 "
    :class="{'lg:max-w-96 ': variant === 'primary', 'pb-3': variant === 'secondary'}"
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
