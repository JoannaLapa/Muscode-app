<template>
  <section>
    <BaseBox>
      <div>
        <h2>Lista todo</h2>
        <h3>Wykonane</h3>
      </div>
      <ul v-for="{ id, description } in todos" :key="id">
        <TodoItem :id="id" :description="description" />
        <button>+ Dodaj nowy element do listy</button>
      </ul>
    </BaseBox>
  </section>
</template>

<script setup>
import TodoItem from './TodoItem.vue'
import BaseBox from '../UI/BaseBox.vue'
import { useTodoStore } from '../../../stores/todo.js'

const todoStore = useTodoStore()
const todos = todoStore.todos
</script>
