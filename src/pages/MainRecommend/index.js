import { useEffect, useCallback, useState } from 'react';

import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as MainDoc } from '../../asset/svg/MainDoc.svg';
import { ReactComponent as UniversityMarkPink } from '../../asset/svg/UniversityMarkPink.svg';
import { ReactComponent as MainGroup } from '../../asset/svg/MainGroup.svg';
import backend from '../../util/backend';
import NoProfile from '../../components/MainRecommend/NoProfile';
import Timer from './timer';
import MyTeamProfileModal from '../../components/MainRecommend/MyTeamProfileModal';
import RecommendList from './recommendList';
import RecommendModal from '../../components/Modal/RecommendModal';

export default function Recommend() {
  const [openMyTeamProfile, setOpenMyTeamProfile] = useState(false);
  const myTeamId = localStorage.getItem('myTeamId');
  const navigate = useNavigate();

  const setModal = (bool) => {
    setOpenMyTeamProfile(bool);
  };

  const getInformation = useCallback(async () => {
    const teamid = await backend.get(`/users/team-id`);
    const profile = await backend.get(`/teams/${teamid.data.teamId}`);
    localStorage.setItem('myTeamId', teamid.data.teamId);
    localStorage.setItem('myProfile', JSON.stringify(profile.data));
  }, []);

  useEffect(() => {
    getInformation();
  }, []);

  return (
    <>
      <RecommendModal />
      <MyTeamProfileModal open={openMyTeamProfile} setModal={setModal} />
      {myTeamId ? (
        <Section>
          <MainButton onClick={() => setOpenMyTeamProfile(true)}>
            <SMainDoc />
            <BtnMainTitle>우리 팀 프로필 조회</BtnMainTitle>
          </MainButton>
          <MainButton>
            <SUniversityMarkPink />
            <BtnTitle>
              <BtnMainTitle>학교 인증하러 가기</BtnMainTitle>
              <BtnSubtitle>아직 학교 인증 전이에요</BtnSubtitle>
            </BtnTitle>
          </MainButton>
        </Section>
      ) : (
        <Section>
          <MainButton onClick={() => navigate('/apply/1')}>
            <SMainGroup />
            <BtnMainTitle>우리 팀 프로필 만들기</BtnMainTitle>
          </MainButton>
          <MainButton>
            <SMainDoc />
            <BtnMainTitle>우리 팀 프로필 조회</BtnMainTitle>
          </MainButton>
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

      {myTeamId ? <RecommendList teamId={myTeamId} /> : <NoProfile />}
    </>
  );
}

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin: 5% auto;
`;

const MainButton = styled.button`
  display: flex;
  align-items: center;
  margin-top: 5%;
  width: 100%;
  height: 70px;
  padding: 30px;
  border: none;
  border-radius: 10px;
  background-color: #ffe8e8;
  cursor: pointer;
`;

const SMainGroup = styled(MainGroup)`
  margin-right: 15px;
`;

const SMainDoc = styled(MainDoc)`
  margin-right: 15px;
`;

const SUniversityMarkPink = styled(UniversityMarkPink)`
  margin-right: 15px;
`;

const BtnTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const BtnMainTitle = styled.div`
  font-weight: 500;
`;

const BtnSubtitle = styled.div`
  color: #777777;
  font-size: 12px;
  font-weight: 300;
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
