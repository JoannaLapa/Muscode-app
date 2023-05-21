<template>
  <Teleport to="body">
    <div
      role="dialog"
      aria-modal="true"
      aria-hidden="true"
      aria-labelledby="title"
      class="fixed top-0 left-0 z-1 h-full w-full bg-neutral-300"
    >
      <div
        class="bg-white relative w-3/4 left-1/4 sm:w-2/4 sm:left-2/4 lg:w-31.3 lg:left-68.7 h-screen"
      >
        <form @submit.prevent="updateWishItem" class="grid grid-cols-1 h-full">
          <fieldset class="flex flex-col items-center gap-5">
            <div class="font-medium text-base md:text-xl w-full border-b-4 border-success-200">
              <legend id="title" autofocus tabindex="0" class="p-2 md:pt-4.3 md:pb-3 md:pl-2.7">
                Edycja produktu:

                <span class="">{{ wish.name }}</span>
              </legend>
            </div>

            <div class="rounded-full overflow-hidden shadow-3xl w-32 h-32 lg:w-50 lg:h-50 mt-2.5">
              <img :src="wish.photo" :alt="wish.name" class="w-32 h-32 lg:w-50 lg:h-50" />
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
              </BaseForm>

              <BaseForm :element="wish.price" title="Cena">
                <input
                  :id="wish.price"
                  type="number"
                  v-model="v$.newWishPrice.$model"
                  :class="v$.newWishPrice.$error ? 'border-2 border-primary-300' : ''"
                  @blur="v$.newWishPrice.$touch"
                  class="font-medium text-xs"
                />
              </BaseForm>

              <BaseForm :element="wish.sale" title="Promocyjna cena">
                <input
                  :id="wish.sale"
                  type="number"
                  v-model="v$.newWishSale.$model"
                  :class="v$.newWishSale.$error ? 'border-2 border-primary-300' : ''"
                  @blur="v$.newWishSale.$touch"
                  class="font-medium text-xs"
                />
                <BaseErrorMsg
                  v-for="error of v$.$errors"
                  :key="error.$uid"
                  :title="error.$message"
                />
              </BaseForm>

              <BaseForm :element="currency" title="Waluta">
                <select
                  id="currency"
                  class="bg-white focus:outline-none appearance-none pt-0.5 bg-chevron bg-no-repeat bg-right-top bg-1"
                  v-model="selected"
                >
                  <option>$</option>

                  <option>PLN</option>

                  <option>EUR</option>
                </select>
              </BaseForm>
            </div>
          </fieldset>

          <div class="flex gap-1 p-4 lg:p-2.7 self-end items-start border-t-1 border-neutral-200 h-fit">
            <BaseButton
              variant="primary"
              title="Zapisz"
              type="button"
              is="button"
              @click="updateWishItem"
            />

            <BaseButton
              variant="pure"
              title="Anuluj"
              type="button"
              is="button"
              @click="handleModal"
            />
          </div>
        </form>
      </div>
    </div>
  </Teleport>
</template>
<script setup>
import BaseButton from '../UI/BaseButton.vue'
import BaseForm from '../UI/BaseForm.vue'
import BaseErrorMsg from '../UI/BaseErrorMsg.vue'
import { useWishesStore } from '../../../stores/wishes.js'
import { useVuelidate } from '@vuelidate/core'
import { required, maxValue, minValue, helpers } from '@vuelidate/validators'
import { reactive, computed, ref } from 'vue'

const props = defineProps({
  wishId: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['toggleModal'])
const handleModal = () => {
  emit('toggleModal')
}

const wishStore = useWishesStore()
const wish = computed(() => wishStore.getWishById(props.wishId))
const state = reactive({
  newWishName: wish.value.name,
  newWishPrice: wish.value.price,
  newWishSale: wish.value.sale
})

const selected = ref(wish.value.currency)

/*
validation
*/

const maxSale = ref()
maxSale.value = computed(() => state.newWishPrice - 1)
const minPrice = ref()
minPrice.value = computed(() => {
  if (state.newWishSale === undefined) return 1
  return state.newWishSale + 1
})

const rules = {
  newWishName: {
    required: helpers.withMessage('Pole nie może być puste', required),
    $lazy: true
  },

  newWishPrice: {
    required: helpers.withMessage('Pole nie może być puste i może zawierać tylko cyfry', required),
    minValueRef: helpers.withMessage(
      'Cena musi być wyższa lub równa 1 i wyższa od promocji',
      minValue(minPrice.value)
    ),
    $lazy: true
  },

  newWishSale: {
    maxValueRef: helpers.withMessage(
      'Promocja musi być niższa od ceny podstawowej',
      maxValue(maxSale.value)
    ),
    minValue: helpers.withMessage('Promocja musi być wyższa lub równa 1', minValue(1)),
    $lazy: true
  }
}

const v$ = useVuelidate(rules, state)

/*
updateWishItem
*/

async function updateWishItem() {
  const isFormCorrect = await v$.value.$validate()
  if (!isFormCorrect) return

  wishStore.updateWishItem(
    props.wishId,
    state.newWishName,
    state.newWishPrice,
    state.newWishSale,
    selected
  )
  handleModal()
}
</script>
