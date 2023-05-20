<template>
  <BaseBox variant="tertiary" role="button" @click="openDialog">
    <figure>
      <BaseLabel v-if="element.hasOwnProperty('sale') === true" :element="element" />
      <BaseHeading :title="element.name" tag="figcaption" />
      <div class="flex flex-col justify-center items-center py-2 w-full gap-3 text-center">
        <img :src="element.photo" :alt="element.name" height="200" />
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
  </BaseBox>

    <EditWishItem v-if="showModal" :wishId="element.id">
      <div class="flex gap-1 p-2.7 self-end items-start border-t-1 border-neutral-200 h-fit">
        <BaseButton variant="primary" title="Zapisz" type="button" is="button" />

        <BaseButton variant="pure" title="Anuluj" type="button" is="button" @click="closeModal" />
      </div>
    </EditWishItem>
</template>

<script setup>
import BaseLabel from '../UI/BaseLabel.vue'
import BaseBox from '../UI/BaseBox.vue'
import BaseHeading from '../UI/BaseHeading.vue'
import BaseButton from '../UI/BaseButton.vue'
import { ref, defineAsyncComponent } from 'vue'

const EditWishItem = defineAsyncComponent(() => import('./EditWishItem.vue'))

defineProps({
  element: {
    type: Object,
    required: true
  }
})

let showModal = ref(false)
const openDialog = () => {
  showModal.value = !showModal.value
  document.documentElement.classList.toggle("overflow-hidden");
}

const closeModal = () => {
  showModal.value = !showModal.value
  document.documentElement.classList.toggle("overflow-hidden");
}
</script>
