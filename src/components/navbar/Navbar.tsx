import Link from 'next/link';
import { NavLinks } from './NavLinks';

export const Navbar = () => {
  return (
    <header className='navbar-section fixed w-full px-[4%] xl:px-[2%] bg-backgroundMain text-primaryText'>
      <nav className='navbar-section__content py-5 flex items-center justify-between'>
        <h1 className='navbar-section__logo lg:text-2xl'>Cart</h1>
        <NavLinks />
        <div className='navbar-section__login-signup flex gap-2 items-center'>
          <Link className='navbar-section__login opacity-50 hover:opacity-100 transition-opacity ease-in-out duraiton-200' href={'/login'}>Login</Link>
          <span>|</span>
          <Link className='navbar-section__register opacity-50 hover:opacity-100 transition-opacity ease-in-out duraiton-200' href={'/register'}>Register</Link>
        </div>
      </nav>
    </header>
  );
};
