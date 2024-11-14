import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Cart | Your Cart',
  description: 'Your cart page'
}

export default function CartLayout ({
  children
}: {
  children: ReactNode
}) {
  return (
    <div>
      {children}
    </div>
  )
}