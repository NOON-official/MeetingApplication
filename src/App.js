import { Outlet } from 'react-router-dom';
import AntdCustomization from './style/AntdCustomization';
import GlobalStyle from './style/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <AntdCustomization />
      <Outlet />
    </>
  );
}

export default App;
