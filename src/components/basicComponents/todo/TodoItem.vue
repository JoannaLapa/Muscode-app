<template>
  <li class="px-1 py-2 sm:p-2.5">
    <input class="sr-only" type="checkbox" id="id" value="checked" v-model="checkedboxValues[id]" />
    <label for="description" class="flex items-center gap-2 font-medium min-h-[10px]">
      <CheckIcon @click="toggleValue(id)" :checked="checked"/>
      {{ description }}</label
    >
  </li>
</template>

<script setup>
import CheckIcon from '../icons/CheckIcon.vue'
import { useTodoStore } from '../../../stores/todo.js'
import { ref, computed } from 'vue'

const todoStore = useTodoStore()
let checked = ref(false)
defineProps({
  id: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  toggleValue: {
    type: Function,
    required: true
  }
})

// const checkedboxValues = ref([false, false, false, false, false])
const checkedboxValues = computed(() => todoStore.checkboxValues)
const toggleValue = (id) => {
  checked.value = !checked.value
  checkedboxValues.value[id] = checked.value
  console.log(checkedboxValues.value[id])
  console.log(checkedboxValues.value)
}
</script>
