<template>
  <div
    class="absolute w-[114px] h-[88px] top-0 right-0"
  >
    <div class="relative bg-black text-white text-center font-medium text-xxs rotate-45 left-[4px] top-[24px] w-[140px] pb-0.5">
      <p>{{ sale }}</p>
    </div>
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
  if (!props.element.sale) return
  const countedSale = Math.round(100 - (props.element.sale / props.element.price) * 100)
  return `-${countedSale}%`
})
</script>
