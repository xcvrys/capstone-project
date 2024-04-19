import iconLogo from '../assets/iconLogo.png'

const Footer = () => {
  return (
    <footer>
      <div className="row justify-content-center">
        <div className="col-8">
          <article className="hFrameWrap auto-spread flx-top">
            <div>
              <img
                src={iconLogo}
                alt="footer logo" />
            </div>
            <section className="vFrame">
              <ul>Navigation
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/home">About</a>
                </li>
                <li>
                  <a href="/menu">Menu</a>
                </li>
                <li>
                  <a href="/reservations">Reservations</a>
                </li>
                <li>
                  <a href="/order">Order Online</a>
                </li>
                <li>
                  <a href="/login">Login</a>
                </li>
              </ul>
            </section>
            <section className="vFrame">
              <ul>Contact
                <li>
                  <a href="/address">Address</a>
                </li>
                <li>
                  <a href="/phone">Phone</a>
                </li>
                <li>
                  <a href="/email">Email</a>
                </li>
              </ul>
            </section>
            <section className="vFrame">
              <ul>Social Media
                <li>
                  <a href="/facebook">Facebook</a>
                </li>
                <li>
                  <a href="/x">X</a>
                </li>
                <li>
                  <a href="/instagram">Instagram</a>
                </li>
                <li>
                  <a href="/reddit">Reddit</a>
                </li>
              </ul>
            </section>
          </article>
        </div>
      </div>
  </footer>
    // <footer style={{gridRow: '6/ span '}}>

    // </footer>
  )
}

export default Footer
