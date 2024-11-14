import { create } from 'zustand';

interface cartObject {
  id: number;
  title: string;
  image: string;
  price: number;
  itemAmount: number;
  itemTotal: number;
}

interface cart {
  total: number;
  cartItem: cartObject[];
}

interface cartAction {
  // setItemAmount: (cart: cart['itemAmount']) => void;
  setTotal: (cart: cart['total']) => void;
  reduceTotal: (cart: cart['total']) => void;
  setCartItem: (cart: cartObject) => void;
  removeCartItem: (cart: cartObject['id']) => void;
  reset: () => void;
}

const initialState: cart = {
  // itemAmount: 0,
  total: 0,
  cartItem: []
}

export const cartStore = create<cart & cartAction>((set) => ({
  ...initialState,
  // setItemAmount: (itemAmount) => set(() => ({ itemAmount: itemAmount })),
  setTotal: (total) => set((state) => ({ total: state.total + total })),
  setCartItem: (newCartItem) => set((state) => ({
    cartItem: [
      ...state.cartItem,
      newCartItem
    ]
  })),
  removeCartItem: (id: number) => set((state) => ({
    cartItem: [
      ...state.cartItem.filter(item => item.id !== id)
    ]
  })),
  reduceTotal: (total) => set((state) => ({ total: Math.max((state.total -= total), 0) })),
  reset: () => {
    set(initialState)
  }
}))