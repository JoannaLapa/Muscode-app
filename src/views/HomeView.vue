<template>
  <main>
    <h1>Muscode App</h1>
    <TodoList />
    <WishTable :tableElements="wishes" :keys="wishKeys" />
    <ul>
      <li v-for="wish in wishes" :key="wish.id">
      <WishItem :element="wish"/>
    </li>
    </ul>
  </main>
</template>

<script setup>
import TodoList from '../components/basicComponents//todo/TodoList.vue'
import WishTable from '../components/basicComponents/wish/WishTable.vue'
import WishItem from '../components/basicComponents/wish/WishItem.vue'
import { useWishesStore } from '../stores/wishes.js'

const wishStore = useWishesStore()
const wishes = wishStore.wishes;
const wishKeys = wishStore.wishKeys;
</script>
