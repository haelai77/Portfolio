type PageHeaderProps = {
  eyebrow?: string
  title: string
  subtitle?: string
}

const PageHeader = ({ eyebrow, title, subtitle }: PageHeaderProps) => {
  return (
    <header className="page-header fade-up">
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h1 className="page-title">{title}</h1>
      {subtitle ? <p className="subtitle">{subtitle}</p> : null}
    </header>
  )
}

export default PageHeader
