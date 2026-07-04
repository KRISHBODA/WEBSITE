import Hero from '../components/Hero'
import InteractiveAccordion from '../components/InteractiveAccordion'
import Stats from '../components/Stats'
import CtaBand from '../components/CtaBand'
import Highlights from '../components/Highlights'
import WhyChooseUs from '../components/WhyChooseUs'
import InspirationGallery from '../components/InspirationGallery'
import Testimonials from '../components/Testimonials'
import Categories from '../components/Categories'

export default function HomePage() {
  return (
    <>
      <Hero />
      <InteractiveAccordion />
      <Categories />
      <WhyChooseUs />
      <InspirationGallery />
      <Stats />
      <CtaBand
        eyebrow="Experience Centres"
        title="Locate a studio near you"
        text="With our network of exclusive flagship studios and experience centres, luxury surfaces are always within reach. Step in to touch, feel, and visualize."
        actionLabel="Find Showroom"
      />
      <Testimonials />
      <Highlights />
    </>
  )
}
