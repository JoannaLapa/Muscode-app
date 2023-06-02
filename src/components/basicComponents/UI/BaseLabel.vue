<template>
  <div class="absolute w-28.5 h-22 top-0 right-0">
    <div
      class="relative bg-black text-white text-center font-medium text-xs rotate-45 left-1 top-6 w-35 pb-0.5"
    >
      <p>{{ sale }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

/*
props
*/

const props = defineProps({
  element: {
    type: Object,
    required: true
  }
});

/*
sale calculation
*/

const sale = computed(() => {
  if (!props.element.sale) return;
  const countedSale = Math.round(100 - (props.element.sale / props.element.price) * 100);
  return `-${countedSale}%`;
});
</script>
