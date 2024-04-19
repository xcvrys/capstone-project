import { useNavContext } from '../../providers/NavProvider'
import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const LinkList = () => {

  const { links } = useNavContext()

  const { hash, key } = useLocation()

  useEffect(() => {
    const anch = hash.slice(1); // Remove the '#' character from the hash
    if (anch) {
      const element = document.getElementById(anch);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash, key])

  return (
    <>
      {links.map(link => {
        return (
          <li key={link.name}>
            <Link
              data-testid={link.name}
              className="leading"
              to={link.href}
              alt={`${link.name} link`}
              role="button">{link.name}</Link>
          </li>
        )
      })}
    </>
  )
}

export default LinkList
