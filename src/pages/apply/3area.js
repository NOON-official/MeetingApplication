import styled from 'styled-components';
import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import theme from '../../style/theme';
import ApplyLayout from '../../layout/ApplyLayout';
import ApplyButton from '../../components/Button/ApplyButton';
import ProgressBar from '../../components/Apply/ProgressBar';
import NotEnoughDateModal from '../../components/Modal/Apply/NotEnoughDateModal';
import NotEnoughPlaceModal from '../../components/Modal/Apply/NotEnoughPlaceModal';
import IsPageCompleteModal from '../../components/Modal/Apply/IsPageCompleteModal';
import { ReactComponent as Earth } from '../../asset/svg/Earth.svg';
import ChannelTalk from '../../asset/ChannelTalk';
import { submitStep3 } from '../../features/apply';
import AreaAccordion from '../../components/Apply/AreaAccordion';
import Area from '../../asset/Area';

export default function Apply3Page() {
  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);
  const { finishedStep, areas, city } = useSelector((store) => store.apply);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectCity, setSelectCity] = useState(city);
  const [selectArea, setSelectArea] = useState(areas);
  const [openIndex, setOpenIndex] = useState(city);

  const handleButtonClick = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  useEffect(() => {
    if (finishedStep < 2) {
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
    navigate('/apply/2');
  };

  const handleSubmit = useCallback(() => {
    if (selectArea.length < 1) {
      setOpenModal2(true);
      return;
    }
    dispatch(
      submitStep3({
        city: selectCity,
        areas: selectArea,
      }),
    );
    navigate('/apply/4members');
  }, [selectCity, selectArea]);

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
      <Boxes>
        {Area.map((x) => {
          return (
            <AreaAccordion
              key={x.id}
              id={x.id}
              title={x.title}
              content={x.content}
              selectCity={selectCity}
              selectArea={selectArea}
              setSelectCity={setSelectCity}
              setSelectArea={setSelectArea}
              handleButtonClick={() => handleButtonClick(x.id)}
              isOpen={openIndex === x.id}
            />
          );
        })}
      </Boxes>
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
  height: 60px;
  margin-top: 7%;
`;

const Maintitle = styled.div`
  width: 100%;
  font-weight: 500;
  font-size: 22px;
`;

const Subtitle = styled.p`
  margin-top: 3%;
  color: #aaaaaa;
  font-weight: 400;
  font-size: 15px;
`;

const Boxes = styled.div`
  width: 90%;
  min-height: 50%;
`;

const Pink = styled.span`
  color: ${theme.pink};
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: auto 0 10%;
`;

const ButtonBox = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  justify-content: space-between;
  margin-top: 5%;
`;

const SEarth = styled(Earth)`
  margin-top: 5%;
  margin-left: 57%;
`;
