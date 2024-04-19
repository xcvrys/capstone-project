import { useNavContext } from '../../providers/NavProvider'
import LinkList from './LinkList'

const SNav = () => {

  const { burgerToggle } = useNavContext()

  return burgerToggle ? (
    <ul className="vFrame auto-spread center snav">
      <LinkList />
    </ul>
  ) : <></>
}

export default SNav
