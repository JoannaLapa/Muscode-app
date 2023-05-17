<template>
  <main>
    <div class="p-4">
      <h1 class="text-primary-200 font-bold text-md text-center p-4">Muscode App</h1>
      <div class="grid grid-cols-1 gap-4">
        <TodoList />
        <WishTable :tableElements="wishes" :keys="wishKeys" />
        <ul>
          <li v-for="wish in wishes" :key="wish.id">
            <WishItem :element="wish" />
          </li>
        </ul>
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
