import { useState, useEffect } from "react";
import { HeaderContainer } from "./styles";

interface Props {
  Catch: boolean;
}

export function NewHeader({ Catch }: Props) {
  const [Toggle, showMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      const sections = document.querySelectorAll<HTMLElement>("section[id]");

      sections.forEach((current: HTMLElement) => {
        const sectionHeight: number = current.offsetHeight;
        const sectionTop: number =
          current.getBoundingClientRect().top + window.pageYOffset;
        const sectionId: string | null = current.getAttribute("id");
        const sectionsClassI: HTMLAnchorElement | null = document.querySelector(
          `.nav__menu a[href="#${sectionId}"] i`
        );
        const sectionsClassA: HTMLAnchorElement | null = document.querySelector(
          `.nav__menu a[href="#${sectionId}"]`
        );

        if (
          scrollY > sectionTop - window.innerHeight * 0.5 &&
          scrollY <= sectionTop + sectionHeight - window.innerHeight * 0.5
        ) {
          sectionsClassI?.classList.add("active-link");
          sectionsClassA?.classList.add("active-link");
        } else {
          sectionsClassI?.classList.remove("active-link");
          sectionsClassA?.classList.remove("active-link");
        }
      });
    };

    // Chama a função handleScroll() no carregamento inicial da página
    handleScroll();

    // Adiciona o event listener para o evento de scroll
    window.addEventListener("scroll", handleScroll);

    // Limpa o event listener ao desmontar o componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderContainer>
      <nav className={Catch ? "nav container blur-header" : "nav container"}>
        <a href="#" className="nav__logo">
          Jean <span>Victor</span>
        </a>

        {/* <div className={!Toggle ? "nav__menu" : "nav__menu show-menu"} id="nav-menu"> */}
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => showMenu(!Toggle)}
                className="nav__link active-link"
              >
                <i className='bx bx-home-alt-2 nav__icon active-link"'></i>
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="bx bx-user nav__icon"></i>
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link">
                <i className="bx bx-briefcase-alt-2 nav__icon"></i>
                Services
              </a>
            </li>
            <li className="nav__item">
              <a href="#projects" className="nav__link">
                <i className="bx bx-file nav__icon"></i>
                Projects
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="bx bx-message nav__icon"></i>
                Contact
              </a>
            </li>
          </ul>

          {/* <div className="nav__close" onClick={() => showMenu(!Toggle)}>
                        <i className='bx bx-x'></i> 
                    </div> */}
        </div>

        {/* <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <i className='bx bx-menu'></i>
                </div> */}
      </nav>
      <script src="https://unpkg.com/scrollreveal"></script>
    </HeaderContainer>
  );
}
