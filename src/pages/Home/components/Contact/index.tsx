import { ContactContainer } from "./styles";

interface ContactProps {
  language: string;
}

export function Contact({ language }: ContactProps) {
  const getText = () => {
    if (language === "en") {
      return (
        <>
          <h3 className="section__subtitle">
            Get in <span>Touch</span>
          </h3>
          <h2 className="section__title">Contact Me</h2>
          <div className="contact__container container grid">
            <form action="" className="contact__form" id="contact-form">
              <div className="contact__group">
                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="Enter your name"
                  className="contact__input"
                />
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="Enter your best email"
                  className="contact__input"
                />
              </div>
              <textarea
                name="user_project"
                required
                placeholder="Enter your message"
                className="contact__input"
              ></textarea>
              {/* <p className="contact__message" id="contact-message">ddd</p> */}

              <button type="submit" className="contact__button button">
                Send Message
              </button>
            </form>
          </div>
        </>
      );
    } else if (language === "pt") {
      return (
        <>
          <h3 className="section__subtitle">
            Entre em <span>Contato</span>
          </h3>
          <h2 className="section__title">Envie Sua Mensagem</h2>
          <div className="contact__container container grid">
            <form action="" className="contact__form" id="contact-form">
              <div className="contact__group">
                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="Digite seu nome"
                  className="contact__input"
                />
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="Digite seu melhor e-mail"
                  className="contact__input"
                />
              </div>
              <textarea
                name="user_project"
                required
                placeholder="Digite sua mensagem"
                className="contact__input"
              ></textarea>
              <button type="submit" className="contact__button button">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </>
      );
    }
  };

  return <ContactContainer id="contact">{getText()}</ContactContainer>;
}
