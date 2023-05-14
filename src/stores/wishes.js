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
          photoPng: 'src/assets/img1_170x255.png',
          photoWebp: 'src/assets/img1_170x255.webp',
          photoPngDesktop: 'src/assets/img1.png',
          photoWebpDesktop: 'src/assets/img1.webp'
        },
        {
          id: 1,
          name: 'iPad Pro 32GB',
          price: 600,
          sale: 800,
          currency: '$',
          photoPng: 'src/assets/img2_170x255.png',
          photoWebp: 'src/assets/img2_170x255.webp',
          photoPngDesktop: 'src/assets/img2.png',
          photoWebpDesktop: 'src/assets/img2.webp'
        },
        {
          id: 2,
          name: 'MacBook Pro',
          price: 8000,
          currency: 'PLN',
          photoPng: 'src/assets/img3_170x255.png',
          photoWebp: 'src/assets/img3_170x255.webp',
          photoPngDesktop: 'src/assets/img3.png',
          photoWebpDesktop: 'src/assets/img3.webp'
        }
      ],

      wishKeys: ['#', 'nazwa', 'promocyjna cena', 'cena', 'waluta'],

      actions: {
      },

      getters: {
      }
    }
  }
})
