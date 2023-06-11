import styled from 'styled-components';
import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import ChooseButton from '../../components/ChooseButton';
import theme from '../../style/theme';
import ApplyLayout from '../../layout/ApplyLayout';
import ApplyButton from '../../components/ApplyButton';
import ProgressBar from '../../components/ProgressBar';
import NotEnoughDateModal from '../../components/Modal/NotEnoughDateModal';
import NotEnoughPlaceModal from '../../components/Modal/NotEnoughPlaceModal';
import IsPageCompleteModal from '../../components/Modal/IsPageCompleteModal';
import { ReactComponent as Earth } from '../../asset/svg/Earth.svg';
import ChannelTalk from '../../asset/ChannelTalk';
import { submitStep2 } from '../../features/apply';

const Date = [
  {
    id: 1,
    date: '평일',
  },
  {
    id: 2,
    date: '주말',
  },
  {
    id: 3,
    date: '둘 다 좋아요',
  },
];

export default function ApplyArea() {
  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);
  const { finishedStep, availableDates, areas } = useSelector(
    (store) => store.apply,
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedArea, setSelectedArea] = useState(areas);

  useEffect(() => {
    if (finishedStep < 1) {
      window.alert('잘못된 접근입니다');
      navigate(`/apply/${finishedStep + 1}`);
    }
  }, [finishedStep]);

  const handleArea = useCallback(
    (val, isChecked) => {
      if (isChecked) {
        setSelectedArea([...selectedArea, val]);
        return;
      }
      setSelectedArea(selectedArea.filter((v) => v !== val));
    },
    [selectedArea],
  );

  const setModal1 = (bool) => {
    setOpenModal1(bool);
  };

  const setModal2 = (bool) => {
    setOpenModal2(bool);
  };

  const setModal3 = (bool) => {
    setOpenModal3(bool);
  };

  const handleBefore = () => {
    navigate('/apply/1');
  };

  const handleSubmit = useCallback(() => {
    if (selectedArea === undefined) {
      setOpenModal2(true);
      return;
    }
    dispatch(
      submitStep2({
        areas: selectedArea,
      }),
    );
    navigate('/apply/3');
  }, [selectedArea]);

  // if (selectDate.length < 4 && selectedArea < 1) {
  //   setOpenModal3(true);
  //   return;
  // }
  // if (selectDate.length < 4) {
  //   setOpenModal1(true);
  //   return;
  // }
  // if (selectedArea < 1) {
  //   setOpenModal2(true);
  //   return;
  // }
  // dispatch(
  //   submitStep2({
  //     availableDates: [...selectDate.map((a) => a.format()).sort()], // 오름차순 정렬
  //     areas: selectedArea,
  //   }),
  // );
  // navigate('/apply/3');
  // }, [selectDate, selectedArea]);

  return (
    <ApplyLayout>
      <NotEnoughDateModal open={openModal1} setModal={setModal1} />
      <NotEnoughPlaceModal open={openModal2} setModal={setModal2} />
      <IsPageCompleteModal open={openModal3} setModal={setModal3} />
      <ProgressBar page={3} />

      <Title>
        <Maintitle>
          <Pink>미팅 선호 지역</Pink>을 알려주세요
        </Maintitle>
        <Subtitle>중복 선택이 가능해요</Subtitle>
      </Title>
      <ChooseBox>
        <ChooseButton
          isActive={selectedArea?.includes(1)}
          onChange={(isActive) => handleArea(1, isActive)}
          content="강남"
        />
        <ChooseButton
          isActive={selectedArea?.includes(2)}
          onChange={(isActive) => handleArea(2, isActive)}
          content="건대"
        />
        <ChooseButton
          isActive={selectedArea?.includes(3)}
          onChange={(isActive) => handleArea(3, isActive)}
          content="신촌"
        />
        <ChooseButton
          isActive={selectedArea?.includes(4)}
          onChange={(isActive) => handleArea(4, isActive)}
          content="홍대"
        />
        <ChooseButton
          isActive={selectedArea?.includes(5)}
          onChange={(isActive) => handleArea(5, isActive)}
          content="상관 없어요"
        />
      </ChooseBox>
      <SEarth />
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

const Title = styled.div`
  width: 90%;
  min-height: 8%;
  margin-top: 30px;
`;

const Maintitle = styled.div`
  width: 100%;
  font-family: 'Nanum JungHagSaeng';
  font-weight: 400;
  font-size: 35px;
`;

const Subtitle = styled.p`
  margin-top: 4%;
  color: #aaaaaa;
  font-weight: 400;
  font-size: 13px;
`;

const Pink = styled.span`
  color: ${theme.pink};
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 10%;
  padding-bottom: 5%;
`;
const ButtonBox = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  justify-content: space-between;
  margin-top: 5%;
`;

const ChooseBox = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;

const ChooseDate = styled.button`
  margin: 0 5px 15px 0;
  border-radius: 10px;
  height: 40px;
  width: 100%;
  background: ${(props) => (props.isActive ? '#EB8888' : 'F6EEEE')};
  color: ${(props) => (props.isActive ? '#F6EEEE' : '#B79292')};
  border-color: transparent;
  font-family: 'Nanum JungHagSaeng';
  font-size: 18px;
  &:hover {
    cursor: pointer;
  }
`;

const CalendarDiv = styled.div`
  padding-left: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  .custom-calendar.rmdp-shadow {
    box-shadow: none;
  }
  .custom-calendar.rmdp-wrapper {
    border: 1px solid #f49393;
    border-radius: 10px;
  }
  .rmdp-arrow {
    border: solid black;
    border-width: 0 2px 2px 0;
    display: inline-block;
    height: 3px;
    margin-top: 5px;
    padding: 2px;
    width: 3px;
  }
  .rmdp-week-day {
    color: black;
    cursor: default;
    font-size: 12px;
    font-weight: 400;
  }
  .rmdp-day.rmdp-selected span:not(.highlight) {
    background-color: #f49393;
    box-shadow: 0 0 3px #8798ad;
    color: #fff;
  }
`;

const ScrollDiv = styled.div`
  width: 90%;
  align-items: flex-start;
  margin-top: 3%;
`;

const SEarth = styled(Earth)`
  margin-top: 20%;
  margin-left: 15%;
`;
