// 1. 로그인 안되었을 때
// 2. 로그인 되었을 때 -2.1: 매칭 진행중, 2.2:매칭 실패: 2.3: 매칭 되었을 때
import { Container } from '../Elements/StyledComponent';
import { MobileBox, StyledDiv, StyledButton } from '../Elements/StyledComponent';
import Inprogress from './matchinginquires/LoginAndInprogress';
import Done from './matchinginquires/LoginAndDone';
import Fail from './matchinginquires/LoginAndFail';
import NewUser from './matchinginquires/NewUser';
import WaitingPage from './matchinginquires/WaitingPage';
import MatchingSuccessPage from './matchinginquires/MatchingSuccessPage';
import MatchingRejectPage from './matchinginquires/MatchingRejectPage';
import RejectedByCounterTeam from './matchinginquires/RejectedByCounterTeamPage';
import client from '../../api';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const MatchingInquire = () => {
  const [userState, setUserState] = useState(
    window.localStorage.getItem('matchingStatus') ? window.localStorage.getItem('matchingStatus') : null,
  );
  let status;
  let isLogin = useSelector((state) => state.userLogin);
  let ourteamId = window.localStorage.getItem('ourteamId') && window.localStorage.getItem('ourteamId');
  useEffect(() => {
    if (isLogin) {
      if (ourteamId != -1) {
        client
          .get(`api/team/page/${ourteamId}`)
          .then((res) => {
            setUserState(res.data.data.pageNum);
            status = res.data.data.pageNum;
          })
          .then(() => {
            window.localStorage.removeItem('matchingStatus');
          })
          .then(() => {
            window.localStorage.setItem('matchingStatus', status);
          })
          .catch((err) => {});
      }
    }
  }, []);
  const MatchingInquirePage = useCallback(() => {
    if (userState == 3) {
      return <Inprogress />;
    } else if (userState == 4) {
      return <Fail />;
    } else if (userState == 5) {
      return <Done />;
    } else if (userState == 6) {
      return <WaitingPage />;
    } else if (userState == 7) {
      return <MatchingSuccessPage />;
    } else if (userState == 8) {
      return <MatchingRejectPage />;
    } else if (userState == 9) {
      return <RejectedByCounterTeam />;
    } else {
      return <NewUser />;
    }
  }, [userState]);
  return (
    <Container height={'100%'} bg="#f8f3f3">
      <MobileBox overflow="auto">
        {/** white space box */}

        {/** return pages for each section 1.user, 1.1 user and matching in progress, 1.2 matching fail, 1.3matching done 2.not user */}
        <MatchingInquirePage />
      </MobileBox>
    </Container>
  );
};

export default MatchingInquire;
