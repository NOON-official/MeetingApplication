import styled from 'styled-components';
import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import ChooseButton from '../../components/Button/ChooseButton';
import theme from '../../style/theme';
import ApplyButton from '../../components/Button/ApplyButton';
import ProgressBar from '../../components/Apply/ProgressBar';
import NotEnoughDateModal from '../../components/Modal/Apply/NotEnoughDateModal';
import NotEnoughPlaceModal from '../../components/Modal/Apply/NotEnoughPlaceModal';
import IsPageCompleteModal from '../../components/Modal/Apply/IsPageCompleteModal';
import { ReactComponent as Earth } from '../../asset/svg/Earth.svg';
import ChannelTalk from '../../asset/ChannelTalk';
import { submitStep2 } from '../../features/apply';
import HeaderLayout from '../../layout/HeaderLayout';

export default function Apply2() {
  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);
  const { finishedStep, teamAvailableDate } = useSelector(
    (store) => store.apply,
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedDate, setSelectedDate] = useState(teamAvailableDate);

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

  const handleDate = useCallback(
    (val, isChecked) => {
      if (isChecked) {
        setSelectedDate([...selectedDate, val]);
        return;
      }
      setSelectedDate(selectedDate.filter((v) => v !== val));
    },
    [selectedDate],
  );

  const selectAllDate = () => {
    if (selectedDate.includes(1) && selectedDate.includes(2)) {
      setSelectedDate([]);
      return;
    }
    setSelectedDate([1, 2]);
  };

  const handleBefore = () => {
    navigate('/apply/1');
  };

  const handleSubmit = useCallback(() => {
    if (selectedDate.length === 0) {
      setOpenModal3(true);
      return;
    }
    dispatch(
      submitStep2({
        teamAvailableDate: selectedDate,
      }),
    );
    navigate('/apply/3area');
  }, [selectedDate]);

  return (
    <HeaderLayout>
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
        <ChooseButton
          isActive={selectedDate.includes(1)}
          onChange={(isActive) => handleDate(1, isActive)}
          content="평일"
        />
        <ChooseButton
          isActive={selectedDate.includes(2)}
          onChange={(isActive) => handleDate(2, isActive)}
          content="주말"
        />
        <ChooseButton
          isActive={selectedDate.includes(1) && selectedDate.includes(2)}
          onChange={selectAllDate}
          content="둘 다 좋아요"
        />
      </ChooseBox>

      <Footer>
        <SEarth />
        <ButtonBox>
          <ApplyButton onClick={handleBefore}>이전</ApplyButton>
          <ApplyButton onClick={handleSubmit}>다음</ApplyButton>
        </ButtonBox>
      </Footer>
      <div>{ChannelTalk.hideChannelButton()}</div>
    </HeaderLayout>
  );
}

const Title = styled.div`
  width: 90%;
  height: 40px;
  margin-top: 5%;
`;

const Maintitle = styled.div`
  width: 100%;
  font-weight: 500;
  font-size: 22px;
`;

const Pink = styled.span`
  color: ${theme.pink};
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: auto 0 10%;
`;

const ButtonBox = styled.div`
  width: 100%;
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
  margin-top: 15%;
  margin-left: 65%;
`;
