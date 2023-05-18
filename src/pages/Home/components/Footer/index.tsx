import { FooterContainer } from "./styles";

export function Footer() {
    return (
        <FooterContainer>
            <div className="footer__container container grid">
                <div>
                    <h1 className="footer__title">
                        Jean <span>Victor</span>
                    </h1>
                    <h2 className="footer__education">
                        Front-end Developer
                    </h2>
                </div>

                <div className="footer__social">
                    <a href="" target="_blank" className="footer__social-link"></a>
                </div>
            </div>
        </FooterContainer>
    )
}