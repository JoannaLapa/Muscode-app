import { defineStore } from 'pinia'

export const useWishesStore = defineStore('wishes', {
  state: () => {
    return {
      wishes: [
        {
          id: 0,
          name: 'iPhone 6s Plus 16GB',
          price: 1000,
          sale: 649,
          currency: '$',
          photoBase: '/assets/img1_133_200.jpg',
          photoBaseWidth: 133,
          photoBaseHeight: 200,
          photoEdit: '/assets/img1_200_300.jpg',
          photoEditWidth: 200,
          photoEditHeight: 300
        },

        {
          id: 1,
          name: 'iPad Pro 32GB',
          price: 800,
          sale: 600,
          currency: '$',
          photoBase: '/assets/img2_169_200.jpg',
          photoBaseWidth: 169,
          photoBaseHeight: 200,
          photoEdit: '/assets/img2_200_237.jpg',
          photoEditWidth: 200,
          photoEditHeight: 237
        },

        {
          id: 2,
          name: 'MacBook Pro',
          price: 8000,
          currency: 'PLN',
          photoBase: '/assets/img3_343_200.jpg',
          photoBaseWidth: 343,
          photoBaseHeight: 200,
          photoEdit: '/assets/img3_343_200.jpg',
          photoEditWidth: 343,
          photoEditHeight: 200
        }
      ],

      wishKeys: ['#', 'nazwa', 'promocyjna cena', 'cena', 'waluta']
    }
  },

  actions: {
    updateWishItem(id, name, price, sale, currency) {
      const wish = this.wishes.find((wish) => wish.id === id)
      wish.name = name
      wish.price = price
      wish.sale = sale
      wish.currency = currency
      if (wish.sale === undefined || wish.sale === '') {
        delete wish.sale
      }
      return wish
    },

    toggleShowModal() {
      return (this.showModal = !this.showModal)
    }
  },

  getters: {
    getWishes() {
      return this.wishes
    },

    getWishById(state) {
      const wishes = state.wishes
      return (id) => {
        const wish = wishes.find((wish) => wish.id === id)
        return wish
      }
    },

    getSalePercent: (state) => {
      return (id) => {
        const sale = (state.wishes[id].sale / state.wishes[id].price) * 100
        return sale
      }
    }
  }
})
