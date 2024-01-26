import FontGlobalStyles from "./GlobalStyles/FontsConfig/FontsConfig";
import CartProvider from "./store/CartProvider";
import AppRoutes from "./routes/AppRoutes";
import { ThemeProvider } from "styled-components";
import { theme } from "./GlobalStyles/Theme/theme";

function App() {
  return (
    <>
      <CartProvider>
        <FontGlobalStyles />
        <ThemeProvider theme={theme}>
          <AppRoutes />
        </ThemeProvider>
      </CartProvider>
    </>
  );
}

export default App;
