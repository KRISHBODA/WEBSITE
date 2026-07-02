import PageHero from '../components/PageHero'
import CollectionGrid from '../components/CollectionGrid'
import Collections from '../components/Collections'
import Showcase from '../components/Showcase'
import BrowseBy from '../components/BrowseBy'
import ProductShowcase from '../components/ProductShowcase'
import InspirationGallery from '../components/InspirationGallery'
import Testimonials from '../components/Testimonials'

export default function CollectionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Collections"
        title="Curated tile collections"
        subtitle="Explore floor, wall, outdoor, and decorative tile ranges crafted for lasting beauty."
      />
      <CollectionGrid />
      <Collections />
      <Showcase />
      <ProductShowcase limit={4} />
      <InspirationGallery />
      <BrowseBy />
      <Testimonials />
    </>
  )
}
