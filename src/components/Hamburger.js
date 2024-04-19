import { ReactComponent as Ham } from '../assets/icon _hamburger menu.svg'
import { useNavContext } from '../providers/NavProvider'

const Hamburger = () => {

  const { burgerToggle, setBurgerToggle } = useNavContext()

  const handleClick = () => {
    setBurgerToggle(!burgerToggle)
  }

  return (
    <Ham
      aria-label="On Click"
      onClick={handleClick}
      className="hamburger" />
  )
}

export default Hamburger
