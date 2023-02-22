import { useEffect, useMemo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';

import LoginMatchOk from '../../components/MatchingBox/LoginMatchOk';
import LoginNoStart from '../../components/MatchingBox/LoginNoStart';
import LoginWaitMatch from '../../components/MatchingBox/LoginWaitMatch';
import LoginWaitOtherTeam from '../../components/MatchingBox/LoginWaitOtherTeam';
import LoginMatchComplete from '../../components/MatchingBox/LoginMatchComplete';
import LoginMatchFail from '../../components/MatchingBox/LoginMatchFail';
import LoginOtherTeamRefused from '../../components/MatchingBox/LoginOtherTeamRefused';
import LoginNoAnswer from '../../components/MatchingBox/LoginNoAnswer';
import LoginRefuse from '../../components/MatchingBox/LoginRefuse';
import NoLogin from '../../components/MatchingBox/NoLogin';
import MainFooter from '../../layout/footer/MainFooter';
import MainLayout from '../../layout/MainLayout';
import backend from '../../util/backend';

function Matching() {
  const [myteamId, setMyteamId] = useState('');
  const [matchingStatus, setMatchingStatus] = useState('');
  const { accessToken } = useSelector((state) => state.user);

  const getInformation = useCallback(async () => {
    const teamid = await backend.get(`/users/team-id`);
    const matchingstatus = await backend.get('/users/matchings/status');

    setMyteamId(teamid.data.teamId);
    setMatchingStatus(matchingstatus.data.matchingStatus);
  }, []);

  useEffect(() => {
    getInformation();
  }, []);

  const MatchingBox = useMemo(() => {
    if (!accessToken) {
      return <NoLogin />; // 로그인안했을때!
    }
    if (matchingStatus === null) {
      return <LoginNoStart />; // 매칭신청전!
    }
    if (matchingStatus === 'APPLIED') {
      return <LoginWaitMatch teamId={myteamId} />; // 매칭신청완료!
    }
    if (matchingStatus === 'MATCHED') {
      return <LoginMatchOk />; // 매칭완료!
    }
    if (matchingStatus === 'OURTEAM_ACCEPTED') {
      return <LoginWaitOtherTeam />; // 우리팀 수락!
    }
    if (matchingStatus === 'SUCCEEDED') {
      return <LoginMatchComplete />; // 매칭 성공!
    }
    if (matchingStatus === 'FAILED') {
      return <LoginMatchFail teamId={myteamId} />; // 매칭실패!!
    }
    if (matchingStatus === 'PARTNER_TEAM_REFUSED') {
      return (
        <LoginOtherTeamRefused teamId={myteamId} /> // 상대팀 거절!
      );
    }
    if (matchingStatus === 'NOT_RESPONDED') {
      return <LoginNoAnswer teamId={myteamId} />; // 무응답!
    }
    if (matchingStatus === 'OURTEAM_REFUSED') {
      return <LoginRefuse teamId={myteamId} />; // 우리팀 거절!
    }
    return null;
  });

  console.log(myteamId);
  console.log(matchingStatus);

  return (
    <MainLayout>
      {MatchingBox}
      <MainFooter />
    </MainLayout>
  );
}

export default Matching;
