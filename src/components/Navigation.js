import React from 'react'

export const Navigation = () => {
  return (
    <>
        <section className="Header" id="Header">
            <div className="TopNavContainer">
                <div className='LogoBox'>
                    <div className='part1'> 
                        <img src="../images/Logo.png" />
                    </div>
                    <div className='part2'>Crappo</div>
                </div>
                <nav className="NavMenuContainer">
                    <div className="hamburger"> <div className="bar"></div> </div>
                    <ul className="NavMenuUl">
                        <li className="NavMenuLi"> <a href="/index.html"> Products </a> </li>
                        <li className="NavMenuLi"> <a href="/pagesFolder/pages.html"> Features</a> </li>
                        <li className="NavMenuLi"> <a href="#TS"> About </a> </li>
                        <li className="NavMenuLi"> <a href="#AUOH"> Contact </a> </li>

                        <li className="NavMenuLi"> <a href="#TS"> Login </a> </li>
                        <li className="NavMenuLi" style={{opacity: "70%"}}> <p>|</p> </li>
                        <li className="NavMenuLi"> <a href="#Footer"> <button style={{fontSize: "inherit"}}> Register </button>  </a> </li>
                    </ul>
                </nav>
            </div>
        </section>
    </>
  )
}
