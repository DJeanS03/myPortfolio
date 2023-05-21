import { useState } from "react";
import { HeaderContainer } from "./styles";

interface Props {
    Catch: boolean,
  
}

export function Header({ Catch }:Props){ 
    const [Toggle, showMenu] = useState(false)
    /* const [activeNav, setActiveNav] = useState("#home") */

const sections: NodeListOf<HTMLElement> = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollY: number = window.pageYOffset;

  sections.forEach((current: HTMLElement) => {
    const sectionHeight: number = current.offsetHeight;
    const sectionTop: number = current.offsetTop - 58;
    const sectionId: string | null = current.getAttribute('id');
    const sectionsClass: HTMLAnchorElement | null = document.querySelector(`.nav__menu a[href*= ${sectionId}]`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass?.classList.add('active-link');  
    } else {
      sectionsClass?.classList.remove('active-link');
    }
  });
};

window.addEventListener('scroll', scrollActive);

    return (
       <HeaderContainer>
            {/* <nav className="nav container blur-header"> */}
            <nav className={Catch ? "nav container blur-header" : "nav container"}>
                <a href="#" className="nav__logo">
                    Jean <span>Victor</span>
                </a>
                
                <div className={!Toggle ? "nav__menu" : "nav__menu show-menu"} id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            {/* <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}> */}
                            <a href="#home" onClick={() => showMenu(!Toggle)} className="nav__link active-link">
                                <i className='bx bx-home-alt-2 nav__icon'></i>
                                Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" onClick={() => showMenu(!Toggle)} className="nav__link">
                                <i className='bx bx-user nav__icon'></i>
                                About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#services" onClick={() => showMenu(!Toggle)} className="nav__link">
                            <i className='bx bx-briefcase-alt-2 nav__icon' ></i>
                                Services
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#projects" onClick={() => showMenu(!Toggle)} className="nav__link">
                                <i className='bx bx-file nav__icon'></i>
                                Projects
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" onClick={() => showMenu(!Toggle)} className="nav__link">
                                <i className='bx bx-message nav__icon'></i>
                                Contact
                            </a>
                        </li>
                    </ul>
                    
                    <div className="nav__close" onClick={() => showMenu(!Toggle)}>
                        <i className='bx bx-x'></i> 
                    </div>
                </div>
                
                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <i className='bx bx-menu'></i>
                </div>
            </nav>        
       </HeaderContainer>
    )
}