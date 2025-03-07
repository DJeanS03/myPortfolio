import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

html {
    scroll-behavior: smooth;
}
  
body {
    background: ${({ theme }) => theme.colors["bodyColor"]};
    color: ${({ theme }) => theme.colors["textColor"]};
    -webkit-font-smoothing: antialiased;
    user-select: none; //evita que algum texto seja selecionado
}

body, input, textarea, button, select{
    font-family: 'Poppins', sans-serif;
    font-size: ${({ theme }) => theme.fontSizes["normal"]};
 }

input, textarea, button, select {
    border: none;
    outline: none;
 }


h1, h2, h3, h4 {
    color: ${({ theme }) => theme.colors["titleColor"]};
    font-weight: ${({ theme }) => theme.fontWeights["medium"]};
}

ul {
    list-style: none;
}

a {
    text-decoration: none;
}

img, svg {
    max-width: 100%;
    height: auto;
}

i {
    cursor: pointer;
}

.container {
    max-width: 1120px;
    margin-inline: 1.5rem;
}

.grid {
    display: grid;
    gap: 1.5rem;
}

.section__title,
.section__subtitle {
    text-align: center;
    color: ${({ theme }) => theme.colors["titleColor"]};
    font-weight: ${({ theme }) => theme.fontWeights["semiBold"]};
}

.section__title {
    font-size: ${({ theme }) => theme.fontSizes["h1"]};
    margin-bottom: 1.5rem;
}

.section__subtitle {
    font-size: ${({ theme }) => theme.fontSizes["small"]};
    margin-bottom: .25rem;
}

.section__subtitle span {
    color: ${({ theme }) => theme.colors["primaryColor"]};
}

.main {
    overflow: hidden;
}

::-webkit-scrollbar {
    width: .6rem;
    border-radius: .5rem;
    background-color: hsl(228, 12%, 25%);
}

::-webkit-scrollbar-thumb {
    background-color: hsl(228, 8%, 35%);
    border-radius: .5rem;
}

::-webkit-scrollbar-thumb:hover {
    background-color: hsl(228, 8%, 45%);
}
`;
