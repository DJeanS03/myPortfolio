import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Language } from "../../../pages/Home";
import { myTexts } from "../../../data/MyTexts";
import { ContactContainer } from "./styles";

interface ContactProps { language: Language; }
type SendState = "idle" | "sending" | "success" | "error";

export function Contact({ language }: ContactProps) {
  const t = myTexts[0].contact.translations[language];
  const form = useRef<HTMLFormElement | null>(null);
  const [state, setState] = useState<SendState>("idle");

  const whatsappNumber = (import.meta.env.VITE_APP_WHATSAPP_NUMBER || "").replace(/\D/g, "");
  const whatsappMessage = encodeURIComponent(
    language === "pt"
      ? "Olá, Jean! Tentei entrar em contato pelo seu portfólio e o envio por e-mail não funcionou."
      : "Hi Jean! I tried to contact you through your portfolio, but the email form was unavailable."
  );
  const whatsappUrl = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
    : undefined;

  const sendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.current || state === "sending") return;

    setState("sending");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_APP_EMAILJS_USER_ID
      );

      form.current.reset();
      setState("success");
    } catch (error) {
      console.error("Erro ao enviar o email:", error);
      setState("error");
    }
  };

  return (
    <ContactContainer id="contact" className="section-shell">
      <div className="container contact-layout">
        <div className="contact-copy" data-reveal>
          <span className="section-eyebrow">{t.eyebrow}</span>
          <h2 className="section-title">{t.title}</h2>
          <p className="section-intro">{t.intro}</p>

          <div className="contact-links">
            <a href="https://www.linkedin.com/in/jean-victor200" target="_blank" rel="noreferrer">
              <i className="bx bxl-linkedin-square" aria-hidden="true" />
              LinkedIn
            </a>
            <a href="https://github.com/DJeanS03" target="_blank" rel="noreferrer">
              <i className="bx bxl-github" aria-hidden="true" />
              GitHub
            </a>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form" data-reveal>
          <div className="field-row">
            <label>
              <span>{t.name}</span>
              <input name="user_name" type="text" required placeholder={t.placeholderName} />
            </label>
            <label>
              <span>{t.categoryLabel}</span>
              <select name="user_category" defaultValue="" required>
                <option value="" disabled>{t.categoryDefault}</option>
                <option value="job_opportunity">{t.categoryJob}</option>
                <option value="freelance">{t.categoryFreelance}</option>
                <option value="other">{t.categoryOther}</option>
              </select>
            </label>
          </div>

          <label>
            <span>{t.mail}</span>
            <input name="user_email" type="email" required placeholder={t.placeholderMail} />
          </label>

          <label>
            <span>{t.message}</span>
            <textarea name="user_message" required rows={7} placeholder={t.placeholderMessage} />
          </label>

          {state === "success" && (
            <div className="form-feedback success" role="status">
              <strong>{t.success}</strong>
              <span>{t.successFollowUp}</span>
            </div>
          )}

          {state === "error" && (
            <div className="form-feedback error" role="alert">
              <strong>{t.error}</strong>
              <span>{t.errorFollowUp}</span>
              <div className="fallback-actions">
                <button type="button" onClick={() => setState("idle")}>{t.retry}</button>
                {whatsappUrl && (
                  <a href={whatsappUrl} target="_blank" rel="noreferrer">
                    <i className="bx bxl-whatsapp" aria-hidden="true" />
                    {t.whatsapp}
                  </a>
                )}
              </div>
            </div>
          )}

          <button className="submit-button" type="submit" disabled={state === "sending"}>
            {state === "sending" ? t.sending : t.button}
            <i className="bx bx-right-arrow-alt" aria-hidden="true" />
          </button>
        </form>
      </div>
    </ContactContainer>
  );
}
