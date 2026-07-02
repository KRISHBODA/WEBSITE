import { Link } from 'react-router-dom'
import { paths } from '../routes/paths'

type CtaBandProps = {
  eyebrow?: string
  title: string
  text: string
  actionLabel?: string
}

export default function CtaBand({
  eyebrow = 'Visit Us',
  title,
  text,
  actionLabel = 'Locate a Store',
}: CtaBandProps) {
  return (
    <section className="cta-band">
      <div className="container cta-band__inner">
        <div className="cta-band__content">
          <span className="eyebrow eyebrow--light">{eyebrow}</span>
          <h2 className="cta-band__title">{title}</h2>
          <p className="cta-band__text">{text}</p>
        </div>
        <Link to={paths.contact} className="btn btn--light btn--lg">
          {actionLabel}
        </Link>
      </div>
    </section>
  )
}
