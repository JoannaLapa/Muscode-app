<template>
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'
import { useTodoStore } from './stores/todo.js'

const todoStore = useTodoStore()
onMounted(todoStore.addCheckboxValues)
</script>
