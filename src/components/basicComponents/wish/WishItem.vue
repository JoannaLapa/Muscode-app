<template>
  <BaseBox variant="tertiary">
    <router-link :to="`/edit/${element.id}`">
      <figure>
        <BaseLabel v-if="element.hasOwnProperty('sale') === true" :element="element" />
        <BaseHeading :title="element.name" tag="figcaption" />
        <div class="flex flex-col justify-center items-center py-2 w-full gap-3 text-center">
          <img :src="element.photo" :alt="name" height="200" />
          <div>
            <p class="text-success-100 font-bold" v-if="element.sale">
              {{ `${element.sale} ${element.currency}` }}
            </p>
            <p
              :class="
                element.hasOwnProperty('sale') === true
                  ? 'underline-offset-middle underline align-text-bottom text-xs p-0.5'
                  : 'text-success-100 font-bold'
              "
            >
              {{ `${element.price} ${element.currency}` }}
            </p>
          </div>
        </div>
      </figure>
    </router-link>
  </BaseBox>
</template>

<script setup>
import BaseLabel from '../UI/BaseLabel.vue'
import BaseBox from '../UI/BaseBox.vue'
import BaseHeading from '../UI/BaseHeading.vue'

defineProps({
  element: {
    type: Object,
    required: true
  }
})
</script>
