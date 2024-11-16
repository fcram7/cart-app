import { create } from 'zustand';

interface checkout {
  transactionId: string;
  itemTotal: number;
  checkoutTotal: number;
}

interface checkoutAction {
  setTransactionId: (checkout: checkout['transactionId']) => void;
  setItemTotal: (checkout: checkout['itemTotal']) => void;
  setCheckoutTotal: (checkout: checkout['checkoutTotal']) => void;
}

const initialState: checkout = {
  transactionId: '',
  itemTotal: 0,
  checkoutTotal: 0,
};

export const checkoutStore = create<checkout & checkoutAction>((set) => ({
  ...initialState,
  setTransactionId: (transactionId) =>
    set(() => ({ transactionId: transactionId })),
  setItemTotal: (itemTotal) => set(() => ({ itemTotal: itemTotal })),
  setCheckoutTotal: (checkoutTotal) => set(() => ({ checkoutTotal: checkoutTotal })),
}));
