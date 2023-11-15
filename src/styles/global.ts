import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

/* @media screen and (min-width: 968px) {
    :root {
        --biggest-font-size: 4rem;
        --bigger-font-size: 3rem;
        --h1-font-size: 2.25rem;
        --h2-font-size: 1.5rem;
        --h3-font-size: 1.25rem;
        --normal-font-size: 1rem;
        --small-font-size: .875rem;
        --smaller-font-size: .813rem;
    }
} */

html {
    scroll-behavior: smooth;
}
  
body {
    background: ${({ theme }) => theme.colors["bodyColor"]};
    color: ${({ theme }) => theme.colors["textColor"]};
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-size: ${({ theme }) => theme.fontSizes["normal"]};
 }

input, textarea, button {
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

.button {
    display: inline-block;
    background-color: ${({ theme }) => theme.colors["primaryColor"]};
    padding: 1rem 1.75rem;
    border-radius: 0%.5rem;
    color: ${({ theme }) => theme.colors["titleColor"]};
    font-weight: ${({ theme }) => theme.fontWeights["medium"]};
    transition: box-shadow .4s;
}

.button:hover {
    box-shadow: 0 8px 24px ${({ theme }) => theme.colors["primaryColorAlt"]};;
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
