<template>
  <BaseBox variant="tertiary" role="button" @click="toggleModal">
    <figure>
      <BaseLabel v-if="element.hasOwnProperty('sale') === true" :element="element" />

      <BaseHeading :title="element.name" tag="figcaption" />

      <div class="flex flex-col justify-center items-center py-2 w-full gap-3 text-center">
        <img
          :src="element.photoBase"
          :alt="element.name"
          :height="element.photoBaseHeight"
          :width="element.photoBaseWidth"
        />

        <div>
          <p class="text-success-100 font-bold text-base" v-if="element.sale">
            {{ `${element.sale} ${element.currency}` }}
          </p>

          <p
            :class="
              element.hasOwnProperty('sale') === true
                ? 'underline-offset-middle underline align-text-bottom text-sm p-0.5'
                : 'text-success-100 font-bold'
            "
          >
            {{ `${element.price} ${element.currency}` }}
          </p>
        </div>
      </div>
    </figure>
  </BaseBox>

  <EditWishItem v-if="showModal" :wishId="element.id" @toggleModal="toggleModal" />
</template>

<script setup>
import BaseLabel from '../UI/BaseLabel.vue';
import BaseBox from '../UI/BaseBox.vue';
import BaseHeading from '../UI/BaseHeading.vue';
import { ref, defineAsyncComponent } from 'vue';

/*
async component
*/

const EditWishItem = defineAsyncComponent(() => import('./EditWishItem.vue'));

/*
props
*/

defineProps({
  element: {
    type: Object,
    required: true
  }
});

/*
showModal logic
*/

const showModal = ref(false);
const toggleModal = () => {
  document.documentElement.classList.toggle('overflow-hidden');
  showModal.value = !showModal.value;
};
</script>
