type PageHeroProps = {
  eyebrow: string
  title: string
  subtitle?: string
}

export default function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container page-hero__inner">
        <span className="page-hero__eyebrow">{eyebrow}</span>
        <h1 className="page-hero__title">{title}</h1>
        {subtitle ? <p className="page-hero__subtitle">{subtitle}</p> : null}
      </div>
    </section>
  )
}
