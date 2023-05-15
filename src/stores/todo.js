import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
  state: () => {
    return {
      todos: [
        {
          id: 0,
          description: 'Lorem ipsum dolor sit amet, consectetur'
        },
        {
          id: 1,
          description: 'Sed do eiusmod tempor incididunt'
        },
        {
          id: 2,
          description: 'Labore et dolore magna aliqua'
        },
        {
          id: 3,
          description: 'Sed ut perspiciatis unde omnis iste natus'
        },
        {
          id: 4,
          description: 'Minima veniam, quis nostrum exercitationem'
        },
      ],

      actions: {
      },

      getters: {
      }
    }
  }
})
