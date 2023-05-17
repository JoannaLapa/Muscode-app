<template>
  <div
    class="border-neutral-200 rounded-lg shadow-3xl p-1 sm:px-5 sm:pt-5"
    :class="{
      'max-w-96 md:min-h-[316px]': variant === 'primary',
      'max-w-96 pb-3, min-h-[316px] lg:max-w-full': variant === 'secondary',
      'max-w-96 min-h-[330px] overflow-hidden relative': variant === 'tertiary'
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
