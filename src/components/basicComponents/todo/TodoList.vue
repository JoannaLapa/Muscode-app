<template>
  <section>
    <BaseBox variant="primary">
      <div class="flex justify-between font-bold p-2 sm:p-0">
        <h2>Lista todo</h2>
        <h3>Wykonane: {{ counter }}</h3>
      </div>
      <ul class="py-2.5 text-xs divide-y-2" @click="v$.$reset()">
        <TodoItem
          v-for="{ id, description } in todos"
          :key="id"
          :id="id"
          :description="description"
        />
        <li class="px-1 py-2 sm:px-2.5 sm:py-1">
          <form @submit.prevent="submitForm" class="flex gap-1">
            <label
              for="todo"
              class="text-lg font-bold text-neutral-200 px-1"
              aria-label="Dodaj nowy element checklisty"
              >+</label
            >
            <input
              type="text"
              name="nowe todo"
              v-model="state.newTodo"
              id="todo"
              placeholder="Dodaj nowy element checklisty"
              class="w-full text-xs font-bold indent-0.5"
              :class="v$.newTodo.$error ? 'border-2 border-danger-200' : ''"
              @blur="v$.newTodo.$touch"
              @keyup.enter="addTodo"
            />
          </form>
          <div v-if="v$.newTodo.$error">
            <p class="text-xs text-danger-200">Can't be empty</p>
          </div>
        </li>
      </ul>
    </BaseBox>
  </section>
</template>

<script setup>
import TodoItem from './TodoItem.vue'
import BaseBox from '../UI/BaseBox.vue'
import { useTodoStore } from '../../../stores/todo.js'
import { computed, reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'

const todoStore = useTodoStore()
const todos = todoStore.todos
const counter = computed(() => todoStore.countedChecks)

const state = reactive({
  newTodo: ''
})

const rules = {
  newTodo: {
    required,
    $lazy: true
  }
}

const v$ = useVuelidate(rules, state)

const addTodo = async () => {
  const isFormCorrect = await v$.value.$validate();
  if (!isFormCorrect) return;
  todoStore.addTodo(state.newTodo)
  state.newTodo = ''
  
}
</script>
