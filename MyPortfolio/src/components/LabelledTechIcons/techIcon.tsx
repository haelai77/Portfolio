import './techIcon.css';

type TechIconProps = {
  iconSrc: string;
  label: string;
  iconAlt?: string;
  className?: string;
};

const TechIcon = ({
  iconSrc,
  label,
  iconAlt,
  className = '',
}: TechIconProps) => {
  const rootClassName = ['tech-icon-card', className].filter(Boolean).join(' ');

  return (
    <div className={rootClassName}>
      <div className="tech-icon-card__icon-shell">
        <img
          className="tech-icon-card__icon"
          src={iconSrc}
          alt={iconAlt ?? `${label} icon`}
          width={16}
          height={16}
          loading="lazy"
        />
      </div>
      <span className="tech-icon-card__label">{label}</span>
    </div>
  );
};

export default TechIcon;
