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
              </BaseForm>

              <BaseErrorMsg
                  v-for="error of v$.$errors"
                  :key="error.$uid"
                  :title="error.$message"
                />

              <BaseForm :element="currency" title="Waluta" class="grid grid-cols-2">
                <select
                  id="currency"
                  class="bg-white focus:outline-none appearance-none pt-0.5"
                  v-model="selected"
                >
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
          <div class="flex gap-1 p-2.7 self-end items-start border-t-1 border-neutral-200 h-fit">
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
import ArrowDown from '../icons/ArrowDown.vue'
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

const maxSale = computed(() => state.newWishPrice - 1)
const minPrice = computed(() => {
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
      'Cena musi być wyższa lub równa 1 i wyższa od ceny promocyjnej',
      minValue(minPrice.value)
    ),
    $lazy: true
  },

  newWishSale: {
    maxValueRef: helpers.withMessage(
      'Cena promocyjna musi być niższa od podstawowej',
      maxValue(maxSale.value)
    ),
    minValue: helpers.withMessage(
      'Cena promocyjna musi być wyższa lub równa 1', minValue(1)),
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
