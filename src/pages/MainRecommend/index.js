import { useEffect, useCallback } from 'react';
import styled from 'styled-components';
import backend from '../../util/backend';
import NoProfile from '../../components/MainRecommend/NoProfile';
import Timer from './timer';
import RecommendList from './recommendList';
import RecommendModal from '../../components/Modal/RecommendModal';
import MainMatchingHeader from '../../layout/header/MainMatchingHeader';

export default function Recommend() {
  const myTeamId = localStorage.getItem('myTeamId');

  const getInformation = useCallback(async () => {
    const teamid = await backend.get(`/users/team-id`);

    if (teamid.data.teamId !== null) {
      localStorage.setItem('myTeamId', teamid.data.teamId);
      const profile = await backend.get(`/teams/${teamid.data.teamId}`);
      localStorage.setItem('myProfile', JSON.stringify(profile.data));
    }
  }, []);

  useEffect(() => {
    getInformation();
  }, []);

  return (
    <>
      <RecommendModal />
      {myTeamId ? (
        <Section>
          <MainMatchingHeader title="프로필 조회" />
        </Section>
      ) : (
        <Section>
          <MainMatchingHeader title="프로필 만들기" />
        </Section>
      )}

      <Container>
        <Title>우리 팀 추천 매칭</Title>
        <Subtitle>
          우리 팀 프로필에 맞는 팀들을 추천해 드려요 <br /> 매일 밤 11시에 추천
          리스트가 업데이트 돼요!
        </Subtitle>
      </Container>

      <Timer />

      {myTeamId ? <RecommendList /> : <NoProfile />}
    </>
  );
}

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 5% auto;
`;

const Container = styled.div`
  width: 90%;
  margin: 5% auto;
`;

const Title = styled.div`
  margin: 5% 0;
  font-size: 18px;
  font-weight: 500;
`;

const Subtitle = styled.div`
  margin: 5% 0;
  color: #777777;
  font-size: 14px;
  font-weight: 300;
  line-height: 18px;
`;
