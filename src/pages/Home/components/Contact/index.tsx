import { ContactContainer } from "./styles";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "../Button";

interface ContactProps {
  language: string;
}

export function Contact({ language }: ContactProps) {
  const form = useRef<HTMLFormElement | null>(null);
  const [sendSuccess, setSendSuccess] = useState<boolean>(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        "service_qv2or9g",
        "template_843ueyv",
        form.current as HTMLFormElement,
        "zEguyX8_OVejwyTS4"
      );

      setSendSuccess(true);

      // Limpar os campos após o envio
      if (form.current) {
        form.current.reset();
      }

      setTimeout(() => {
        setSendSuccess(false);
      }, 2000); // 10000 milissegundos = 10 segundos
    } catch (error) {
      console.error("Erro ao enviar o email:", error);
    }
  };

  //service_qv2or9g
  //template_843ueyv
  // #contact__form
  //zEguyX8_OVejwyTS4

  const getText = () => {
    if (language === "en") {
      return (
        <>
          <h3 className="section__subtitle">
            Get in <span>Touch</span>
          </h3>
          <h2 className="section__title">Contact Me</h2>
          <div className="contact__container container grid">
            <form
              action=""
              className="contact__form"
              id="contact-form"
              ref={form}
              onSubmit={sendEmail}
            >
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
              {sendSuccess && (
                <p className="contact__message" id="contact-message">
                  A mensagem foi enviada com sucesso!
                </p>
              )}

              <Button text="Send Message" isSubmit={true} />
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
            <form
              action=""
              className="contact__form"
              id="contact-form"
              ref={form}
              onSubmit={sendEmail}
            >
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
              {sendSuccess && (
                <p className="contact__message" id="contact-message">
                  A mensagem foi enviada com sucesso!
                </p>
              )}
              <Button text="Enviar Mensagem" isSubmit={true} />
            </form>
          </div>
        </>
      );
    }
  };

  return <ContactContainer id="contact">{getText()}</ContactContainer>;
}
