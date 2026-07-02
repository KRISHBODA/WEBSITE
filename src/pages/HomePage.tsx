import Hero from '../components/Hero'
import Categories from '../components/Categories'
import CollectionGrid from '../components/CollectionGrid'
import BrowseBy from '../components/BrowseBy'
import Stats from '../components/Stats'
import CtaBand from '../components/CtaBand'
import Highlights from '../components/Highlights'
import ProductShowcase from '../components/ProductShowcase'
import WhyChooseUs from '../components/WhyChooseUs'
import InspirationGallery from '../components/InspirationGallery'
import Testimonials from '../components/Testimonials'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <CollectionGrid />
      <ProductShowcase limit={4} />
      <WhyChooseUs />
      <InspirationGallery />
      <BrowseBy />
      <Stats />
      <CtaBand
        title="Locate a store near you"
        text="With an ever-growing network of dealers, showrooms, and experience centres, quality tiles are always close by."
      />
      <Testimonials />
      <Highlights />
    </>
  )
}
