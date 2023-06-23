import styled from 'styled-components';
import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import theme from '../../style/theme';
import ApplyLayout from '../../layout/ApplyLayout';
import ApplyButton from '../../components/ApplyButton';
import ProgressBar from '../../components/ProgressBar';
import NotEnoughDateModal from '../../components/Modal/NotEnoughDateModal';
import NotEnoughPlaceModal from '../../components/Modal/NotEnoughPlaceModal';
import IsPageCompleteModal from '../../components/Modal/IsPageCompleteModal';
import { ReactComponent as Earth } from '../../asset/svg/Earth.svg';
import ChannelTalk from '../../asset/ChannelTalk';
import { submitStep3 } from '../../features/apply';
import AreaAccordion from '../../components/AreaAccordion';

const DATA = [
  {
    id: 1,
    title: '서울 / 경기',
    content: ['강남', '건대', '수원', '신촌', '인천', '홍대'],
  },
  {
    id: 2,
    title: '대구',
    content: ['경대 북문', '계대 앞', '동성로', '영대역'],
  },
  {
    id: 3,
    title: '부산',
    content: ['경대 앞', '부산대 앞', '서면', '해운대'],
  },
];

export default function Apply3Page() {
  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);
  const { finishedStep, areas, city } = useSelector((store) => store.apply);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectCity, setSelectCity] = useState(city);
  const [selectArea, setSelectArea] = useState(areas);
  const [openCity, setOpenCity] = useState(city);

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
      {DATA.map((x) => {
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
            openCity={openCity}
            setOpenCity={setOpenCity}
          />
        );
      })}
      {openCity === 0 ? <SEarth /> : null}
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
  height: 5%;
  min-height: 5%;
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
  /* margin-top: 10%; */
  padding-bottom: 5%;
`;

const ButtonBox = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  justify-content: space-between;
  margin-top: 5%;
`;

const SEarth = styled(Earth)`
  margin-top: 20%;
  margin-left: 57%;
`;
