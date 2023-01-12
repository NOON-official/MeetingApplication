import { createBrowserRouter } from "react-router-dom";

import Main from "./pages/main/index";
import NotFound from "./pages/errorpage/NotFound";
import App from "./App";
import Guide from "./pages/main/guide";
import Matching from "./pages/main/matching";
import MyInfo from "./pages/main/myinfo";
import Team from "./pages/apply/team";
import College from "./pages/apply/college";
import KakaoCallback from "./util/login/MainPageLoginCallback";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Main />,
      },
      {
        path: "guide",
        element: <Guide />,
      },
      {
        path: "matching",
        element: <Matching />,
      },
      {
        path: "myinfo",
        element: <MyInfo />,
      },
      {
        path: "apply/team",
        element: <Team />,
      },
      {
        path: "apply/college",
        element: <College />,
      },
    {
      path: '/auth/kakao/main/callback',
      element:<KakaoCallback/>,}
    ],
  },
]);

export default Router;
