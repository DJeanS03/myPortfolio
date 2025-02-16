import { ContactContainer } from "./styles";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "../../UI/Button";
import { myTexts } from "../../../data/MyTexts";
import { Language } from "../../../pages/Home";

interface ContactProps {
  language: Language;
}

export function Contact({ language }: ContactProps) {
  //=========================SEND MAIL=======================================
  const getTranslation = () => {
    const translation =
      myTexts[0].contact.translations[language] ||
      myTexts[0].contact.translations.en;
    return translation;
  };

  const translation = getTranslation();

  //=========================SEND MAIL=======================================

  const form = useRef<HTMLFormElement | null>(null);
  const [sendSuccess, setSendSuccess] = useState<boolean>(false);
  const [sendFailed, setSendFailed] = useState<boolean>(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        form.current as HTMLFormElement,
        import.meta.env.VITE_APP_EMAILJS_USER_ID
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
      setSendFailed(true);
    }
  };

  return (
    <ContactContainer id="contact">
      <h3
        className="section__subtitle"
        dangerouslySetInnerHTML={{ __html: translation.contact__subtitle }}
      />
      <h2 className="section__title">{translation.contact__title}</h2>

      <div className="contact__container container grid box">
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
              placeholder={translation.contact__placeholder__name}
              className="contact__input"
            />
            <input
              type="email"
              name="user_email"
              required
              placeholder={translation.contact__placeholder__mail}
              className="contact__input"
            />
          </div>
          <textarea
            name="user_message"
            required
            placeholder={translation.contact__placeholder__message}
            className="contact__input"
          ></textarea>
          {sendSuccess && (
            <p className="contact__message" id="contact-message">
              {translation.contact__message__success}
            </p>
          )}
          {sendFailed && (
            <p className="contact__message" id="contact-message">
              {translation.contact__message__error}
            </p>
          )}

          <Button text={translation.contact__button} isSubmit={true} />
        </form>

        <div>
          <a href="https://lorempicsum.com" target="_blank">
            <img src="https://picsum.photos/500/500?category=water" alt="Imagem aleatória" />
          </a>
        </div>
      </div>
    </ContactContainer>
  );
}
