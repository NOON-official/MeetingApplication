import styled from 'styled-components';
import { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Slider } from 'antd';
import theme from '../../style/theme';
import ApplyLayout from '../../layout/ApplyLayout';
import ApplyButton from '../../components/ApplyButton';
import ProgressBar from '../../components/ProgressBar';
import ChooseButton from '../../components/ChooseButton';
import { submitStep5 } from '../../features/apply';
import IsPageCompleteModal from '../../components/Modal/IsPageCompleteModal';
import ChannelTalk from '../../asset/ChannelTalk';

function Apply5Page() {
  const [openModal, setOpenModal] = useState(false);
  const { finishedStep, prefAge, prefVibes } = useSelector(
    (store) => store.apply,
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (finishedStep < 4) {
      window.alert('잘못된 접근입니다');
      navigate(`/apply/${finishedStep + 1}`);
    }
  }, [finishedStep]);

  const marks = {
    20: { label: <SliderText>20</SliderText> },
    21: { label: <SliderText>21</SliderText> },
    22: { label: <SliderText>22</SliderText> },
    23: { label: <SliderText>23</SliderText> },
    24: { label: <SliderText>24</SliderText> },
    25: { label: <SliderText>25</SliderText> },
    26: { label: <SliderText>26</SliderText> },
    27: { label: <SliderText>27</SliderText> },
    28: { label: <SliderText>28</SliderText> },
    29: { label: <SliderText>29</SliderText> },
  };

  const trackStyle = {
    backgroundColor: '#EB8888',
  };

  const [ageRange, setAgeRange] = useState(prefAge.length ? prefAge : [23, 25]);
  const [prefMood, setPrefMood] = useState(prefVibes);

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
        prefVibes: prefMood,
      }),
    );
    navigate('/apply/drink');
  }, [ageRange, prefMood]);

  const selectAllMood = () => {
    if (prefMood.includes(1) && prefMood.includes(2)) {
      setPrefMood([]);
      return;
    }
    setPrefMood([1, 2]);
  };
  const formatter = (value) => `${value}세`;

  return (
    <ApplyLayout>
      <IsPageCompleteModal open={openModal} setModal={setModal} />
      <ProgressBar page={5} />
      <Title>
        <Maintitle>
          <Pink>상대 팀 나이</Pink>를 지정해주세요
        </Maintitle>
        <Subtitle>범위를 넓게 선택해야 매칭 확률이 상승해요</Subtitle>
      </Title>
      <SSlider
        onAfterChange={onAfterChange}
        trackStyle={trackStyle}
        tooltip={{ formatter, placement: 'bottom' }}
        marks={marks}
        defaultValue={ageRange}
        max={29}
        min={20}
        range
        included
      />

      <Title>
        <Maintitle>
          <Pink>미팅</Pink>은 어땠으면 좋겠어요?
        </Maintitle>
      </Title>

      <ChooseBox2>
        <ChooseButton
          isActive={prefMood.includes(1)}
          onChange={(isActive) => handleVibe(1, isActive)}
          content="좋은 사람 있으면 소개시켜줘"
        />
        <ChooseButton
          isActive={prefMood.includes(2)}
          onChange={(isActive) => handleVibe(2, isActive)}
          content="친구는 다다익선! 찐친 만들어 보자"
        />
        <ChooseButton
          isActive={prefMood.includes(1) && prefMood.includes(2)}
          onChange={selectAllMood}
          content="둘 다 좋아요"
        />
      </ChooseBox2>
      <Footer>
        <ButtonBox>
          <ApplyButton onClick={handleBefore}>이전</ApplyButton>
          <ApplyButton onClick={handleSubmit}>다음</ApplyButton>
        </ButtonBox>
      </Footer>
      <div>{ChannelTalk.hideChannelButton()}</div>
    </ApplyLayout>
  );
}

export default Apply5Page;

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

const ButtonBox = styled.div`
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

const ChooseBox2 = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;
