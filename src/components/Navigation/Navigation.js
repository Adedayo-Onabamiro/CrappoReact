import React, { useState, useEffect } from 'react';
import "../Navigation/Navigation.css";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {  
    const handleScroll = () => {
      const menuHeight = document.querySelector(".NavMenuUl").offsetHeight;
      if (window.pageYOffset > menuHeight * 0.1) {
        setIsOpen(false);
      }
      else {
        // setShowNavbar (true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // }
    }, []);

  return (
    <>
      <section className="Header" id="Header">
        <div className="TopNavContainer">
          <div className="LogoBox">
            <div className="part1">
              <img src="../images/Logo.png" />
            </div>
            <div className="part2">Crappo</div>
          </div>
          <nav className= "NavMenuContainer">
            <div className="hamburger" onClick={handleToggleMenu}>
              <div className="bar"></div>
            </div>
            <ul className={`NavMenuUl ${isOpen ? 'active' : ''}`}>
              <li className="NavMenuLi"> <a href="/index.html"> Products </a> </li>
              <li className="NavMenuLi"> <a href="/pagesFolder/pages.html"> Features</a> </li>
              <li className="NavMenuLi"> <a href="#TS"> About </a> </li>
              <li className="NavMenuLi"> <a href="#AUOH"> Contact </a> </li>
              <li className="NavMenuLi"> <a href="#TS"> Login </a> </li>
              <li className="NavMenuLi" style={{ opacity: "70%" }}> <p>|</p> </li>
              <li className="NavMenuLi"> <a href="#Footer"> <button style={{ fontSize: "inherit" }}> Register </button>  </a> </li>
            </ul>
          </nav>
        </div>
      </section>
    </>
  )
}

