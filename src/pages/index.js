/* eslint-disable no-restricted-globals */
/* eslint-disable no-unsafe-optional-chaining */
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import { Button } from 'antd';
import theme from '../style/theme';
import CounterBox from '../components/CounterBox';
import { ReactComponent as MainImg } from '../asset/svg/MeetingHaek.svg';
import PresentBox from '../asset/img/Present.png';
import Main1 from '../asset/img/Main1.png';
import Main2 from '../asset/img/Main2.png';
import Main3 from '../asset/img/Main3.png';
import Main4 from '../asset/img/Main4.png';
import Main5 from '../asset/img/Main5.png';
import Main6 from '../asset/img/Main6.png';
import Clock from '../asset/svg/MainClock.svg';
import MainLayout from '../layout/MainLayout';
import BottomFooter from '../layout/footer/BottomFooter';
import MainFooter from '../layout/footer/MainFooter';
import Section from '../components/Section';
import backend from '../util/backend';
import {
  useGetTeamCountQuery,
  useGetTeamMembersCountTotalQuery,
  useGetUserAgreementsQuery,
} from '../features/backendApi';
import ChannelTalk from '../asset/ChannelTalk';

function Main() {
  const params = new URLSearchParams(window.location.search);
  const referralId = params.get('referralId');
  const { finishedStep } = useSelector((store) => store.apply);
  const { accessToken } = useSelector((state) => state.user);
  const { data: teamData } = useGetTeamCountQuery();
  const { data: userCountData } = useGetTeamMembersCountTotalQuery();
  const [matchingStatus, setMatchingStatus] = useState('');
  const { data: agreementsData } = useGetUserAgreementsQuery();

  const navigate = useNavigate();

  const getMatchingInfo = useCallback(async () => {
    const matchingstatus = await backend.get('/users/matchings/status');
    setMatchingStatus(matchingstatus.data.matchingStatus);
  }, []);

  useEffect(() => {
    if (referralId !== null) {
      sessionStorage.setItem('referralId', referralId);
    }
    getMatchingInfo();
  }, [getMatchingInfo, referralId]);

  const handleStart = useCallback(() => {
    if (!accessToken) {
      navigate('/myinfo');
    } else if (['NOT_RESPONDED', null].includes(matchingStatus)) {
      if (!agreementsData) {
        navigate('/apply/agree');
      } else {
        navigate(`/apply/1`);
      }
    } else {
      window.alert('현재 매칭이 진행 중이라 새로운 미팅신청이 불가합니다');
    }
  }, [accessToken, matchingStatus, navigate, agreementsData, finishedStep]);

  // const teamsPerRound = teamData?.['teamsPerRound'];
  // const twoman = teamData?.['2vs2']['male'];
  // const twogirl = teamData?.['2vs2']['female'];
  const threeman = teamData?.['3vs3']['male'];
  const threegirl = teamData?.['3vs3']['female'];
  const threemanProportion = threeman / (threeman + threegirl);
  const threegirlProportion = threegirl / (threeman + threegirl);
  const threemanProportionNum = Math.round(
    (threeman / (threeman + threegirl)) * 10,
  );
  const threegirlProportionNum = 10 - threemanProportionNum;

  return (
    <MainLayout>
      <div style={{ textAlign: 'center' }}>
        <Section>
          <CountTitle>
            <MainTitle>
              지금까지 &nbsp;
              <CounterBox end={userCountData?.memberCount || 0} /> 명이
              미팅학개론과 함께했어요
            </MainTitle>
          </CountTitle>
          <ImgBox>
            <MainImg />
            <SImg
              src={PresentBox}
              onClick={() => {
                navigate('/myinfo');
              }}
            />
          </ImgBox>
        </Section>
        <Section my="50px" style={{ marginBottom: '25px' }}>
          <TopTitle>현재 성비</TopTitle>
          <MatchingBox>
            <SubTitle>3 : 3 미팅</SubTitle>
            <TotalBar>
              <Number>{5}</Number>
              <LeftBar>
                <LeftBarProgress progress={1 / 2} />
              </LeftBar>
              <RightBar>
                <RightBarProgress progress={1 / 2} />
              </RightBar>
              <Number>{5}</Number>
            </TotalBar>
          </MatchingBox>
        </Section>
        <Section my="50px" style={{ marginTop: '25px' }}>
          <TopTitle>소요 시간</TopTitle>
          <TimeBox>
            <SubTitle2>최근 3일 동안 평균</SubTitle2>
            <AverageTime>
              <CImg src={Clock} />
              <AverageTimeNumber>
                <Pink>
                  {4}시간 {37}분
                </Pink>{' '}
              </AverageTimeNumber>
              <AverageTimeDescription>
                안에 매칭되었어요!
              </AverageTimeDescription>
            </AverageTime>
          </TimeBox>
        </Section>
        <Section my="50px" center style={{ marginBottom: '30px' }}>
          <SImg2 src={Main1} />
          <SImg2 src={Main2} />
          <SImg2 src={Main3} />
          <SImg2 src={Main4} />
          <SImg2 src={Main5} />
          <SImg2 src={Main6} />
        </Section>
        <FixedButton onClick={handleStart}>지금 바로 미팅하기</FixedButton>
      </div>
      <MainFooter />
      <BottomFooter />
      <div>{ChannelTalk.hideChannelButton()}</div>
    </MainLayout>
  );
}

export default Main;

const CountTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const MainTitle = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #635e5e;
  font-weight: 400;
  font-size: 14px;
  height: 33px;
  width: 290px;
  background: rgba(255, 191, 191, 0.15);
  border-radius: 10px;
`;

const TopTitle = styled.div`
  margin-left: 5%;
  font-weight: 300;
  font-size: 15px;
  color: #000000;
`;

const ImgBox = styled.div`
  margin-right: 25px;
  position: relative;
  max-width: 100%;
  display: flex;
  justify-content: center;

  > svg {
    width: 290px;
    height: auto;
  }
`;

const SImg = styled.img`
  position: absolute;
  bottom: -8%;
  right: 5%;
  &:hover {
    cursor: pointer;
  }
`;

const SImg2 = styled.img`
  width: 100%;
`;

const MatchingBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 7px;
  font-weight: 300;
  font-size: 20px;
  padding: 10px;
  height: auto;
  background: #ffffff;
  border-radius: 10px;
  text-align: center;
`;

const TimeBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 7px;
  font-weight: 300;
  font-size: 20px;
  padding: 10px;
  height: auto;
  background: #ffffff;
  border-radius: 10px;
  text-align: left;
`;

// const Title = styled.p`
//   margin-top: 5%;
//   width: 100%;
//   color: ${theme.pink};
// `;

const SubTitle = styled.p`
  width: 100%;
  font-weight: 300;
  font-size: 14px;
  color: black;
  margin-top: 5px;
  padding-bottom: 10px;
`;

const TotalBar = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 12px;
`;

const LeftBar = styled.div`
  display: flex;
  justify-content: flex-start;
  position: relative;
  height: 18px;
  background: white;
  border: 1px solid #f1ecec;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const RightBar = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  height: 18px;
  background: white;
  border: 1px solid #f1ecec;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const LeftBarProgress = styled.div`
  max-width: 220px;
  width: ${({ progress }) => (progress ? progress * 220 : 0)}px;
  height: 18px;
  background: #bfe0ff;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const RightBarProgress = styled.div`
  max-width: 220px;
  width: ${({ progress }) => (progress ? progress * 220 : 0)}px;
  height: 18px;
  background: #ffbfbf;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const Number = styled.p`
  width: 10px;
  padding: 0 10px;
  font-weight: 300;
  font-size: 14px;
  color: #4a4a4a;
  padding-top: 3px;
`;

const FixedButton = styled(Button).attrs({ type: 'primary', size: 'large' })`
  width: 75%;
  position: sticky;
  bottom: 120px;
  margin: 0 auto;
  &.ant-btn {
    height: 56px;
    background-color: #ffa1a1;
  }
  &:hover {
    cursor: pointer;
  }
`;

const Pink = styled.span`
  color: ${theme.pink};
  font-size: 22px;
`;

const AverageTime = styled.div`
  display: flex;
  justify-content: center;
  width: 260px;
  text-align: left;
  padding-bottom: 5px;
`;

const AverageTimeNumber = styled.p`
  font-weight: 500;
  font-size: 35px;
  color: black;
  display: inline-block;
  width: 105px;
`;

const AverageTimeDescription = styled.p`
  font-weight: 300;
  font-size: 16px;
  color: black;
  display: inline-block;
  width: 120px;
  padding-top: 15px;
  padding-left: 5px;
`;

const SubTitle2 = styled.div`
  width: 260px;
  font-weight: 300;
  font-size: 14px;
  color: #4a4a4a;
  margin-top: 5px;
  padding-left: 12px;
`;

const CImg = styled.img`
  display: inline-block;
  width: 31px;
  padding-top: 5px;
`;
