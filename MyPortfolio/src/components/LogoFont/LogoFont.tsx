import './LogoFont.css'

type LogoFontProps = {
  root: string
  prefix?: string
  suffix?: string
  className?: string
}

const LogoFont = ({ root, prefix = '', suffix = '', className = '' }: LogoFontProps) => {
  const combinedClassName = ['logoFont', className].filter(Boolean).join(' ')

  return (
    <div className={combinedClassName}>
      {prefix ? <span>{prefix}</span> : null}
      {root.split('').map((char, i, arr) => {
        const visibleIndex = arr.slice(0, i).filter((c) => c !== ' ').length

        return (
          <span key={i} style={{ transitionDelay: `${visibleIndex * 0.05}s` }}>
            {char === ' ' ? '\u00A0' : char}
          </span>
        )
      })}
      {suffix ? <span>{suffix}</span> : null}
    </div>
  )
}

export default LogoFont
