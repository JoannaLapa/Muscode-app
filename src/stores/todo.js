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
    getTodos() {
      return this.todos
    },

    getCheckboxValues() {
      return this.checkboxValues
    },

    countedChecks() {
      return this.checkboxValues.filter((item) => item === true).length
    },

    includesValue() {
      return (id) => this.checkboxValues.includes(id)
    }
  },

  actions: {
    addTodo(description) {
      const id = this.todos.length
      return this.todos.push({ id: id, description: description, checked: false })
    },

    setCheckboxValues() {
      return (this.checkboxValues = this.todos.map((item) => item.checked))
    },

    toggleCheckboxValue(id, value) {
      console.log(this.checkboxValues)
      return (this.checkboxValues[id] = value)
    }
  }
})
