import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'About Cart',
  description: 'Description about Cart app',
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return <main>{children}</main>;
}
