import '@css/Home.css'
import { Link } from 'react-router-dom'
import TechIcon from '@components/LabelledTechIcons/techIcon'
import { technologyIcons } from '@utils/technologyIcons'

const highlights = [
  { label: 'Focus', value: 'Full-stack + ML engineering' },
  { label: 'MLOps', value: 'Airflow & MLflow pipelines' },
  { label: 'Cloud', value: 'Model deployment on Azure ML' },
  { label: 'Mindset', value: 'Tech decisions tied to business value' },
]

const Home = () => {
  return (
    <main className="page">
      <section className="hero fade-up">
        <span className="eyebrow">Full-stack · ML Engineering</span>
        <h1 className="hero-name">
          Hi, I'm <span className="accent">Leo</span>
          <img className="hero-flag" src={`${import.meta.env.BASE_URL}icons/flags/wales.svg`} alt="Welsh flag" />
          <span className="hero-name-divider">/</span>
          <span className="hero-name-zh">黎佩德</span>
          <img className="hero-flag" src={`${import.meta.env.BASE_URL}icons/flags/china.svg`} alt="Chinese flag" />
        </h1>
        <p className="hero-role">I build software and learn the business behind it.</p>

        <div className="prose hero-intro">
          <p>
            I'm a full-stack software / ML engineer who enjoys building software while
            understanding the business context behind it. Whether I'm shipping applications or
            working on projects, I'm motivated by how technical decisions connect to{' '}
            <strong>real-world business problems and user needs</strong>.
          </p>
          <br />
          <p>
            I'm still sharpening industry-standard ML engineering practices, but I've had
            hands-on experience with tools like <strong>Airflow</strong> and{' '}
            <strong>MLflow</strong>, and deploying models on <strong>Azure ML</strong>.
          </p>
        </div>

        <div className="btn-row">
          <Link className="btn btn--primary" to="/cv">View CV</Link>
          <Link className="btn btn--ghost" to="/projects">Projects</Link>
          {/* TODO: replace with your real profile links */}
          <a className="btn btn--ghost" href="https://github.com/haelai77" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </section>

      <section className="section fade-up">
        <h2 className="section-title">Tech stack</h2>
        <div className="card">
          <div className="tech-grid">
            {technologyIcons.map(({ iconSrc, label }) => (
              <TechIcon key={label} iconSrc={iconSrc} label={label} />
            ))}
          </div>
        </div>
      </section>

      <section className="section fade-up">
        <h2 className="section-title">Highlights</h2>
        <div className="highlight-grid">
          {highlights.map(({ label, value }) => (
            <div key={label} className="card highlight-card">
              <span className="label">{label}</span>
              <span className="value">{value}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Home
