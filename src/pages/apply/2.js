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

export default function Apply2() {
  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);
  const { finishedStep, availableDates } = useSelector((store) => store.apply);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedDate, setSelectedDate] = useState(availableDates);

  useEffect(() => {
    if (finishedStep < 1) {
      window.alert('잘못된 접근입니다');
      navigate(`/apply/${finishedStep + 1}`);
    }
  }, [finishedStep]);

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
    if (selectedDate === undefined) {
      setOpenModal3(true);
      return;
    }
    dispatch(
      submitStep2({
        availableDates: selectedDate,
      }),
    );
    navigate('/apply/area');
  }, [selectedDate]);

  return (
    <ApplyLayout>
      <NotEnoughDateModal open={openModal1} setModal={setModal1} />
      <NotEnoughPlaceModal open={openModal2} setModal={setModal2} />
      <IsPageCompleteModal open={openModal3} setModal={setModal3} />
      <ProgressBar page={2} />
      <Title>
        <Maintitle>
          <Pink>미팅 선호 일정</Pink>을 알려주세요
        </Maintitle>
      </Title>

      <ChooseBox>
        {Date.map((x) => {
          return (
            <ChooseButton
              key={x.id}
              isActive={selectedDate === x.id}
              content={x.date}
              onChange={() => setSelectedDate(x.id)}
            />
          );
        })}
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

const SEarth = styled(Earth)`
  margin-top: 20%;
  margin-left: 15%;
`;
