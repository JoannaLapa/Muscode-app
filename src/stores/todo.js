import { defineStore } from 'pinia';

export const useTodoStore = defineStore('todo', {
  state: () => {
    return {
      todos: [
        {
          id: 0,
          description: 'Typescript daily learning 30min',
          checked: false
        },

        {
          id: 1,
          description: 'React daily learning 30min',
          checked: false
        },

        {
          id: 2,
          description: 'Add remove todos func.',
          checked: false
        },

        {
          id: 3,
          description: 'Add Cypress Tests',
          checked: false
        },

        {
          id: 4,
          description: 'Transport website project',
          checked: false
        }
      ],

      checkboxValues: []
    };
  },

  getters: {
    getTodos() {
      return this.todos;
    },

    getCheckboxValues() {
      return this.checkboxValues;
    },

    countedChecks() {
      return this.checkboxValues.filter((item) => item === true).length;
    },

    includesValue() {
      return (id) => this.checkboxValues.includes(id);
    }
  },

  actions: {
    addTodo(description) {
      const id = this.todos.length;
      return this.todos.push({ id, description, checked: false });
    },

    setCheckboxValues() {
      return (this.checkboxValues = this.todos.map((item) => item.checked));
    },

    toggleCheckboxValue(id, value) {
      return (this.checkboxValues[id] = value);
    }
  }
});
