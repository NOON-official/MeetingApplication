import styled from 'styled-components';
import { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Slider } from 'antd';
import theme from '../../style/theme';
import ApplyLayout from '../../layout/ApplyLayout';
import ApplyButton from '../../components/ApplyButton';
import ProgressBar from '../../components/ProgressBar';
import { ReactComponent as Bottom } from '../../asset/svg/Apply5Bottom.svg';
import { submitDrink } from '../../features/apply';
import IsPageCompleteModal from '../../components/Modal/IsPageCompleteModal';
import ChannelTalk from '../../asset/ChannelTalk';
import ChangeCountButton from '../../components/ChangeCountButton';

export default function ApplyDrink() {
  const [openModal, setOpenModal] = useState(false);
  const { finishedStep, drink, memberCount, moreMember } = useSelector(
    (store) => store.apply,
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [alchol, setAlchol] = useState(drink);
  const [changeCount, setChangeCount] = useState(moreMember);

  useEffect(() => {
    if (finishedStep < 5) {
      window.alert('잘못된 접근입니다');
      navigate(`/apply/${finishedStep + 1}`);
    }
  }, [finishedStep]);

  const marks2 = {
    1: { label: <SliderText>Level 1</SliderText> },
    2: { label: <SliderText>2</SliderText> },
    3: { label: <SliderText>3</SliderText> },
    4: { label: <SliderText>4</SliderText> },
    5: { label: <SliderText>5</SliderText> },
  };

  const trackStyle = {
    backgroundColor: '#EB8888',
  };

  const setModal = (bool) => {
    setOpenModal(bool);
  };

  const handleBefore = useCallback(() => {
    navigate('/apply/5');
  });

  const handleSubmit = useCallback(() => {
    if (!alchol) {
      setOpenModal(true);
      return;
    }
    dispatch(
      submitDrink({
        drink: alchol,
        moreMember: changeCount,
      }),
    );
    navigate('/apply/kakaoId');
  }, [alchol, changeCount]);

  return (
    <ApplyLayout>
      <IsPageCompleteModal open={openModal} setModal={setModal} />
      <ProgressBar page={5} />

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

      <Title>
        <Maintitle>잠깐, 마지막으로!</Maintitle>
        <Subtitle>미팅 인원 변경이 가능하다면 모두 체크해주세요</Subtitle>
      </Title>

      <ChangeCountButton
        count={memberCount}
        changeCount={changeCount}
        setChangeCount={setChangeCount}
      />

      <SBottom />
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

const Title = styled.div`
  width: 90%;
  margin-top: 8%;
`;

const Maintitle = styled.div`
  width: 100%;
  font-family: 'Nanum JungHagSaeng';
  font-weight: 400;
  font-size: 35px;
`;

const Pink = styled.span`
  color: ${theme.pink};
`;

const Subtitle = styled.p`
  margin-top: 4%;
  color: #aaaaaa;
  font-weight: 400;
  font-size: 13px;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 6%;
  padding-bottom: 5%;
`;

const ButtonBox2 = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  justify-content: space-between;
  margin-top: 5%;
`;

const SSlider = styled(Slider)`
  margin-top: 7%;
  width: 85%;
  .custom-slider .ant-slider-mark-text {
    display: none;
  }
  .custom-slider .ant-slider-mark-text-active {
    display: block;
  }

  :where(.css-dev-only-do-not-override-sagpa3).ant-slider
    .ant-slider-handle::after {
    box-shadow: 0 0 0 2px #eb8888;
  }

  :where(.css-dev-only-do-not-override-sagpa3).ant-slider
    .ant-slider-dot-active {
    display: none;
  }
`;

const SliderText = styled.p`
  font-weight: 400;
  color: #b79292;
  font-size: 20px;
  font-family: 'Nanum JungHagSaeng';
`;

const AlcholInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 14px;
  margin-top: 8%;
  width: 90%;
  color: #eb8888;
`;

const AlcholContent = styled.div`
  text-align: center;
`;

const SBottom = styled(Bottom)`
  margin-left: 57%;
  margin-top: 5%;
`;
