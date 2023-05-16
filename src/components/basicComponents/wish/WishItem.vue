<template>
  <BaseBox>
    <figure>
      <BaseLabel />
      <figcaption>{{ element.name }}</figcaption>
      <img :src="element.photo" :alt="name" width="211" height="123" />
      <p v-if="element.sale">{{ element.sale }}</p>
      <p>{{ element.price }}</p>
    </figure>
  </BaseBox>
</template>

<script setup>
import BaseLabel from '../UI/BaseLabel.vue'

defineProps({
  element: {
    type: Object,
    required: true
  }
})

</script>
