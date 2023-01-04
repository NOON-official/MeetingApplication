import { Outlet } from "react-router";
import GlobalStyle from "./Style/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Outlet />
    </>
  );
}

export default App;
