import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { Product } from './typings/productTyping'

interface CarteState {
  cart: Product[]
  AddToCart: (product: Product) => void
  removeFromCart: (product: Product) => void
}

export const useCarteStore = create<CarteState>()(
  devtools(
    persist(
      (set, get) => ({
        cart: [],
        AddToCart: (product) => {
          set((state) => ({
            cart: [...state.cart, product],
          }))
        },
        removeFromCart: (product) => {
          const productToRemove = get().cart.findIndex(
            (p) => p.meta.sku === product.meta.sku,
          )
          
          set((state) => {
            const newCart = [...state.cart]
        
            newCart.splice(productToRemove, 1)
        
            return { cart: newCart }
          })
        },
      }),
      { name: 'Shoping-cart-storage' },
    ),
  ),
)
