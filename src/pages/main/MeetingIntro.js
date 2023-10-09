import styled from 'styled-components';
import { Button, Carousel } from 'antd';
import { useCallback, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CounterBox from '../../components/CounterBox';
import { ReactComponent as MainImg } from '../../asset/svg/MeetingHaek.svg';
import { ReactComponent as SliderLArrow } from '../../asset/svg/SliderLArrow.svg';
import { ReactComponent as SliderRArrow } from '../../asset/svg/SliderRArrow.svg';
import Section from '../../components/Section';
import SliderBox2 from '../../components/Slider/SliderBox2';
import Review from '../myinfo/review/review';
import Main1 from '../../asset/img/ver2Main1.png';
import Main2 from '../../asset/img/ver2Main2.png';
import Main3 from '../../asset/img/ver2Main3.png';
import Main4 from '../../asset/img/ver2Main4.png';
import Main5 from '../../asset/img/ver2Main5.png';
import { useGetTeamMembersCountTotalQuery } from '../../features/backendApi';
import { useGetAgreementsQuery } from '../../features/api/userApi';
import MainFooter from '../../layout/footer/MainFooter';
import BottomFooter from '../../layout/footer/BottomFooter';
import HeaderBottomLayout from '../../layout/HeaderBottomLayout';

export default function MeetingIntro() {
  const navigate = useNavigate();
  const slider2 = useRef(null);
  const params = new URLSearchParams(window.location.search);
  const referralId = params.get('referralId');

  const { accessToken } = useSelector((state) => state.user);
  const { data: userCountData } = useGetTeamMembersCountTotalQuery();
  const { data: agreements } = useGetAgreementsQuery(undefined, {
    skip: !accessToken,
  });

  useEffect(() => {
    if (referralId !== null) {
      sessionStorage.setItem('referralId', referralId);
    }
  }, [referralId]);

  const handleStart = useCallback(() => {
    if (!accessToken) {
      navigate('/myinfo');
    } else if (!agreements) {
      navigate('/apply/agree');
    } else {
      navigate(`/apply/1`);
    }
  }, [accessToken, agreements]);

  return (
    <HeaderBottomLayout backgroundColor="#f8f3f3">
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
        </ImgBox>
      </Section>

      <Section>
        <Review />
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
        <Imgs>
          <SImg src={Main1} />
          <SImg src={Main2} />
          <SImg src={Main3} />
          <SImg src={Main4} />
          <SImg src={Main5} />
        </Imgs>
        <Footer style={{ textAlign: 'center' }}>
          <FixedButton onClick={handleStart}>지금 바로 미팅하기</FixedButton>
        </Footer>
      </Section>
      <MainFooter />
      <BottomFooter />
    </HeaderBottomLayout>
  );
}

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
  padding-left: 12px;
  padding-right: 12px;
  background: rgba(255, 191, 191, 0.15);
  border-radius: 10px;
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

const Footer = styled.div`
  position: sticky;
  bottom: 100px;
`;

const FixedButton = styled(Button).attrs({ type: 'primary', size: 'large' })`
  width: 80%;
  margin: 3% auto;
  &.ant-btn {
    height: 56px;
    background-color: #ffa1a1;
  }
  &:hover {
    cursor: pointer;
  }
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

const Imgs = styled.div`
  margin-top: 50px;
`;

const SImg = styled.img`
  width: 100%;
`;
