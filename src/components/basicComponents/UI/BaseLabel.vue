<template>
  <div class="absolute bg-black text-white text-center font-medium text-xxs rotate-45 left-[40%] top-[8%] w-[100%] pb-0.5">
    <p>{{ sale }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  element: {
    type: Object,
    required: true
  }
})

const sale = computed(() => {
  if (!props.element.sale) return;
  const countedSale = Math.round(100 - (props.element.sale / props.element.price) * 100)
  return `-${countedSale}%`;
})
</script>
