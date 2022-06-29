import { createTheme, ThemeProvider } from "@mui/material";
// import Cart from "./pages/Cart";
// import Login from "./pages/Login";
import Register from "./pages/Register";
// import ProductDetails from "./pages/ProductDetails";
// import Home from "./pages/Home";
// import ProductList from "./pages/ProductList";

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#008080",
      contrastText: "white",
    },
  },
  typography: {
    fontFamily: "Ubarnist",
  },
});
function App() {
  return (
    <ThemeProvider theme={customTheme}>
      {/* <Home /> */}
      {/* <ProductList /> */}
      {/* <ProductDetails /> */}
      {/* <Login /> */}
      <Register />
      {/* <Cart /> */}
    </ThemeProvider>
  );
}

export default App;
