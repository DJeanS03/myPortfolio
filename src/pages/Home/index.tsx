import { Header } from "../../components/Header";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { Services } from "./components/Services";
import { Skills } from "./components/Skills";
import { MainContainer } from "./styles";


export function Main() {


    return (
        <>
            <MainContainer>
                <Header />
                <Home />
                <About />
                <Skills />
                <Services />
                <Projects />
                <Contact />
                <Footer />
            </MainContainer>
        </>
    )

}