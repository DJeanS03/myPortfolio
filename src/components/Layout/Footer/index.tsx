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
                        Full-Stack / Back-End & DevOps / Kubernetes.
                    </h2>
                    <p>V1.7.2</p>
                </div>
                {/* <div className="footer__social">
                    <a href="" target="_blank" className="footer__social-link"></a>
                </div> */}
            </div>
        </FooterContainer>
    )
}