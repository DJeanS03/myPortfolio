import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import type { Language } from "../../pages/Home";
import { myTexts } from "../../data/MyTexts";
import { contact } from "./content";
import { RevealTitle } from "./RevealTitle";

interface ContactProps { language: Language; }
type SendState = "idle" | "sending" | "success" | "error";

// Relógio de Salvador no rodapé, atualizado a cada segundo.
function useClock() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);
  return new Intl.DateTimeFormat("pt-BR", {
    hour: "2-digit", minute: "2-digit", second: "2-digit", timeZone: "America/Bahia",
  }).format(now);
}

// Contato: título gigante, botão que abre o formulário (e-mail via EmailJS,
// com WhatsApp só como alternativa quando o envio falha) e cartões de links.
export function RefContact({ language }: ContactProps) {
  const t = contact[language];
  const f = myTexts[0].contact.translations[language];
  const form = useRef<HTMLFormElement | null>(null);
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<SendState>("idle");
  const clock = useClock();

  // Formulário fechado fica fora do foco do teclado e de leitores de tela.
  useEffect(() => {
    form.current?.toggleAttribute("inert", !open);
  }, [open]);

  const whatsappNumber = (import.meta.env.VITE_APP_WHATSAPP_NUMBER || "").replace(/\D/g, "");
  const whatsappMessage = encodeURIComponent(
    language === "pt"
      ? "Olá, Jean! Tentei entrar em contato pelo seu portfólio e o envio por e-mail não funcionou."
      : "Hi Jean! I tried to contact you through your portfolio, but the email form was unavailable."
  );
  const whatsappUrl = whatsappNumber ? `https://wa.me/${whatsappNumber}?text=${whatsappMessage}` : undefined;

  const toggle = () => {
    setOpen((value) => {
      if (!value) window.setTimeout(() => form.current?.querySelector("input")?.focus(), 350);
      return !value;
    });
  };

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
    <Section id="contato">
      <div className="r-wrap">
        <span className="r-eyebrow">{t.eyebrow}</span>
        <RevealTitle lines={t.title} className="r-h2 title" />

        <div className="buttons" data-reveal>
          <button type="button" className="primary" onClick={toggle} aria-expanded={open} aria-controls="contact-form">
            <i className={`bx ${open ? "bx-x" : "bx-envelope"}`} aria-hidden="true" />
            {open ? t.close : t.write}
          </button>
          <a className="secondary" href="https://www.linkedin.com/in/jean-victor200" target="_blank" rel="noreferrer">
            LinkedIn <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className={`form-wrap ${open ? "is-open" : ""}`} id="contact-form">
          <div>
            <form ref={form} onSubmit={sendEmail} className="form">
              <div className="row">
                <label>
                  <span>{f.name}</span>
                  <input name="user_name" type="text" required placeholder={f.placeholderName} />
                </label>
                <label>
                  <span>{f.categoryLabel}</span>
                  <select name="user_category" defaultValue="" required>
                    <option value="" disabled>{f.categoryDefault}</option>
                    <option value="job_opportunity">{f.categoryJob}</option>
                    <option value="freelance">{f.categoryFreelance}</option>
                    <option value="other">{f.categoryOther}</option>
                  </select>
                </label>
              </div>
              <label>
                <span>{f.mail}</span>
                <input name="user_email" type="email" required placeholder={f.placeholderMail} />
              </label>
              <label>
                <span>{f.message}</span>
                <textarea name="user_message" required rows={5} placeholder={f.placeholderMessage} />
              </label>

              {state === "success" && (
                <div className="feedback success" role="status">
                  <strong>{f.success}</strong>
                  <span>{f.successFollowUp}</span>
                </div>
              )}

              {state === "error" && (
                <div className="feedback error" role="alert">
                  <strong>{f.error}</strong>
                  <span>{f.errorFollowUp}</span>
                  <div className="fallback">
                    <button type="button" onClick={() => setState("idle")}>{f.retry}</button>
                    {whatsappUrl && (
                      <a href={whatsappUrl} target="_blank" rel="noreferrer">
                        <i className="bx bxl-whatsapp" aria-hidden="true" /> {f.whatsapp}
                      </a>
                    )}
                  </div>
                </div>
              )}

              <button className="submit" type="submit" disabled={state === "sending"}>
                {state === "sending" ? f.sending : f.button} <span aria-hidden="true">→</span>
              </button>
            </form>
          </div>
        </div>

        <div className="cards" data-reveal>
          {t.cards.map((card) => (
            <a key={card.label} href={card.href} target="_blank" rel="noreferrer" className="card" data-glow>
              <span className="label">{card.label}</span>
              <span className="detail">{card.detail}</span>
              <i className="bx bx-up-arrow-alt" aria-hidden="true" />
            </a>
          ))}
        </div>

        <p className="where">
          <i className="bx bx-map" aria-hidden="true" />
          <span>{t.location}</span>
          <span className="modes">{t.modes}</span>
        </p>

        <footer>
          <span>© Jean Victor</span>
          <span>{t.clock}: {clock}</span>
          <span>{t.made}</span>
        </footer>
      </div>
    </Section>
  );
}

const Section = styled.section`
  position: relative;
  overflow: hidden;
  margin-top: 5rem;
  padding-block: clamp(6rem, 12vw, 8rem) 2.5rem;
  border-top: 1px solid var(--line);
  border-radius: 48px 48px 0 0;
  background:
    radial-gradient(60rem 30rem at 50% 0%, rgba(168,216,255,.07), transparent 70%),
    var(--ink);

  .title { margin-top: 1.4rem; font-size: clamp(3.4rem, 11.5vw, 8.5rem); line-height: .9; }

  .buttons { display: flex; flex-wrap: wrap; gap: .9rem; margin-top: 3rem; }
  .primary, .secondary {
    display: inline-flex;
    align-items: center;
    gap: .6rem;
    padding: 1.05rem 1.6rem;
    border-radius: 999px;
    font-size: 1.1rem;
    cursor: pointer;
    transition: transform .4s var(--expo), border-color .3s ease;
  }
  .primary { background: var(--text); color: var(--ink); font-weight: 500; }
  .secondary {
    border: 1px solid rgba(255,255,255,.14);
    color: var(--text);
    font-family: var(--display);
    font-weight: 700;
  }
  .primary:hover, .secondary:hover { transform: translateY(-3px); }

  .form-wrap {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows .6s var(--expo);
  }
  .form-wrap > div { overflow: hidden; }
  .form-wrap.is-open { grid-template-rows: 1fr; }

  .form {
    display: grid;
    gap: 1rem;
    max-width: 46rem;
    margin-top: 1.6rem;
    padding: clamp(1.3rem, 3vw, 2rem);
    border: 1px solid var(--line);
    border-radius: 28px;
    background: var(--ink-2);
  }
  .row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
  label { display: grid; gap: .45rem; }
  label span { color: var(--muted); font-family: var(--mono); font-size: .7rem; letter-spacing: .12em; text-transform: uppercase; }
  input, select, textarea {
    width: 100%;
    padding: .85rem 1rem;
    border: 1px solid var(--line);
    border-radius: 14px;
    background: rgba(255,255,255,.03);
    color: var(--text);
    font-size: .95rem;
    outline: none;
    transition: border-color .25s ease;
  }
  input:focus, select:focus, textarea:focus { border-color: var(--sky); }
  select option { background: var(--ink-2); }
  textarea { resize: vertical; }

  .feedback { display: grid; gap: .3rem; padding: 1rem; border-radius: 14px; font-size: .9rem; }
  .feedback.success { background: rgba(74,222,128,.1); color: var(--mint); }
  .feedback.error { background: rgba(255,126,182,.1); color: var(--pink); }
  .feedback span { color: var(--text); }
  .fallback { display: flex; flex-wrap: wrap; gap: .7rem; margin-top: .5rem; }
  .fallback button, .fallback a {
    padding: .55rem 1rem;
    border: 1px solid var(--line);
    border-radius: 999px;
    background: transparent;
    color: var(--text);
    font-size: .85rem;
    cursor: pointer;
  }

  .submit {
    justify-self: start;
    padding: .9rem 1.5rem;
    border-radius: 999px;
    background: var(--sky);
    color: var(--ink);
    font-weight: 600;
    cursor: pointer;
  }
  .submit:disabled { opacity: .6; cursor: wait; }

  .cards {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
    margin-top: 3.5rem;
  }
  .card {
    position: relative;
    display: grid;
    gap: .35rem;
    padding: 1.4rem 1.5rem;
    border: 1px solid var(--line);
    border-radius: 22px;
    background: rgba(255,255,255,.02);
    transition: border-color .3s ease;
  }
  .card:hover { border-color: rgba(168,216,255,.4); }
  .label { font-family: var(--display); font-size: 1.3rem; font-weight: 700; }
  .detail { color: var(--muted); font-size: .8rem; }
  .card i { position: absolute; top: 1.3rem; right: 1.3rem; font-size: 1.2rem; transform: rotate(45deg); }

  .where {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: .6rem 2rem;
    margin-top: 3rem;
    color: var(--muted);
    font-family: var(--mono);
    font-size: .72rem;
    letter-spacing: .18em;
    text-transform: uppercase;
  }
  .where i { font-size: 1rem; letter-spacing: 0; }

  footer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;
    margin-top: 5rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--line);
    color: var(--muted);
    font-family: var(--mono);
    font-size: .72rem;
  }

  @media (max-width: 760px) {
    border-radius: 32px 32px 0 0;
    .row { grid-template-columns: 1fr; }
    .cards { grid-template-columns: 1fr; }
    .primary, .secondary { width: 100%; justify-content: center; }
    footer { flex-direction: column; }
  }
`;
