import { ThemeProvider } from "styled-components";
import { TransactionsContextProvider } from "./hooks/useTransactions";
import { GlobalStyle } from "./assets/style/global";
import standard from "./assets/style/themes/standard";

import { Home } from "./pages/Home";
// import { Dashboard } from "./pages/DashBoard";

export function App() {
  return (
    <div className="App">
      <ThemeProvider theme={standard}>
        <GlobalStyle />
        <TransactionsContextProvider>
          <Home />
        </TransactionsContextProvider>
      </ThemeProvider>
    </div>
  );
}
