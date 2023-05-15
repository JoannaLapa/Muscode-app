<template>
  <form @submit.prevent="updatewishItem">
    <fieldset>
      <div>
        <legend>
          {{ `Edycja produktu: ' ${wish.name}` }}
        </legend>
      </div>
      <div>
        <label for="wish-name">Nazwa produktu</label>
        <input
          id="wish-name"
          type="text"
          v-model="state.newWishName"
          class="mt-4 h-12 w-full cursor-pointer rounded-md bg-neutral-200 p-4 text-xxs text-neutral-500 sm:p-6"
          :class="v$.newWishName.$error ? 'border-2 border-primary-300' : ''"
          @blur="v$.newWishName.$touch"
        />
      </div>

      <div v-if="v$.newWishName.$error">
        <p class="text-xs text-primary-300">Can't be empty</p>
      </div>

      <div>
        <label for="wish-price">Cena</label>
        <input
          id="wish-price"
          type="number"
          v-model="state.newWishPrice"
          :class="v$.newWishPrice.$error ? 'border-2 border-primary-300' : ''"
          @blur="v$.newWishPrice.$touch"
        />
      </div>

      <div v-if="v$.newWishPrice.$error">
        <p class="text-xs text-primary-300">Can't be empty</p>
      </div>

      <div>
        <label for="wish-sale">Promocyjna cena</label>
        <input
          id="wish-sale"
          type="number"
          v-model="state.newWishSale"
          :class="v$.newWishSale.$error ? 'border-2 border-primary-300' : ''"
          @blur="v$.newWishSale.$touch"
        />
      </div>

      <div v-if="v$.newWishSale.$error">
        <p class="text-xs text-primary-300">Can't be empty</p>
      </div>

      <div>
        <div class="relative inline-flex self-center">
          <label for="currency">Waluta</label>
          <select
            id="currency"
            class="text-2xl font-bold rounded border-2 border-purple-700 text-gray-600 h-14 w-60 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
          >
            <option>$</option>
            <option>PLN</option>
            <option>EUR</option>
          </select>
        </div>
      </div>
    </fieldset>

    <div class="flex flex-col gap-4 sm:flex-row-reverse">
      <BaseButton
        variant="primary"
        title="Zapisz"
        type="button"
      />

      <BaseButton variant="pure" title="Anuluj" is="router-link" />
    </div>
  </form>
</template>
<script setup>
//install vuelidate
import { useWishesStore } from '../stores/wishes.js'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { reactive } from 'vue'
import { useRoute } from 'vue-router'
import BaseButton from '../components/basicComponents/UI/BaseButton.vue'

const wishStore = useWishesStore()
const wishes = reactive(wishStore.wishes)

const route = useRoute()
const index = route.params.id

const state = reactive({
  newWishName: wishes.value[index].name,
  newWishPrice: wishes.value[index].price,
  newWishSale: wishes.value[index].sale
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
