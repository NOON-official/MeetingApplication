import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import LoginMatchOk from '../../components/MatchingBox/LoginMatchOk';
import LoginNoStart from '../../components/MatchingBox/LoginNoStart';
import LoginWaitMatch from '../../components/MatchingBox/LoginWaitMatch';
import LoginWaitOtherTeam from '../../components/MatchingBox/LoginWaitOtherTeam';
import LoginMatchComplete from '../../components/MatchingBox/LoginMatchComplete';
import LoginMatchFail from '../../components/MatchingBox/LoginMatchFail';
import LoginOtherTeamRefused from '../../components/MatchingBox/LoginOtherTeamRefused';
import LoginNoAnswer from '../../components/MatchingBox/LoginNoAnswer';
import LoginMatchFailed from '../../components/MatchingBox/LoginMatchFailed';
import LoginRefuse from '../../components/MatchingBox/LoginRefuse';
import NoLogin from '../../components/MatchingBox/NoLogin';
import MainFooter from '../../layout/footer/MainFooter';
import MainLayout from '../../layout/MainLayout';
import {
  useGetUserTeamIdDataQuery,
  useGetMatchingStatusQuery,
} from '../../features/backendApi';

function Matching() {
  const { data: userTeamId } = useGetUserTeamIdDataQuery();
  const { data: matchingStatus } = useGetMatchingStatusQuery();
  const { accessToken } = useSelector((state) => state.user);

  const state = 8;

  console.log(userTeamId?.teamId);
  console.log(matchingStatus);

  const MatchingBox = useMemo(() => {
    if (!accessToken) {
      return <NoLogin />; // 완료
    }
    if (state === 1) {
      return <LoginNoStart />; // 완료
    }
    if (state === 2) {
      return (
        <LoginWaitMatch teamId={userTeamId?.teamId} status={matchingStatus} />
      ); // 수정하기 안됌!!!!
    }
    if (state === 3) {
      return (
        <LoginMatchOk teamId={userTeamId?.teamId} status={matchingStatus} />
      ); // 상대방정보 api 어디??!!!!
    }
    if (state === 4) {
      return <LoginWaitOtherTeam />;
    } // 완료
    if (state === 5) {
      return <LoginMatchComplete />;
    } // 상대방정보 api 어디??!!!!
    if (state === 6) {
      return <LoginMatchFail />;
    } // 완료
    if (state === 7) {
      return <LoginOtherTeamRefused />;
    } // 완료
    if (state === 8) {
      return <LoginNoAnswer />;
    }
    if (state === 9) {
      return <LoginRefuse />;
    }
    if (state === 10) {
      return <LoginMatchFailed />;
    }
    return null;
  });

  return (
    <MainLayout>
      {MatchingBox}
      <MainFooter />
    </MainLayout>
  );
}

export default Matching;
