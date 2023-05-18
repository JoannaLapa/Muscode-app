<template>
  <main>
    <div class="p-4 md:max-w-[814px] lg:max-w-[1180px] xl:w-[1180px] xl:p-0 m-auto">
      <h1 class="text-primary-200 font-medium text-xl sm:text-3xl text-center p-4 md:pt-10 md:pb-6">Muscode App</h1>
      <div class="grid auto-cols-auto gap-[14px] sm:grid-cols-2 md:py-4 xl:grid-cols-3 justify-center w-full">
        <TodoList />
        <WishTable :tableElements="wishes" :keys="wishKeys" />

            <WishItem :element="wish" v-for="wish in wishes" :key="wish.id"/>

      </div>
    </div>
  </main>
</template>

<script setup>
import TodoList from '../components/basicComponents//todo/TodoList.vue'
import WishTable from '../components/basicComponents/wish/WishTable.vue'
import WishItem from '../components/basicComponents/wish/WishItem.vue'
import { useWishesStore } from '../stores/wishes.js'

const wishStore = useWishesStore()
const wishes = wishStore.wishes
const wishKeys = wishStore.wishKeys
</script>
