import { Outlet } from "react-router-dom";
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
