import { ThemeProvider } from "styled-components";
import { Main } from "./pages/Home";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/theme/default";

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Main />
      </ThemeProvider>
    </>
  );
}
