<template>
  <Teleport to="body">
    <div
      role="dialog"
      aria-modal="true"
      aria-hidden="true"
      aria-labelledby="title"
      class="fixed top-0 left-0 z-1 h-full w-full bg-neutral-300"
    >
      <div class="bg-white relative w-31.3 left-68.7 h-full">
        <form @submit.prevent="updatewishItem" class="grid grid-cols-1 h-full">
          <fieldset class="flex flex-col items-center gap-5">
            <div class="font-medium text-xl w-full border-b-4 border-success-200">
              <legend id="title" autofocus tabindex="0" class="pt-4.3 pb-3 pl-2.7">
                Edycja produktu:

                <span class="">{{ wish.name }}</span>
              </legend>
            </div>

            <div class="rounded-full overflow-hidden shadow-3xl w-50 h-50 mt-2.5">
              <img :src="wish.photo" :alt="wish.name" class="w-50 h-50" />
            </div>

            <div class="w-full px-2.7 text-xxs flex flex-col gap-3.7">
              <BaseForm :element="wish.name" title="Nazwa produktu">
                <input
                  :id="wish.name"
                  type="text"
                  v-model="state.newWishName"
                  :class="v$.newWishName.$error ? 'border-2 border-primary-300' : ''"
                  @blur="v$.newWishName.$touch"
                  class="font-medium text-xs"
                />
                <BaseErrorMsg v-if="v$.newWishName.$error" />
              </BaseForm>

              <BaseForm :element="wish.price" title="Cena">
                <input
                  :id="wish.price"
                  type="number"
                  v-model="state.newWishPrice"
                  :class="v$.newWishPrice.$error ? 'border-2 border-primary-300' : ''"
                  @blur="v$.newWishPrice.$touch"
                  class="font-medium text-xs"
                />
                <BaseErrorMsg v-if="v$.newWishPrice.$error" />
              </BaseForm>

              <BaseForm :element="wish.sale" title="Promocyjna cena">
                <input
                  :id="wish.sale"
                  type="number"
                  v-model="state.newWishSale"
                  :class="v$.newWishSale.$error ? 'border-2 border-primary-300' : ''"
                  @blur="v$.newWishSale.$touch"
                  class="font-medium text-xs"
                />
                <BaseErrorMsg v-if="v$.newWishSale.$error" />
              </BaseForm>

              <BaseForm :element="currency" title="Waluta" class="grid grid-cols-2">
              
                <select id="currency" class="bg-white focus:outline-none appearance-none pt-0.5">
                  <option>$</option>

                  <option>PLN</option>

                  <option>EUR</option>
                </select>
                <template #arrow>
                  <ArrowDown />
                </template>
                
              </BaseForm>
            </div>
          </fieldset>
          <slot />
        </form>
      </div>
    </div>
  </Teleport>
</template>
<script setup>
import BaseForm from '../UI/BaseForm.vue'
import BaseErrorMsg from '../UI/BaseErrorMsg.vue'
import ArrowDown from '../icons/ArrowDown.vue'
import { useWishesStore } from '../../../stores/wishes.js'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { reactive, computed } from 'vue'

const props = defineProps({
  wishId: {
    type: Number,
    required: true
  },
  showModal: {
    type: Boolean,
    default: false
  }
})
const wishStore = useWishesStore()
const wish = computed(() => wishStore.getWishById(props.wishId))
const state = reactive({
  newWishName: wish.value.name,
  newWishPrice: wish.value.price,
  newWishSale: wish.value.sale
})

const rules = {
  newWishName: {
    required,
    $lazy: true
  },
  newWishPrice: {
    required,
    $lazy: true
  },
  newWishSale: {
    required,
    $lazy: true
  }
}

const v$ = useVuelidate(rules, state)
</script>
