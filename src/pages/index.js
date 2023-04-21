/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unsafe-optional-chaining */
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useCallback, useEffect, useState, useRef } from 'react';
import { Button, Carousel } from 'antd';
import theme from '../style/theme';
import CounterBox from '../components/CounterBox';
import { ReactComponent as MainImg } from '../asset/svg/MeetingHaek.svg';
import Clock from '../asset/svg/MainClock.svg';
import { ReactComponent as SliderLArrow } from '../asset/svg/SliderLArrow.svg';
import { ReactComponent as WriteReview } from '../asset/svg/WriteReview.svg';
import { ReactComponent as SliderRArrow } from '../asset/svg/SliderRArrow.svg';
import PresentBox from '../asset/img/Present.png';
import Main1 from '../asset/img/Main1.png';
import Main2 from '../asset/img/Main2.png';
import Main3 from '../asset/img/Main3.png';
import Main4 from '../asset/img/Main4.png';
import Main5 from '../asset/img/Main5.png';
import Main6 from '../asset/img/Main6.png';
import MainLayout from '../layout/MainLayout';
import BottomFooter from '../layout/footer/BottomFooter';
import MainFooter from '../layout/footer/MainFooter';
import Section from '../components/Section';
import SliderBox from '../components/SliderBox';
import SliderBox2 from '../components/SliderBox2';
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

  const slider1 = useRef(null);
  const slider2 = useRef(null);

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
        <Section my="35px" style={{ marginTop: '25px' }}>
          <TopTitle>소요 시간</TopTitle>
          <TimeBox>
            <SubTitle2>최근 7일 동안 평균</SubTitle2>
            <AverageTime>
              <CImg src={Clock} />
              <AverageTimeNumber>
                <Pink>
                  {6}시간 {13}분
                </Pink>{' '}
              </AverageTimeNumber>
              <AverageTimeDescription>
                안에 매칭되었어요!
              </AverageTimeDescription>
            </AverageTime>
          </TimeBox>
        </Section>
        <Section>
          <Review>
            미팅 후기
            <SWriteReview
              onClick={() => {
                window.open('https://forms.gle/Yk6tNrXkLbKseSqc9');
              }}
            />
          </Review>
          <Slider>
            <SliderLArrow onClick={() => slider1.current.prev()} />
            <SCarousel dots={false} ref={slider1} autoplay={4}>
              <SliderBox
                gender="여성"
                age="초반"
                star="5"
                text={
                  '처음 해본 미팅이었는데 되게 괜찮은 분들이\n나오셨어요!! 너무 재밌었고 그런 분들만\n나오시면 정말 자주 나갈것 같아요 ㅋㅋㅋ\n매칭 시스템도 깔끔하고 좋은것 같아요'
                }
              />
              <SliderBox
                gender="남성"
                age="중반"
                star="5"
                text={
                  '재밌었고 좋았어요! 거기서 마음에 드는\n분을 만나 이번주 주말에 애프터로 만나기로\n했어요! 이용료도 부담스럽진 않았어서 더욱\n괜찮았습니다 시간도 오래 안걸리고요👍'
                }
              />
              <SliderBox
                gender="여성"
                age="초반"
                star="4"
                text={
                  '지인추천이 아니라 처음에는 살짝 걱정\n되더라구요 그런데 실제로 만나보니 정말\n유쾌하고 좋은 분들이 나오셔서 좋은 시간\n보내고 왔어요! 감사합니다'
                }
              />
              <SliderBox
                gender="남성"
                age="후반"
                star="4"
                text={
                  '주변에 미팅 잡아달라고 할 사람 없으면\n쓰기 좋은 듯 소개팅도 해줬으면 좋겠다'
                }
              />
              <SliderBox
                gender="여성"
                age="중반"
                star="5"
                text={
                  '미팅 잡히는 속도가 빨라서 좋았습니다.\n가기 전에 어느정도 상대방의 정보를\n미리 알 수 있어서 좋았습니다. 이걸로 미팅\n초반에 어색할 때 얘기하기도 재밌었어요ㅎ'
                }
              />
              <SliderBox
                gender="남성"
                age="중반"
                star="5"
                text={
                  '좋은 인연들을 만났고 이후에도 또 약속을\n잡고 연락을 하며 이어나가고 있습니다.\n장소, 날짜, 성향 등을 미리 알고 미팅하니\n더 조율하기도 좋고 편했던 것 같습니다.'
                }
              />
            </SCarousel>
            <SliderRArrow onClick={() => slider1.current.next()} />
          </Slider>
          <AwardTitle>
            <BAwarditle>우리 팀 한 줄 어필 AWARDS</BAwarditle>
            <SAwardTitle>
              매달 재미있는 우리 팀 소개글을 선정해 선물을 드려요!
            </SAwardTitle>
          </AwardTitle>
          <Slider>
            <SliderLArrow onClick={() => slider2.current.prev()} />
            <SCarousel dots={false} ref={slider2} autoplay={4}>
              <SliderBox2
                rank="1"
                text={
                  '안녕하세요 성대 개그동아리 3인방 여자\n입니다 저희 셋이 번갈아 스탠딩업 코미디쇼\n진행할 예정입니다 이 미팅은 개그동아리\n3인방의 작은 데뷔무대가 될 것입니다\n여러분은 그저 저희의 망나니가 되어 칼춤을\n춰주시면 됩니다'
                }
              />
              <SliderBox2
                rank="2"
                text={
                  '안녕하세요 마약같은 남자들입니다. 그렇다고\n유아인처럼 마약은 하지 않았고요 그만큼\n중독성이 강하다~그런말이죠.(이건overdose)\n물론 마약떡볶이는 좋아합니다. 아 다시 한번\n말하지만 마약은 싫어해요.(이건 toxic)\n잘 부탁드려요(Say goodbye)'
                }
              />
              <SliderBox2
                rank="3"
                text={
                  '저희는 동덕여대 아이브 안유진, 에스파 닝닝,\n잇지 예지입니다^^ 월곡의 공주님들 출격\n합니다. 평균 주량은 한병+a 정도되구요,\n술게임은 안한지 꽤 됐지만,, 냅다 던져지면\n또 잘할 겁니다!^^ 다 들어와.'
                }
              />
              <SliderBox2
                rank="4"
                text={
                  '안녕하세요. 사라진 배꼽 삼총사 입니다.\n왜 사배삼이냐구요? 저희를 만나면 배꼽이\n빠질거니까요. 기대하십시오. 저~멀리 떨어져\n나갈 여러분의 배꼽ㅎㅎ'
                }
              />
              <SliderBox2
                rank="5"
                text={
                  '대한민국을 지키는 강인한 육군 전사들입니다.\n대한민국을 책임지는 만큼 여러분의 꿀잼\n미팅도 책임지겠습니다. 만약 재미없으면\n육사까지 <완전군장>으로 돌아가겠습니다.\n잘부탁드립니다.'
                }
              />
            </SCarousel>
            <SliderRArrow onClick={() => slider2.current.next()} />
          </Slider>
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
  font-weight: 400;
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

const Review = styled.div`
  padding-left: 15%;
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 15px;
  color: #000000;
`;

const Slider = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  justify-content: space-between;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const SCarousel = styled(Carousel)`
  width: 270px;
  height: 180px;
`;

const SWriteReview = styled(WriteReview)`
  margin-left: 10px;
  &:hover {
    cursor: pointer;
  }
`;

const AwardTitle = styled.div`
  padding-left: 15%;
  padding-bottom: 5px;
  margin-top: 30px;
`;

const BAwarditle = styled.div`
  width: 100%;
  font-weight: 400;
  font-size: 15px;
  color: #000000;
`;

const SAwardTitle = styled.div`
  margin-top: 8px;
  width: 100%;
  font-weight: 300;
  font-size: 12px;
  color: #4a4a4a;
`;
