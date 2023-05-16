import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
  state: () => {
    return {
      todos: [
        {
          id: 0,
          description: 'Lorem ipsum dolor sit amet, consectetur',
          checked: false
        },
        {
          id: 1,
          description: 'Sed do eiusmod tempor incididunt',
          checked: false
        },
        {
          id: 2,
          description: 'Labore et dolore magna aliqua',
          checked: false
        },
        {
          id: 3,
          description: 'Sed ut perspiciatis unde omnis iste natus',
          checked: false
        },
        {
          id: 4,
          description: 'Minima veniam, quis nostrum exercitationem',
          checked: false
        }
      ],

      checkboxValues: []
    }
  },

  getters: {
    countedChecks() {
      return this.checkboxValues.filter((check) => check === true).length
    }
  },

  actions: {
    addCheckboxValues() {
      this.checkboxValues = this.todos.map((item) => item.checked)
      return this.checkboxValues
    },
    addTodo(description) {
      const id = this.todos.length - 1
      return this.todos.push({id: id,
        description: description,
        checked: false})
    }
  }
})
