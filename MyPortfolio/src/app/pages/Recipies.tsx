import { PageHeader } from '@components/index'

const Recipies = () => {
  return (
    <main className="page">
      <PageHeader
        eyebrow="Off the clock"
        title="Recipes"
        subtitle="What I cook when I'm not shipping code."
      />

      <div className="grid-cards">
        <div className="card fade-up">
          <h2 className="card-title">Recipe coming soon</h2>
          <p className="prose" style={{ marginBlock: 'var(--space-3)' }}>
            Placeholder card — a real recipe will live here.
          </p>
          <div className="tag-row">
            <span className="tag">Template</span>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Recipies
