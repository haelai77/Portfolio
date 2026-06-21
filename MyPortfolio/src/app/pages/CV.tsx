import '@css/CV.css'
import { PageHeader } from '@components/index'

const experience = [
  {
    dates: 'Sep 2025 — Present',
    role: 'Software Engineer / Machine Learning Engineer',
    org: 'Alloyed · Oxford, England (Hybrid)',
    points: [
      'Building full-stack applications and machine-learning systems end to end.',
      'Stack: .NET, Blazor, React, Next.js, Azure (incl. Azure Foundry), GraphQL, REST, Python, PyTorch, Airflow, Docker, FastMCP.',
    ],
  },
  {
    dates: 'Jun 2024 — Sep 2024',
    role: 'DevOps Intern',
    org: 'High Performance Computing Group, University of Bristol',
    points: [
      'Designed and implemented CI/CD pipelines in GitHub Actions (migrating off Jenkins), streamlining the deployment process.',
      'Automated integration, regression and unit testing for the "SimEng" CPU simulation engine across multiple operating systems and compilers via Docker.',
      'Automated benchmarking of new features ahead of deployment to the simulator.',
    ],
  },
  {
    dates: 'Sep 2023 — May 2024',
    role: 'Software Engineering Teaching Assistant',
    org: 'University of Bristol',
    points: [
      'Mentored students in software engineering practice — Docker, GitHub Actions and Agile methodologies.',
      'Coached iterative development, continuous feedback and agile project management.',
      'Facilitated weekly stand-ups and code reviews, promoting collaboration and high coding standards.',
    ],
  },
]

const skills = [
  { label: 'Languages', items: ['Python', 'C#', 'Java', 'C', 'Go', 'JavaScript / JSX', 'SQL'] },
  { label: 'ML & Data', items: ['PyTorch', 'Airflow', 'Pandas', 'NumPy', 'Deep Learning', 'Machine Vision'] },
  { label: 'Web & Frameworks', items: ['.NET', 'Blazor', 'React', 'Next.js', 'GraphQL', 'Django', 'TailwindCSS'] },
  { label: 'Tools & Cloud', items: ['Azure', 'AWS', 'Google Cloud', 'Docker', 'Git', 'GitHub Actions'] },
]

const education = [
  {
    dates: 'Sep 2024 — Aug 2025',
    role: 'MSc Data Science & Machine Learning — Distinction',
    org: 'University College London (UCL)',
    note: 'Algorithmic Trading · Machine Vision · Bayesian Deep Learning · Applied Deep Learning',
  },
  {
    dates: '2021 — 2024',
    role: 'BSc Computer Science — First Class Honours (75%)',
    org: 'University of Bristol',
    note: "Awarded the Netcraft Prize (top ten in the cohort for academic performance).",
  },
  {
    dates: '2019 — 2021',
    role: 'A-Levels — A*A*A A',
    org: "St Joseph's RC High School, Newport, Wales",
    note: '',
  },
]

const CV = () => {
  return (
    <main className="page">
      <PageHeader
        eyebrow="Curriculum vitae"
        title="CV"
        subtitle="Software & Machine Learning Engineer · MSc Data Science & ML (Distinction)."
      />

      <div className="btn-row fade-up">
        {/* TODO: re-add a "Download CV" button once a phone-free PDF lives at public/cv.pdf */}
        <a className="btn btn--primary" href="mailto:leojacklai.work@gmail.com">Email</a>
        <a className="btn btn--ghost" href="https://www.linkedin.com/in/leo-j-lai/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a className="btn btn--ghost" href="https://github.com/haelai77" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>

      <section className="section fade-up">
        <h2 className="section-title">Experience</h2>
        <div className="card">
          {experience.map((entry) => (
            <article key={entry.role + entry.org} className="cv-entry">
              <span className="dates">{entry.dates}</span>
              <div>
                <div className="role">{entry.role}</div>
                <div className="org">{entry.org}</div>
                <ul>
                  {entry.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section fade-up">
        <h2 className="section-title">Skills</h2>
        <div className="cv-skills">
          {skills.map((group) => (
            <div key={group.label} className="card cv-skill-group">
              <span className="label">{group.label}</span>
              <div className="tag-row">
                {group.items.map((item) => (
                  <span key={item} className="tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section fade-up">
        <h2 className="section-title">Education</h2>
        <div className="card">
          {education.map((entry) => (
            <article key={entry.role + entry.org} className="cv-entry">
              <span className="dates">{entry.dates}</span>
              <div>
                <div className="role">{entry.role}</div>
                <div className="org">{entry.org}</div>
                {entry.note ? <ul><li>{entry.note}</li></ul> : null}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default CV
