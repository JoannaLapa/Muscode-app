<template>
  <div class="border-b-1 border-neutral-200 px-1 pb-0.5">
    <div class="flex flex-col gap-0.5">
      <label :for="element" class="font-normal text-xs">{{ title }}</label>
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  element: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})
</script>
