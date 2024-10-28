import { ReactNode } from 'react';

export default function AuthLayout({
  children
}: {
  children: ReactNode
}) {
  return (
    <div className="flex item-center justify-center h-full lg:py-32">
      {children}
    </div>
  )
}