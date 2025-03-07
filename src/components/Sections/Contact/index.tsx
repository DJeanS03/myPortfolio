import { ContactContainer, ContactMessage } from "./styles";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "../../UI/Button";
import { myTexts } from "../../../data/MyTexts";
import { Language } from "../../../pages/Home";

import imagem from "../../../assets/dev.svg";

interface ContactProps {
  language: Language;
}

export function Contact({ language }: ContactProps) {
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

      if (form.current) {
        form.current.reset();
      }

      setTimeout(() => {
        setSendSuccess(false);
      }, 5000); // 10000 milissegundos = 10 segundos
    } catch (error) {
      console.error("Erro ao enviar o email:", error);
      setSendFailed(true);
    }

    setTimeout(() => {
      setSendFailed(false);
    }, 5000);
  };

  return (
    <ContactContainer id="contact">
      <h3
        className="section__subtitle"
        dangerouslySetInnerHTML={{ __html: translation.contact__subtitle }}
      />
      <h2 className="section__title">{translation.contact__title}</h2>

      <div className="contact__container container grid">
        <form
          action=""
          className="contact__form"
          id="contact-form"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="contact__group">
            <div className="form__field-group">
              <label htmlFor="user_name">{translation.contact__name}</label>
              <input
                type="text"
                name="user_name"
                required
                placeholder={translation.contact__placeholder__name}
                className="contact__input"
              />
            </div>

            <div className="form__field-group">
              <label htmlFor="user_category">Selecione uma categoria</label>
              <select
                className="user__category"
                id="user_category"
                name="user_category"
              >
                <option value="default" selected disabled hidden>
                  Selecione a categoria
                </option>
                <option value="job_opportunity">Oportunidade de emprego</option>
                <option value="freelance">Freelance</option>
                <option value="other">Outro</option>
              </select>
            </div>
          </div>

          <div className="form__field-group">
            <label htmlFor="user_email">{translation.contact__mail}</label>
            <input
              type="email"
              name="user_email"
              required
              placeholder={translation.contact__placeholder__mail}
              className="contact__input"
            />
          </div>

          <div className="form__field-group">
            <label htmlFor="user_message">{translation.contact__message}</label>
            <textarea
              name="user_message"
              required
              placeholder={translation.contact__placeholder__message}
              className="contact__input"
            ></textarea>
          </div>

          <ContactMessage>
            {sendSuccess && (
              <div className="__sucess">
                <p id="contact-message">
                  {translation.contact__message__success}
                </p>
                <p id="contact-message">
                  {translation.contact__message__success__follow__up}
                </p>
              </div>
            )}
            {sendFailed && (
              <div className="__error">
                <p id="contact-message">
                  {translation.contact__message__error}
                </p>
                <p id="contact-message">
                  {translation.contact__message__error__follow__up}
                </p>
              </div>
            )}
          </ContactMessage>

          <Button text={translation.contact__button} isSubmit={true} />
        </form>

        <div>
          <a href="https://lorempicsum.com" target="_blank">
            <img className="image" src={imagem} alt="Imagem aleatória" />
          </a>
        </div>
      </div>
    </ContactContainer>
  );
}
