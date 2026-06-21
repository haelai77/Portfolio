import { PageHeader } from '@components/index'

type Project = {
  title: string
  description: string
  tags: string[]
  repo?: string
  live?: string
}

// TODO: swap the shared profile link for each project's real repo URL.
const REPO = 'https://github.com/haelai77'

const projects: Project[] = [
  {
    title: 'Super-scalar RISC CPU Simulator',
    description:
      'An out-of-order, super-scalar CPU simulator built from scratch with a custom RISC ISA — re-order buffer, register renaming, BTAC, branch prediction, vector instructions and configurable ALUs/LSUs/branch units.',
    tags: ['Python', 'NumPy', 'Computer Architecture', 'OOP'],
    repo: REPO,
  },
  {
    title: 'Industrial Sand Filter Digital Twin',
    description:
      'A web app built with Nijhuis Saur Industries to visualise prototype designs and simulations — Django backend, JS visualisation, IronPython for Revit data extraction, and CI/CD via GitHub Actions, Docker and Google Cloud.',
    tags: ['Python', 'Django', 'JavaScript', 'SQLite', 'Google Cloud', 'Docker'],
    repo: REPO,
  },
  {
    title: 'Distributed Cellular Automaton',
    description:
      'A highly parallelised Game-of-Life simulation in Go, deployed on AWS EC2 with fault tolerance — the run continues through worker/network failure — using message passing and shared memory.',
    tags: ['Go', 'AWS', 'Concurrency', 'Distributed Systems'],
    repo: REPO,
  },
  {
    title: 'Inverse Ant-Colony Car Routing',
    description:
      'An autonomous car-routing model inspired by insect pheromones: a Monte-Carlo agent-based simulation that uses a genetic algorithm to evolve and optimise parameters for congestion handling.',
    tags: ['Python', 'Genetic Algorithms', 'Simulation'],
    repo: REPO,
  },
  {
    title: 'Scotland Yard AI',
    description:
      'A graph-based board game with a decision-making AI using minimax with alpha-beta pruning and bidirectional breadth-first search over the board graph, plus full turn-based game logic.',
    tags: ['Java', 'Algorithms', 'AI'],
    repo: REPO,
  },
  {
    title: 'PGM Lossless Image Compression',
    description:
      "A C program that losslessly compresses PGM images into a custom '.Sketch' instruction format, where the encoded instructions recreate the image pixel-for-pixel.",
    tags: ['C', 'Compression', 'Algorithms'],
    repo: REPO,
  },
]

const ProjectCard = ({ project }: { project: Project }) => {
  const href = project.live ?? project.repo
  const body = (
    <>
      <h2 className="card-title">{project.title}</h2>
      <p className="prose" style={{ marginBlock: 'var(--space-3)' }}>
        {project.description}
      </p>
      <div className="tag-row">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </>
  )

  if (href) {
    return (
      <a className="card card--interactive fade-up" href={href} target="_blank" rel="noreferrer">
        {body}
      </a>
    )
  }

  return <div className="card fade-up">{body}</div>
}

const Projects = () => {
  return (
    <main className="page">
      <PageHeader
        eyebrow="Things I've built"
        title="Projects"
        subtitle="Systems, simulations and tools — from a CPU simulator to a distributed automaton."
      />

      <div className="grid-cards">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </main>
  )
}

export default Projects
