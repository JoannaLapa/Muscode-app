<template>
  <li class="px-1 py-2 sm:p-2.5">
    <label :for="id" class="flex items-center gap-2 font-medium min-h-2.5">
      <CheckIcon :checked="checkboxValue" />
      {{ description }}
    </label>
    <input
      class="sr-only"
      type="checkbox"
      :id="id"
      :value="id"
      v-model="checkboxValue"
      @change="addValue"
    />
  </li>
</template>

<script setup>
import CheckIcon from '../icons/CheckIcon.vue'
import { useTodoStore } from '../../../stores/todo.js'
import { ref } from 'vue'

const todoStore = useTodoStore()

const checkboxValue = ref(false)
const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})

const addValue = () => {
  todoStore.toggleCheckboxValue(props.id, checkboxValue.value)
}
</script>
