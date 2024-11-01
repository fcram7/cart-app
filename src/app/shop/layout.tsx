import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Cart | Shop',
  description: 'Cart shop page'
}

export default function ShopLayout({
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