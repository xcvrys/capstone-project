import NavProvider from '../providers/NavProvider'
import TNav from './nav/TNav'
import Hamburger from './Hamburger'
import SNav from './nav/SNav'

const Header = () => {
  return (
    <header>
      <section className="row justify-content-center">
        <div className="col-8">
          <div className="hFrame auto-space center">
            <img
              data-testid="logo"
              src={require('../assets/Logo x.png')}
              alt="Lemon logo"></img>
            <nav className="hFrame">
              <NavProvider>
                <TNav />
                <SNav />
                <Hamburger />
              </NavProvider>
            </nav>
          </div>
        </div>
      </section>
    </header>
  )
}

export default Header
