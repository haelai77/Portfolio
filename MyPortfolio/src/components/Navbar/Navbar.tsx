import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">

      <div className="navbar--content">

        <div className="logoFont">
          {"Leo Lai".split("").map((char, i, arr) => {
            // Count only visible letters for delay
            const visibleIndex = arr.slice(0, i).filter(c => c !== " ").length;

            return (
              <span
                key={i}
                style={{ transitionDelay: `${visibleIndex * 0.05}s` }}
              >
                {char === " " ? "\u00A0" : char} {/* non-breaking space */}
              </span>
            );
          })}
        </div>



        <div>buttons</div>
      </div>

    </nav>
  )
}

export default Navbar	