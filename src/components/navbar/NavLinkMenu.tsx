import Link from 'next/link';

interface navLinkMenu {
  href: string;
  menu: string;
}

export const NavLinkMenu = ({ href, menu }: navLinkMenu) => {
  return (
    <li className='nav-link-menu menu'>
      <Link href={href} className='xl:text-lg'>{menu}</Link>
    </li>
  );
};
