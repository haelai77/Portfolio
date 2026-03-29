const techIconModules = import.meta.glob('/src/assets/techIcons/*.svg', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const techLabelOverrides: Record<string, string> = {
  'apache-airflow': 'Apache Airflow',
  'c-sharp': 'C#',
  'dotnet-core': '.NET Core',
  graphql: 'GraphQL',
  mysql: 'MySQL',
  pytorch: 'PyTorch',
  pytest: 'pytest',
};

const toTitleCase = (value: string) => {
  return value
    .split('-')
    .filter(Boolean)
    .map((segment) => segment[0].toUpperCase() + segment.slice(1))
    .join(' ');
};

const getTechLabel = (path: string) => {
  const fileName = path.split('/').pop()?.replace(/\.svg$/, '') ?? '';

  return techLabelOverrides[fileName] ?? toTitleCase(fileName);
};

export const technologyIcons = Object.entries(techIconModules)
  .map(([path, iconSrc]) => ({
    iconSrc,
    label: getTechLabel(path),
  }))
  .sort((left, right) => left.label.localeCompare(right.label));
