import PageHero from '../components/PageHero'
import Categories from '../components/Categories'
import BrowseBy from '../components/BrowseBy'
import CtaBand from '../components/CtaBand'
import ProductShowcase from '../components/ProductShowcase'
import WhyChooseUs from '../components/WhyChooseUs'
import Faq from '../components/Faq'

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Tiles for every space"
        subtitle="Explore our full range of ceramic and vitrified tiles by room, finish, size, and colour."
      />
      <Categories />
      <ProductShowcase />
      <BrowseBy />
      <WhyChooseUs />
      <CtaBand
        eyebrow="Need Help?"
        title="Not sure which tile to choose?"
        text="Share your project details and our team will recommend the right surface for your space."
        actionLabel="Get Guidance"
      />
      <Faq />
    </>
  )
}
