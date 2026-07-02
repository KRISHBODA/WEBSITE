import PageHero from '../components/PageHero'
import Faq from '../components/Faq'

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Let's plan your next surface"
        subtitle="Reach out for samples, showroom visits, trade pricing, or project guidance. Use the form below to connect with our team."
      />
      <section className="section contact-page">
        <div className="container contact-page__layout">
          <div className="contact-page__info">
            <article className="contact-page__card">
              <span>01</span>
              <h2>Showroom Hours</h2>
              <p>Monday to Saturday, 10:00 AM - 7:00 PM</p>
              <p>Sunday by appointment only</p>
            </article>
            <article className="contact-page__card">
              <span>02</span>
              <h2>Studio Address</h2>
              <p>14 Marble Lane, Design District</p>
              <p>Ahmedabad, Gujarat 380015</p>
            </article>
            <article className="contact-page__card">
              <span>03</span>
              <h2>Quick Support</h2>
              <p>General: +91 90160 12345</p>
              <p>Projects: +91 70160 12345</p>
            </article>
            <article className="contact-page__card">
              <span>04</span>
              <h2>Trade Desk</h2>
              <p>Samples, dealer enquiries, project rates, and architect support.</p>
              <p>trade@terra-tiles.com</p>
            </article>
          </div>

          <form className="contact-form">
            <div className="contact-form__head">
              <span className="eyebrow">Enquiry Form</span>
              <h2>Tell us about your project</h2>
              <p>
                Share the space, tile type, approximate area, and timeline. Our
                team will guide you with suitable products and showroom support.
              </p>
            </div>
            <div className="contact-form__grid">
              <label>
                Full Name
                <input type="text" placeholder="Your name" />
              </label>
              <label>
                Phone Number
                <input type="tel" placeholder="+91 00000 00000" />
              </label>
              <label>
                Project Type
                <select defaultValue="">
                  <option value="" disabled>
                    Select type
                  </option>
                  <option>Home Renovation</option>
                  <option>New Home</option>
                  <option>Commercial Project</option>
                  <option>Dealer / Trade</option>
                </select>
              </label>
              <label>
                Tile Requirement
                <select defaultValue="">
                  <option value="" disabled>
                    Select product
                  </option>
                  <option>Bathroom Tiles</option>
                  <option>Kitchen Tiles</option>
                  <option>Floor Tiles</option>
                  <option>Outdoor Pavers</option>
                  <option>Porcelain Slabs</option>
                </select>
              </label>
            </div>
            <label>
              Message
              <textarea placeholder="Tell us room size, style, finish, and preferred visit date" />
            </label>
            <button type="button" className="btn btn--primary btn--lg">
              Submit Enquiry
            </button>
          </form>
        </div>
      </section>
      <Faq />
    </>
  )
}
