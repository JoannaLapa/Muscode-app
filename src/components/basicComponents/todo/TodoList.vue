<template>
  <section class="min-w-fit">
    <BaseBox variant="primary" @click="v$.$reset()">
      <div class="flex justify-between">
        <BaseHeading title="Lista todo" />

        <h3 class="font-normal p-2 sm:p-0">{{ `Wykonane: ${counter}` }}</h3>
      </div>

      <ul
        class="pt-2.5 mb-2.5 text-sm divide-y-1.5 divide-neutral-200 flex flex-col justify-center border-b-1.5 border-neutral-200"
      >
        <TodoItem
          v-for="{ id, description } in todos"
          :key="id"
          :id="id"
          :description="description"
          :checkedbox-values="checkedboxValues"
        />

        <li class="px-1.5 py-2 sm:px-2.5 sm:py-1">
          <form @submit.prevent="addTodo" class="flex gap-1.5">
            <label
              for="todo"
              class="text-lg font-bold text-neutral-200 px-1"
              aria-label="Dodaj nowy element checklisty"
              >+</label
            >

            <input
              type="text"
              maxlength="20"
              name="nowe todo"
              v-model="v$.newTodo.$model"
              id="todo"
              placeholder="Dodaj nowy element checklisty"
              class="w-full text-sm font-bold indent-0.5 focus:outline-none focus:border-success-100 focus:border-2"
              :class="
                v$.newTodo.$error ? 'focus:border-2 focus:border-danger-200 outline-none' : ''
              "
              @keydown.enter="addTodo"
            />
          </form>

          <BaseErrorMsg v-for="error of v$.$errors" :key="error.$uid" :title="error.$message" />
        </li>
      </ul>
    </BaseBox>
  </section>
</template>

<script setup>
import TodoItem from './TodoItem.vue';
import BaseBox from '../UI/BaseBox.vue';
import BaseErrorMsg from '../UI/BaseErrorMsg.vue';
import BaseHeading from '../UI/BaseHeading.vue';
import { useTodoStore } from '../../../stores/todo.js';
import { ref, reactive, computed } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, helpers } from '@vuelidate/validators';

const todoStore = useTodoStore();
const todos = computed(() => todoStore.getTodos);
const counter = computed(() => todoStore.countedChecks);
const checkedboxValues = ref([]);

const state = reactive({
  newTodo: ''
});

/* validation */

const rules = {
  newTodo: {
    required: helpers.withMessage('Pole nie może być puste', required),
  }
};

const v$ = useVuelidate(rules, state);

/* addTodo */

const addTodo = async (e) => {
  const isFormCorrect = await v$.value.$validate();
  if (!isFormCorrect) return;
  if (state.newTodo) {
    todoStore.addTodo(state.newTodo);
  }
  state.newTodo = '';
  v$.value.$reset()
  console.log('wywołuję funkcję');
};
</script>
