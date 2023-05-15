<template>
  <section>
    <BaseBox>
      <div class="flex justify-between font-bold p-2 sm:p-0">
        <h2>Lista todo</h2>
        <h3>Wykonane: {{}}</h3>
      </div>
      <ul class="py-2.5 text-xs divide-y-2">
        <TodoItem
          v-for="{ id, description } in todos"
          :key="id"
          :id="id"
          :description="description"
        />
        <li class="px-1 py-2 sm:px-2.5 sm:py-1">
          <form @submit.prevent="submitForm" class="flex gap-1">
            <label for="todo" class="text-lg font-bold text-neutral-200 px-1" aria-label="Dodaj nowy element checklisty">+</label>
            <input
              type="text"
              name="nowe todo"
              id="todo"
              placeholder="Dodaj nowy element checklisty"
              class="w-full text-xs font-bold indent-0.5"
            />
          </form>
        </li>
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
