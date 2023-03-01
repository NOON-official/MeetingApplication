/* eslint-disable no-restricted-globals */
/* eslint-disable no-unsafe-optional-chaining */
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import theme from '../style/theme';

import { ReactComponent as MainImg } from '../asset/svg/MeetingHaek.svg';
import { ReactComponent as FixedButton } from '../asset/svg/FixedButton.svg';
import { ReactComponent as Main1 } from '../asset/svg/Main1.svg';
import { ReactComponent as Main2 } from '../asset/svg/Main2.svg';
import { ReactComponent as Main3 } from '../asset/svg/Main3.svg';
import { ReactComponent as Main4 } from '../asset/svg/Main4.svg';
import { ReactComponent as Main5 } from '../asset/svg/Main5.svg';
import ChannelTalk from '../asset/ChannelTalk';
import MainLayout from '../layout/MainLayout';
import BottomFooter from '../layout/footer/BottomFooter';
import MainFooter from '../layout/footer/MainFooter';
import Section from '../components/Section';
import backend from '../util/backend';
import {
  useGetTeamCountQuery,
  useGetTeamMembersCountOneWeekQuery,
} from '../features/backendApi';

function Main() {
  const params = new URLSearchParams(window.location.search);
  const referralId = params.get('referralId');
  const { finishedStep } = useSelector((store) => store.apply);
  const { accessToken } = useSelector((state) => state.user);
  const { data: teamData } = useGetTeamCountQuery();
  const { data: userCount } = useGetTeamMembersCountOneWeekQuery();
  const [matchingStatus, setMatchingStatus] = useState('');
  const [agreements, setAgreements] = useState('');
  const navigate = useNavigate();
  const setting = {
    pluginKey: process.env.REACT_APP_CHANNEL_TALK_PLUGIN,
    memberId: window.localStorage.id,
    profile: {
      name: window.localStorage.nickname,
    },
  };

  const getInformation = useCallback(async () => {
    try {
      await backend.get('/users/agreements');
      setAgreements('yes');
    } catch (e) {
      setAgreements(null);
    }
  }, [agreements]);

  const getMatchingInfo = useCallback(async () => {
    const matchingstatus = await backend.get('/users/matchings/status');
    setMatchingStatus(matchingstatus.data.matchingStatus);
  }, [matchingStatus]);

  useEffect(() => {
    if (referralId !== null) {
      sessionStorage.setItem('referralId', referralId);
    }
    getMatchingInfo();
    getInformation();
  }, []);

  const handleStart = useCallback(() => {
    if (!accessToken) {
      navigate('/myinfo');
    } else if (matchingStatus === null) {
      if (agreements === null) {
        navigate('/apply/agree');
      } else {
        navigate(`/apply/${finishedStep + 1}`);
      }
    } else {
      window.alert('현재 매칭이 진행 중이라 새로운 미팅신청이 불가합니다');
    }
  }, [matchingStatus, finishedStep, agreements]);

  const teamsPerRound = teamData?.['teamsPerRound'];
  const twoman = teamData?.['2vs2']['male'];
  const twogirl = teamData?.['2vs2']['female'];
  const threeman = teamData?.['3vs3']['male'];
  const threegirl = teamData?.['3vs3']['female'];

  return (
    <MainLayout>
      <Section>
        <ImgBox>
          <UserCountText>
            <CountBox>
              {!isNaN(userCount?.memberCount)
                ? Math.floor(userCount?.memberCount / 100)
                : '0'}
            </CountBox>
            <CountBox>
              {!isNaN(userCount?.memberCount)
                ? Math.floor((userCount?.memberCount % 100) / 10)
                : '0'}
            </CountBox>
            <CountBox>
              {!isNaN(userCount?.memberCount)
                ? Math.floor(userCount?.memberCount % 10)
                : '0'}
            </CountBox>
          </UserCountText>
          <MainImg />
        </ImgBox>
      </Section>

      <Section my="35px">
        <TopTitle>신청 현황</TopTitle>
        <MatchingBox>
          <SubTitle>2 : 2 미팅</SubTitle>
          <TotalBar>
            <Number>{twoman}</Number>
            <LeftBar>
              <LeftBarProgress progress={twoman / teamsPerRound} />
            </LeftBar>
            <RightBar>
              <RightBarProgress progress={twogirl / teamsPerRound} />
            </RightBar>
            <Number>{twogirl}</Number>
          </TotalBar>
          <SubTitle>3 : 3 미팅</SubTitle>
          <TotalBar>
            <Number>{threeman}</Number>
            <LeftBar>
              <LeftBarProgress progress={threeman / teamsPerRound} />
            </LeftBar>
            <RightBar>
              <RightBarProgress progress={threegirl / teamsPerRound} />
            </RightBar>
            <Number>{threegirl}</Number>
          </TotalBar>
          <Title>{`미팅별로 ${
            teamsPerRound * 2
          }팀이 채워지면 바로 매칭이 시작됩니다!`}</Title>
        </MatchingBox>
      </Section>

      <Section center>
        <Main1 width="90%" />
        <Main2 width="90%" />
        <Main3 width="90%" />
        <Main4 width="90%" />
        <Main5 width="90%" />
        <FixButton onClick={handleStart} />
      </Section>

      <div>{ChannelTalk.boot(setting)}</div>
      <MainFooter />
      <BottomFooter />
    </MainLayout>
  );
}

export default Main;

const TopTitle = styled.div`
  margin-left: 5%;
  font-weight: 400;
  font-size: 13px;
  color: #635e5e;
`;

const ImgBox = styled.div`
  margin-top: 35px;
  margin-right: 30px;
  position: relative;
  max-width: 100%;
  display: flex;
  justify-content: center;

  > svg {
    width: 85%;
    height: auto;
  }
`;

const UserCountText = styled.div`
  position: absolute;
  top: 6%;
  right: 22%;
`;

const CountBox = styled.span`
  position: relative;
  overflow: hidden;
  border: 0.3px solid rgba(197, 200, 206, 0.5);
  border-radius: 20px;
  padding: 2px;
  margin-left: 2px;
  font-size: 13px;
  background-color: white;
`;

const MatchingBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  font-family: 'Nanum JungHagSaeng';
  font-weight: 400;
  font-size: 20px;
  padding: 10px;
  height: 150px;
  background: #ffffff;
  border-radius: 10px;
  text-align: center;
`;

const Title = styled.p`
  margin-top: 5%;
  width: 100%;
  color: ${theme.pink};
`;

const SubTitle = styled.p`
  width: 100%;
  font-weight: 400;
  font-size: 18px;
  color: black;
  margin-top: 5px;
`;

const TotalBar = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;

const LeftBar = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  width: 110px;
  height: 18px;
  background: white;
  border: 1px solid #f1ecec;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const RightBar = styled.div`
  position: relative;
  width: 110px;
  height: 18px;
  background: white;
  border: 1px solid #f1ecec;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const LeftBarProgress = styled.div`
  position: absolute;
  max-width: 110px;
  width: ${({ progress }) => (progress ? progress * 110 : 0)}px;
  height: 18px;
  background: #bfe0ff;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const RightBarProgress = styled.div`
  position: absolute;
  max-width: 110px;
  width: ${({ progress }) => (progress ? progress * 110 : 0)}px;
  height: 18px;
  background: #ffbfbf;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const Number = styled.p`
  width: 10px;
  padding: 0 10px;
  font-family: 'Nanum JungHagSaeng';
  font-weight: 400;
  font-size: 15px;
`;

const FixButton = styled(FixedButton)`
  width: 75%;
  position: sticky;
  bottom: 40px;
  left: 10px;
  &:hover {
    cursor: pointer;
  }
`;
