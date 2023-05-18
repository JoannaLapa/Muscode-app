<template>
  <section class="min-w-fit">
    <BaseBox variant="primary">
      <div class="flex justify-between">
        <BaseHeading title="Lista todo" tag="h2"/>
        <BaseHeading :title="`Wykonane: ${counter}`" tag="h3"/>
      </div>
      <ul class="pt-[10px] text-xs divide-y-[1px] flex flex-col justify-center" @click="v$.$reset()">
        <TodoItem
          v-for="{ id, description } in todos"
          :key="id"
          :id="id"
          :description="description"
        />
        <li class="px-1.5 py-2 sm:px-2.5 sm:py-1">
          <form @submit.prevent="submitForm" class="flex gap-1.5">
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
import BaseHeading from '../UI/BaseHeading.vue'
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
