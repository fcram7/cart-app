import { NavLinkMenu } from './NavLinkMenu'

export const NavLinks = () => {
  return (
    <ul className='nav-links flex lg:flex-row flex-col gap-2 lg:gap-6 items-end lg:items-center justify-center'>
      <NavLinkMenu href='/' menu='Home' />
      <NavLinkMenu href='/shop' menu='Shop' />
      <NavLinkMenu href='/cart' menu='Cart' />
    </ul>
  )
}