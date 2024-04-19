import { useState, createContext, useContext } from 'react'

const NavContext = createContext()

const NavProvider = ({ children }) => {

  const [burgerToggle, setBurgerToggle] = useState(false)
  const links = [
    {
      name: 'Home',
      href: '/'
    },
    {
      name: 'About',
      href: '/#about'
    },
    {
      name: 'Menu',
      href: '/menu'
    },
    {
      name: 'Reservations',
      href: '/reservations'
    },
    {
      name: 'Order',
      href: '/order'
    },
    {
      name: 'Login',
      href: '/login'
    }
  ]

  const props = {
    burgerToggle,
    setBurgerToggle,
    links
  }
  return (
    <NavContext.Provider value={props}>
      {children}
    </NavContext.Provider>
  )
}

export const useNavContext = () => useContext(NavContext)

export default NavProvider
