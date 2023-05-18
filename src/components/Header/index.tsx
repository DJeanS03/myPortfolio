import { HeaderContainer } from "./styles";

export function Header(){
    /* const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;    
                if(scrollTop > 0) {
                    setScrolled(true);
                } else {
                    setScrolled(false)
                }
        };
            window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []) */

 

    return (
       <HeaderContainer>
            <nav className="nav container blur-header">
                <a href="#" className="nav__logo">
                    Jean <span>Victor</span>
                </a>
                
                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav_item">
                            <a href="#home" className="nav__link active-link">Home</a>
                        </li>
                        <li className="nav_item">
                            <a href="#about" className="nav__link">About</a>
                        </li>
                        <li className="nav_item">
                            <a href="#services" className="nav__link">Services</a>
                        </li>
                        <li className="nav_item">
                            <a href="#projects" className="nav__link">Projects</a>
                        </li>
                        <li className="nav_item">
                            <a href="#contact" className="nav__link">Contact</a>
                        </li>
                    </ul>
                    
                    <div className="nav__close" id="nav-close">
                        <i className='bx bx-x'></i>
                        
                    </div>
                </div>
                
                <div className="nav__toggle" id="nav-toggle">
                    <i className='bx bx-menu'></i>
                </div>
            </nav>
       </HeaderContainer>
    )
}