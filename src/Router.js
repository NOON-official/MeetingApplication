import { createBrowserRouter } from 'react-router-dom';

import Main from './pages/main/index';
import NotFound from './pages/errorpage/NotFound';
import App from './App';
import Guide from './pages/main/guide';
import Matching from './pages/main/matching';
import MyInfo from './pages/main/myinfo';
import KakaoCallback from './util/login/MainPageLoginCallback';
import User from './pages/main/myinfo/user';
import Ticket from './pages/main/myinfo/ticket';
import Myteam from './pages/main/matching/myteam';
import Result from './pages/main/matching/result';
import Apply1 from './pages/apply/apply1';
import Invite from './pages/apply/invite';
import Apply2 from './pages/apply/apply2';
import Apply3 from './pages/apply/apply3';
import Position from './pages/apply/position';
import Apply4 from './pages/apply/apply4';
import Apply5 from './pages/apply/apply5';
import Apply6 from './pages/apply/apply6';
import Apply7 from './pages/apply/apply7';
import Certification from './pages/apply/certification';
import Agree from './pages/apply/agree';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Main />,
      },
      {
        path: 'guide',
        element: <Guide />,
      },
      {
        path: 'matching',
        element: <Matching />,
      },
      {
        path: 'matching/myteam',
        element: <Myteam />,
      },
      {
        path: 'matching/result',
        element: <Result />,
      },
      {
        path: 'myinfo',
        element: <MyInfo />,
      },
      {
        path: 'myinfo/:userId',
        element: <User />,
      },
      {
        path: 'myinfo/ticket',
        element: <Ticket />,
      },
      {
        path: 'apply/1',
        element: <Apply1 />,
      },
      {
        path: 'apply/invite',
        element: <Invite />,
      },
      {
        path: 'apply/2',
        element: <Apply2 />,
      },
      {
        path: 'apply/3',
        element: <Apply3 />,
      },
      {
        path: 'apply/3/position',
        element: <Position />,
      },
      {
        path: 'apply/4',
        element: <Apply4 />,
      },
      {
        path: 'apply/5',
        element: <Apply5 />,
      },
      {
        path: 'apply/6',
        element: <Apply6 />,
      },
      {
        path: 'apply/agree',
        element: <Agree />,
      },
      {
        path: 'apply/certification',
        element: <Certification />,
      },
      {
        path: 'apply/7',
        element: <Apply7 />,
      },
      {
        path: '/auth/kakao/main/callback',
        element: <KakaoCallback />,
      },
    ],
  },
]);

export default Router;
