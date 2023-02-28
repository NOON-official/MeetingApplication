import { Outlet } from 'react-router-dom';
import { getAnalytics } from 'firebase/analytics';
import AntdCustomization from './style/AntdCustomization';
import GlobalStyle from './style/global';
import app from './config/firebase';

function App() {
  getAnalytics(app);

  return (
    <>
      <GlobalStyle />
      <AntdCustomization />
      <Outlet />
    </>
  );
}

export default App;
