import styled from 'styled-components';
import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Slider } from 'antd';
import BinaryButton from '../../components/BinaryButton';
import theme from '../../style/theme';
import ApplyLayout from '../../layout/ApplyLayout';
import ApplyButton from '../../components/ApplyButton';
import ProgressBar from '../../components/ProgressBar';
import { ReactComponent as Bottom } from '../../asset/svg/Apply5Bottom.svg';
import ChooseButton from '../../components/ChooseButton';
import { submitStep5 } from '../../features/apply';
import IsPageCompleteModal from '../../components/Modal/IsPageCompleteModal';

function Apply5() {
  const [openModal, setOpenModal] = useState(false);
  const { finishedStep, prefAge, prefSameUniversity, prefVibe, drink } =
    useSelector((store) => store.apply);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const marks = {
    20: { label: <SliderText>20세</SliderText> },
    29: { label: <SliderText>29세</SliderText> },
  };
  const marks2 = {
    1: { label: <SliderText>Level 1</SliderText> },
    2: { label: <SliderText>2</SliderText> },
    3: { label: <SliderText>3</SliderText> },
    4: { label: <SliderText>4</SliderText> },
    5: { label: <SliderText>5</SliderText> },
  };

  const [ageRange, setAgeRange] = useState(prefAge.length ? prefAge : [23, 25]);
  const [sameSchool, setSameSchool] = useState(prefSameUniversity);
  const [prefMood, setPrefMood] = useState(prefVibe);
  const [alchol, setAlchol] = useState(drink || 3);

  const setModal = (bool) => {
    setOpenModal(bool);
  };

  const onAfterChange = (value) => {
    setAgeRange(value);
  };

  const handleVibe = useCallback(
    (val, isChecked) => {
      if (isChecked) {
        setPrefMood([...prefMood, val]);
        return;
      }
      setPrefMood(prefMood.filter((v) => v !== val));
    },
    [prefMood],
  );

  const handleBefore = useCallback(() => {
    navigate('/apply/4');
  });

  const handleSubmit = useCallback(() => {
    if (prefMood.length === 0) {
      setOpenModal(true);
      return;
    }
    dispatch(
      submitStep5({
        prefAge: ageRange,
        prefSameUniversity: sameSchool,
        prefVibe: prefMood,
        drink: alchol,
      }),
    );
    navigate('/apply/6');
  });

  console.log(sameSchool);

  return (
    <ApplyLayout>
      <IsPageCompleteModal open={openModal} setModal={setModal} />
      <Title>
        <Maintitle>
          <Pink>어떤 상대팀</Pink>을 원하시나요?
        </Maintitle>
        <Subtitle>중복 선택이 가능해요</Subtitle>
      </Title>
      <Title2>
        <Maintitle2>평균 나이</Maintitle2>
        <Subtitle2>범위를 넓게 선택해야 매칭확률이 상승해요</Subtitle2>
      </Title2>
      <SSlider
        onAfterChange={onAfterChange}
        tooltip={{ placement: 'bottom' }}
        marks={marks}
        defaultValue={ageRange}
        max={29}
        min={20}
        range
      />
      <Title2>
        <Maintitle2>상대팀 학교</Maintitle2>
      </Title2>
      <ChooseBox>
        <BinaryButton
          state={sameSchool === 0}
          condition1="같은학교는 싫어요"
          condition2="상관없음"
          onChange={(result) => (result ? setSameSchool(0) : setSameSchool(1))}
        />
      </ChooseBox>
      <Title>
        <Maintitle>
          <Pink>미팅</Pink>은 어땠으면 좋겠어요?
        </Maintitle>
        <Subtitle>중복 선택이 가능해요</Subtitle>
      </Title>
      <Title2>
        <Maintitle2>분위기</Maintitle2>
      </Title2>
      <ChooseBox2>
        <ChooseButton
          isActive={prefMood.includes(1)}
          onChange={(isActive) => handleVibe(1, isActive)}
          content="코로나 때문에 못한 연애오늘?!"
        />
        <ChooseButton
          isActive={prefMood.includes(2)}
          onChange={(isActive) => handleVibe(2, isActive)}
          content="친구는 다다익선! 찐친 만들어 보자"
        />
        <ChooseButton
          isActive={prefMood.includes(3)}
          onChange={(isActive) => handleVibe(3, isActive)}
          content="왁자지껄 이 밤이 떠나가라!"
        />
        <ChooseButton
          isActive={prefMood.includes(4)}
          onChange={(isActive) => handleVibe(4, isActive)}
          content="술게임 한 수 배우러 왔습니다"
        />
        <ChooseButton
          isActive={prefMood.includes(5)}
          onChange={(isActive) => handleVibe(5, isActive)}
          content="술게임 못해도 챙겨주는 훈훈한 분위기"
        />
      </ChooseBox2>
      <Title2>
        <Maintitle2>주량 레벨</Maintitle2>
        <Subtitle2>우리팀의 평균 주량을 알려주세요</Subtitle2>
      </Title2>
      <SSlider
        onChange={setAlchol}
        value={alchol}
        tooltip={{
          open: false,
        }}
        dots
        marks={marks2}
        max={5}
        min={1}
      />
      <SBottom />
      <Footer>
        <ProgressBar page={5} />
        <ButtonBox>
          <ApplyButton onClick={handleBefore}>이전</ApplyButton>
          <ApplyButton onClick={handleSubmit}>다음</ApplyButton>
        </ButtonBox>
      </Footer>
    </ApplyLayout>
  );
}

export default Apply5;

const Title = styled.div`
  width: 90%;
  margin-top: 8%;
  height: 13%;
  min-height: 13%;
`;
const Title2 = styled.div`
  margin-top: 3%;
  width: 90%;
  height: 10%;
  min-height: 10%;
`;

const Maintitle = styled.div`
  width: 100%;
  font-family: 'Nanum JungHagSaeng';
  font-weight: 400;
  font-size: 35px;
`;

const Maintitle2 = styled.div`
  margin-top: 8%;
  width: 100%;
  height: 10%;
  font-weight: 500;
  font-size: 14px;
  color: #777777;
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

const Subtitle2 = styled.p`
  margin-top: 3%;
  color: #aaaaaa;
  font-weight: 400;
  font-size: 12px;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 6%;
  padding-bottom: 5%;
`;

const ButtonBox = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  justify-content: space-between;
  margin-top: 5%;
`;

const SSlider = styled(Slider)`
  margin-top: 6%;
  width: 85%;
`;

const SliderText = styled.p`
  font-weight: 400;
  color: #b79292;
  font-size: 16px;
  font-family: 'Nanum JungHagSaeng';
`;

const ChooseBox = styled.div`
  margin-top: 4%;
  width: 90%;
  display: flex;
  justify-content: space-around;
  padding-bottom: 10%;
`;

const ChooseBox2 = styled.div`
  margin-top: 3%;
  width: 90%;
  display: flex;
  flex-direction: column;
`;

const SBottom = styled(Bottom)`
  margin-left: 57%;
  margin-top: 4%;
`;
