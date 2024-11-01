import Link from 'next/link';
import { ReactNode } from 'react';

interface socialsLink {
  children: ReactNode;
  href: string;
}

export const SocialsLink = ({ children, href }: socialsLink) => {
  return (
    <Link href={href} target='_blank'>
      {children}
    </Link>
  );
};
