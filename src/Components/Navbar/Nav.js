import { React, useEffect, useRef, useState } from "react";
import { NavHashLink } from "react-router-hash-link";

function Nav() {
  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      document.removeEventListener("scroll", handleScroll, { passive: true });
    };
  }, []);
  return (
    <nav>
      <div className={navBackground ? "nav active" : "nav"}>
        <NavHashLink to="/" id="home">
          <img src="/images/logo.png" alt="logo" className="logo" />
        </NavHashLink>
        <div id="circle"></div>
      </div>
    </nav>
  );
}

export default Nav;
