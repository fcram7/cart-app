import { NavLinkMenu } from './NavLinkMenu'

export const NavLinks = () => {
  return (
    <ul className='nav-links flex gap-6 items-center justify-center'>
      <NavLinkMenu href='/' menu='Home' />
      <NavLinkMenu href='#' menu='Shop' />
      <NavLinkMenu href='#' menu='About' />
    </ul>
  )
}