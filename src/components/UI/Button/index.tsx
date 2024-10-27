import { ButtonStyles } from "./styles";

interface ButtonProps {
  text: string;
  url?: string;
  fileName?: string;
  isSubmit?: boolean;
}

export function Button({ text, url, fileName, isSubmit }: ButtonProps) {
  const ButtonComponent = isSubmit ? 'button' : 'a';
  return (
    <ButtonStyles as={ButtonComponent} href={url} download={fileName}>
      {text}
    </ButtonStyles>
  );
}
