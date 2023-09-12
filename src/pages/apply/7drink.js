import styled from 'styled-components';
import { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Slider } from 'antd';
import theme from '../../style/theme';
import ApplyLayout from '../../layout/ApplyLayout';
import ApplyButton from '../../components/Button/ApplyButton';
import ProgressBar from '../../components/Apply/ProgressBar';
import { submitStep7 } from '../../features/apply';
import IsPageCompleteModal from '../../components/Modal/Apply/IsPageCompleteModal';
import ChannelTalk from '../../asset/ChannelTalk';
import ChangeCountButton from '../../components/Button/ChangeCountButton';
import { ReactComponent as Whale } from '../../asset/svg/Whale.svg';
import { ReactComponent as Alchol } from '../../asset/svg/Alchol.svg';

export default function Apply7Page() {
  const [openModal, setOpenModal] = useState(false);
  const { finishedStep, drink, memberCount, memberCounts } = useSelector(
    (store) => store.apply,
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [alchol, setAlchol] = useState(drink);
  const [changeCount, setChangeCount] = useState(memberCounts);

  useEffect(() => {
    if (finishedStep < 6) {
      window.alert('잘못된 접근입니다');
      navigate(`/apply/${finishedStep + 1}`);
    }
  }, [finishedStep]);

  const marks2 = {
    1: {
      label: alchol === 1 && (
        <>
          <SAlchol />
          <SliderText>Level 1</SliderText>
        </>
      ),
    },
    2: {
      label: alchol === 2 && (
        <>
          <SAlchol />
          <SliderText>Level 2</SliderText>
        </>
      ),
    },
    3: {
      label: alchol === 3 && (
        <>
          <SAlchol />
          <SliderText>Level 3</SliderText>
        </>
      ),
    },
    4: {
      label: alchol === 4 && (
        <>
          <SAlchol />
          <SliderText>Level 4</SliderText>
        </>
      ),
    },
    5: {
      label: alchol === 5 && (
        <>
          <SWhale />
          <SliderText>Level 5</SliderText>
        </>
      ),
    },
  };

  const trackStyle = {
    backgroundColor: '#EB8888',
  };

  const setModal = (bool) => {
    setOpenModal(bool);
  };

  const handleBefore = useCallback(() => {
    navigate('/apply/6prefAge');
  });

  const handleSubmit = useCallback(() => {
    if (!alchol) {
      setOpenModal(true);
      return;
    }
    dispatch(
      submitStep7({
        drink: alchol,
        memberCounts: changeCount,
      }),
    );
    navigate('/apply/8kakaoId');
  }, [alchol, changeCount]);

  return (
    <ApplyLayout>
      <IsPageCompleteModal open={openModal} setModal={setModal} />
      <ProgressBar page={7} />

      <Title>
        <Maintitle>
          <Pink>미팅</Pink>은 어땠으면 좋겠어요?
        </Maintitle>
        <Subtitle>우리 팀의 평균 주량을 알려주세요</Subtitle>
      </Title>

      <AlcholInfo>
        <AlcholContent>반 병</AlcholContent>
        <AlcholContent>한 병</AlcholContent>
        <AlcholContent>한 병 반</AlcholContent>
        <AlcholContent>두 병</AlcholContent>
        <AlcholContent>술고래</AlcholContent>
      </AlcholInfo>
      <SSlider
        onChange={setAlchol}
        value={alchol}
        trackStyle={trackStyle}
        tooltip={{
          open: false,
        }}
        dots
        marks={marks2}
        max={5}
        min={1}
      />

      <Title2>
        <Maintitle>잠깐, 마지막으로!</Maintitle>
        <Subtitle>미팅 인원 변경이 가능하다면 모두 체크해주세요</Subtitle>
      </Title2>

      <CountChangeInfo>
        <ChangeCountButton
          count={memberCount}
          changeCount={changeCount}
          setChangeCount={setChangeCount}
        />
      </CountChangeInfo>

      <Footer>
        <ButtonBox2>
          <ApplyButton onClick={handleBefore}>이전</ApplyButton>
          <ApplyButton onClick={handleSubmit}>다음</ApplyButton>
        </ButtonBox2>
      </Footer>
      <div>{ChannelTalk.hideChannelButton()}</div>
    </ApplyLayout>
  );
}

const SAlchol = styled(Alchol)`
  transform: translateX(2%) translateY(-60%);
`;

const SWhale = styled(Whale)`
  transform: translateX(-1%) translateY(-55%);
`;

const Title = styled.div`
  width: 90%;
  height: 60px;
  margin-top: 7%;
`;

const Title2 = styled.div`
  width: 90%;
  height: 60px;
  margin-top: 13%;
`;

const Maintitle = styled.div`
  width: 100%;
  font-weight: 500;
  font-size: 22px;
`;

const Pink = styled.span`
  color: ${theme.pink};
`;

const Subtitle = styled.p`
  margin-top: 4%;
  color: #aaaaaa;
  font-weight: 400;
  font-size: 15px;
`;

const CountChangeInfo = styled.div`
  margin-top: 10px;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: auto 0 10%;
`;

const ButtonBox2 = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  justify-content: space-between;
  margin-top: 5%;
`;

const SSlider = styled(Slider)`
  margin: 5% 0;
  width: 85%;

  .custom-slider .ant-slider-mark-text {
    display: none;
  }
  .custom-slider .ant-slider-mark-text-active {
    display: block;
  }
  .ant-slider-step .ant-slider-dot .ant-slider-dot-active {
    display: block;
  }
  .ant-slider-dot-active {
    display: none;
  }
`;

const SliderText = styled.p`
  margin-top: -80%;
  font-weight: 400;
  color: #b79292;
  font-size: 20px;
  font-family: 'Nanum JungHagSaeng';
`;

const AlcholInfo = styled.div`
  margin: 3% 0;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  width: 90%;
  color: #eb8888;
`;

const AlcholContent = styled.div`
  position: relative;
  text-align: center;
`;
