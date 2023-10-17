import { ThemeProvider } from "styled-components";
import Router from "@components/layout/Router";
import theme from "@style/theme";
import GlobalStyles from "@style/global";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
}

export default App;
