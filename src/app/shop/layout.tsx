import { ReactNode } from 'react';

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