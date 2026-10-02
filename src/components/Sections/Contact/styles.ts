import styled from "styled-components";

export const ContactContainer = styled.section`
  .contact-layout {
    display: grid;
    grid-template-columns: minmax(0, .8fr) minmax(420px, 1.2fr);
    gap: clamp(3rem, 8vw, 8rem);
    align-items: start;
  }

  .contact-copy { position: sticky; top: 7rem; }

  .contact-links {
    display: flex;
    flex-wrap: wrap;
    gap: .8rem 1.2rem;
    margin-top: 2rem;
  }

  .contact-links a {
    display: inline-flex;
    align-items: center;
    gap: .4rem;
    color: ${({ theme }) => theme.colors.textLighter};
    font-size: .86rem;
  }
  .contact-links a:hover { color: ${({ theme }) => theme.colors.titleColor}; }
  .contact-links i { font-size: 1.1rem; }

  .contact-form {
    display: grid;
    gap: 1rem;
    padding: clamp(1.4rem, 4vw, 2.3rem);
    border: 1px solid rgba(255,255,255,.075);
    border-radius: 1.4rem;
    background: ${({ theme }) => theme.colors.containerColor};
  }

  .field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
  label { display: grid; gap: .55rem; }
  label > span { color: ${({ theme }) => theme.colors.titleColor}; font-size: .76rem; font-weight: 600; }

  input, select, textarea {
    width: 100%;
    border: 1px solid rgba(255,255,255,.075);
    border-radius: .8rem;
    background: rgba(255,255,255,.025);
    color: ${({ theme }) => theme.colors.titleColor};
    padding: .92rem 1rem;
    outline: none;
    transition: border-color .25s ease, background .25s ease;
  }

  input::placeholder, textarea::placeholder { color: #686873; }
  input:focus, select:focus, textarea:focus {
    border-color: ${({ theme }) => theme.colors.primaryColor};
    background: rgba(4,138,191,.04);
  }
  textarea { resize: vertical; min-height: 150px; }
  select option { background: ${({ theme }) => theme.colors.containerColor}; }

  .submit-button {
    min-height: 3.2rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    border-radius: .8rem;
    background: ${({ theme }) => theme.colors.primaryColor};
    color: white;
    cursor: pointer;
    font-weight: 600;
    transition: transform .25s ease, background .25s ease, opacity .25s ease;
  }
  .submit-button:hover:not(:disabled) { transform: translateY(-2px); background: ${({ theme }) => theme.colors.primaryColorLighter}; }
  .submit-button:disabled { opacity: .65; cursor: progress; }

  .form-feedback {
    display: grid;
    gap: .25rem;
    padding: 1rem;
    border-radius: .8rem;
    font-size: .82rem;
  }
  .form-feedback strong { color: ${({ theme }) => theme.colors.titleColor}; }
  .form-feedback span { color: ${({ theme }) => theme.colors.textLighter}; }
  .form-feedback.success { border: 1px solid rgba(102,219,185,.25); background: rgba(102,219,185,.06); }
  .form-feedback.error { border: 1px solid rgba(255,77,77,.25); background: rgba(255,77,77,.055); }

  .fallback-actions { display: flex; gap: .7rem; flex-wrap: wrap; margin-top: .8rem; }
  .fallback-actions button, .fallback-actions a {
    display: inline-flex;
    align-items: center;
    gap: .4rem;
    padding: .65rem .8rem;
    border-radius: .65rem;
    cursor: pointer;
    background: rgba(255,255,255,.055);
    color: ${({ theme }) => theme.colors.titleColor};
    font-size: .78rem;
  }

  @media (max-width: 900px) {
    .contact-layout { grid-template-columns: 1fr; }
    .contact-copy { position: static; }
  }

  @media (max-width: 620px) {
    .field-row { grid-template-columns: 1fr; }
  }
`;
