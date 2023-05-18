import { SkilsContainer } from "./styles"

export function Skills(){
    return(
        <SkilsContainer>
            <div className="skills__container container grid">
                <div className="skills__data">
                    <h3 className="section__subtitle">
                        Favorite <span>Skills</span>
                    </h3>
                    <h2 className="section__title">
                        My Skills
                    </h2>
                    <p className="skills__description">
                    See what abilities I have and how I can use them to produce projects for you.
                    </p>

                    <a href="" className="button">See my Projects</a>
                </div>
                <div className="skills__content">
                    <ol className="skills__group">
                        <li className="skills__item">HTML & CSS</li>
                        <li className="skills__item">JavaScript/TypeScript</li>
                        <li className="skills__item">Bootstrap</li>
                        <li className="skills__item">React</li>
                    </ol>
                    <ol className="skills__group" start={5}>
                        <li className="skills__item">Git & GitHub</li>
                        <li className="skills__item">Node</li>
                    </ol>
                </div>
            </div>
        </SkilsContainer>
    )
}