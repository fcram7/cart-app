import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Cart | Checkout',
  description: 'Your checkout page for your items'
}

export default function CheckoutLayout({
  children
} : {
  children: ReactNode
}) {
  return (
    <div>
      {children}
    </div>
  )
}