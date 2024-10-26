'use client';

import Link from 'next/link';
import { NavLinks } from './NavLinks';
import { useState } from 'react';

export const Navbar = () => {
  const [burgerClick, setBurgerClick] = useState(false);

  const handleBurgerClick = () => {
    setBurgerClick((prevBurgerClick) => !prevBurgerClick);
  };

  return (
    <header className='navbar-section fixed w-full px-[4%] xl:px-[2%] bg-backgroundMain text-primaryText z-10'>
      <nav className='navbar-section__content relative py-3 lg:py-5 flex items-center justify-between'>
        <h1 className='navbar-section__logo text-2xl'>Cart</h1>
        <div
          onClick={handleBurgerClick}
          className='cursor-pointer navbar-section__extra block lg:hidden'
        >
          <div
            className={`navbar-section__menu-line-1 w-[32px] bg-primaryText h-[1.5px] my-2 transition-transform duration-300 ease-in-out ${
              burgerClick ? 'translate-y-[5.15px] rotate-45' : ''
            }`}
          ></div>
          <div
            className={`navbar-section__menu-line-2 w-[32px] bg-primaryText h-[1.5px] my-2 transition-transform duration-300 ease-in-out ${
              burgerClick ? '-translate-y-[5.15px] -rotate-45' : ''
            }`}
          ></div>
        </div>
        <div
          className={`navbar-section__menus ${
            burgerClick ? 'translate-x-full' : 'translate-x-80'
          } transition-all ease-in-out duration-300 lg:translate-x-20 absolute top-14 bg-backgroundMain px-14 lg:px-0 py-2 lg:py-0 right-32 lg:sticky rounded-bl-3xl lg:rounded-bl-none flex lg:flex-row gap-2 flex-col items-end lg:items-center lg:justify-between lg:w-[58%]`}
        >
          <NavLinks />
          <div className='navbar-section__login-signup flex lg:flex-row flex-col gap-2 items-end lg:items-center'>
            <Link
              className='navbar-section__login opacity-100 lg:opacity-50 hover:opacity-100 transition-opacity ease-in-out duraiton-200'
              href={'/login'}
            >
              Login
            </Link>
            <span className='hidden lg:block'>|</span>
            <Link
              className='navbar-section__register opacity-100 lg:opacity-50 hover:opacity-100 transition-opacity ease-in-out duraiton-200'
              href={'/register'}
            >
              Register
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
