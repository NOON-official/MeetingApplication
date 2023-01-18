import styled from 'styled-components';
import { useState } from 'react';
import { Calendar } from 'antd';
import TextColorBinary from '../../util/TextColorBinary';
import theme from '../../style/theme';
import TopHeader from '../../layout/header/TopHeader';
import BasicContainer from '../../components/Container/BasicContainer';
import IsPageCompleteModal from '../../components/Modal/IsPageCompleteModal';
import ColumnSelectButton from '../../components/ColumnSelectButton';

export default function Apply3() {
  const title = '미팅 선호 날짜를 알려주세요';
  const title2 = '미팅 선호 지역을 알려주세요';
  const [openModal, setOpenModal] = useState(false);
  const [selectedArea, setSelectedArea] = useState([]);
  const setModal = (bool) => {
    setOpenModal(bool);
  };
  console.log(selectedArea);
  return (
    <BasicContainer>
      <IsPageCompleteModal open={openModal} setModal={setModal} />
      <TopHeader />
      <ScrollDiv>
        <TextColorBinary
          text={title}
          colorFirst={theme.pink}
          colorSecond={theme.black}
          num={8}
        />
        <SubTitle> 4일 이상 선택해 주세요</SubTitle>
        <CalendarDiv>
          {' '}
          <Calendar format="YYYY-MM-DD" fullscreen={false} />
        </CalendarDiv>
        <TextColorBinary
          text={title2}
          colorFirst={theme.pink}
          colorSecond={theme.black}
          num={8}
        />
        <SubTitle> 중복 선택이 가능해요</SubTitle>
        <ColumnSelectButton
          state={setSelectedArea}
          selectedArea={selectedArea}
          area={['강남', '건대', '신촌', '홍대', '상관없음']}
        />
      </ScrollDiv>
    </BasicContainer>
  );
}
const CalendarDiv = styled.div`
  width: 300px;
`;
const SubTitle = styled.text`
  display: flex;
  color: '#AAAAAA';
  font-size: 13px;
  font-weight: 500;
`;
const ScrollDiv = styled.div`
  padding: 20px 10px 20px 10px;
  max-width: 400px;
  flex: 1 0 auto;
  width: 100%;
  align-items: flex-start;
  min-height: calc(100vh - 120px);
  flex-direction: column;
`;
