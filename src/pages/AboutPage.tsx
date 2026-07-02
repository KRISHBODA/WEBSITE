import PageHero from '../components/PageHero'
import About from '../components/About'
import Stats from '../components/Stats'
import Journey from '../components/Journey'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Crafted with care since 1998"
        subtitle="A tile company built on quality materials, thoughtful design, and surfaces made to last."
      />
      <About />
      <Stats />
      <WhyChooseUs />
      <Journey />
      <Testimonials />
    </>
  )
}
