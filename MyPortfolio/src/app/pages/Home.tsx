import '@css/Home.css'
import TechIcon from '@components/LabelledTechIcons/techIcon';

const technologyIcons = [
  { iconSrc: '/icons/techIcons/React.svg', label: 'React' },
  { iconSrc: '/icons/techIcons/Python.svg', label: 'Python' },
  { iconSrc: '/icons/techIcons/Docker.svg', label: 'Docker' },
  { iconSrc: '/icons/techIcons/GraphQL.svg', label: 'GraphQL' },
  { iconSrc: '/icons/techIcons/MySQL.svg', label: 'MySQL' },
  { iconSrc: '/icons/techIcons/Azure.svg', label: 'Azure' },
];

const Home = () => {
  return (
    <main>
      <div className="container glass-card paragraph-font">
        <div className="paragraph-font2">HI, I'm Leo!</div>
        I'm a full stack software / ML engineering! I enjoy building software while learning the business context behind it. Whether I'm making applications or working on projects,
        I'm motivated by understanding how technical decisions connect to real-world business problems and user needs.
        <br /><br />
        I’m still learning industry-standard ML engineering practices, but I’ve had hands-on experience with tools like Airflow and MLflow, and deploying models on Azure ML!
        <br /><br />
      </div>

      <div className="container glass-card paragraph-font">
        <div className="paragraph-font2">Technologies</div>
        <div className="technology-grid">
          {technologyIcons.map(({ iconSrc, label }) => (
            <TechIcon key={label} iconSrc={iconSrc} label={label} />
          ))}
        </div>
      </div>
      
      <div className="container glass-card paragraph-font">
        <div className="paragraph-font2">Interests</div>
      </div>

    </main>
  )
}

export default Home
