import { Link } from 'react-router-dom'
import { paths } from '../routes/paths'

type PageLink = {
  to: string
  label: string
}

const pages: PageLink[] = [
  { to: paths.home, label: 'Home' },
  { to: paths.collections, label: 'Collections' },
  { to: paths.catalogue, label: 'Catalogue' },
  { to: paths.about, label: 'About' },
  { to: paths.contact, label: 'Contact Us' },
]

const requestTypes = [
  'Select type of request',
  'Home renovation',
  'Architect project',
  'Bulk tile order',
  'Showroom appointment',
]

const socials = ['f', 'ig', 'yt', 'in']

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <Link to={paths.home} className="footer__logo">
          <span className="footer__logo-name">TERRA</span>
          <span className="footer__logo-tag">Fine Surfaces</span>
        </Link>

        <div className="footer__main">
          <div className="footer__info">
            <div className="footer__brand">
              <p className="footer__mission">Inspired Living</p>
              <p className="footer__tagline">
                Premium tile surfaces for warm homes, refined studios, and modern
                commercial spaces.
              </p>

              <div className="footer__socials" aria-label="Social links">
                {socials.map((social) => (
                  <a key={social} href="#" aria-label={social}>
                    {social}
                  </a>
                ))}
              </div>
            </div>

            <div className="footer__contact-list">
              <div className="footer__contact">
                <span className="footer__contact-label">For General Inquiries</span>
                <a href="tel:+919016012345">+91 90160 12345</a>
                <a href="mailto:hello@terratiles.com">hello@terratiles.com</a>
              </div>

              <div className="footer__contact">
                <span className="footer__contact-label">For Trade Orders</span>
                <a href="tel:+917016012345">+91 70160 12345</a>
                <a href="mailto:studio@terratiles.com">studio@terratiles.com</a>
              </div>

              <div className="footer__contact">
                <span className="footer__contact-label">For Studio Visits</span>
                <a href="mailto:visit@terratiles.com">visit@terratiles.com</a>
              </div>
            </div>

            <nav className="footer__pages" aria-label="Footer navigation">
              <h4>Pages</h4>
              <ul>
                {pages.map((page) => (
                  <li key={page.label}>
                    <Link to={page.to}>{page.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <form className="footer__form">
            <label>
              <span>Type of request</span>
              <select defaultValue="">
                {requestTypes.map((type, index) => (
                  <option key={type} value={index === 0 ? '' : type} disabled={index === 0}>
                    {type}
                  </option>
                ))}
              </select>
            </label>

            <label>
              <span>Name</span>
              <input type="text" name="name" />
            </label>

            <label>
              <span>Email</span>
              <input type="email" name="email" />
            </label>

            <label>
              <span>
                Message <small>Optional</small>
              </span>
              <textarea name="message" rows={3} />
            </label>

            <label className="footer__consent">
              <input type="checkbox" name="consent" />
              <span>
                I agree to be contacted about tile collections, samples, and project
                support.
              </span>
            </label>

            <button type="button" className="footer__submit">
              Send Message
            </button>
          </form>
        </div>

        <div className="footer__bottom">
          <p>{year} Copyright &copy; All Rights Reserved. Terra Tiles.</p>
          <div className="footer__legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
