import styled from 'styled-components';
import { useState } from 'react';
import 'react-multi-date-picker/styles/backgrounds/custom-calendar.css';
import { Calendar } from 'react-multi-date-picker';
import TextColorBinary from '../../util/TextColorBinary';
import theme from '../../style/theme';
import TopHeader from '../../layout/header/TopHeader';
import BasicContainer from '../../components/Container/BasicContainer';
import IsPageCompleteModal from '../../components/Modal/IsPageCompleteModal';
import ColumnSelectButton from '../../components/ColumnSelectButton';

export default function Apply2() {
  const title = '미팅 선호 날짜를 알려주세요';
  const title2 = '미팅 선호 지역을 알려주세요';
  const [openModal, setOpenModal] = useState(false);
  const [selectedArea, setSelectedArea] = useState([]);
  const [SelectedDate, setSelecteddate] = useState(new Date());
  const setModal = (bool) => {
    setOpenModal(bool);
  };
  function List(dateObj) {
    const templist = [];
    dateObj.map((date) => templist.push(date.format('YYYY/MM/DD')));
    return templist;
  }
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
        <SizedBox />
        <SubTitle> 4일 이상 선택해 주세요</SubTitle>
        <SizedBox height="20px" />
        <CalendarDiv>
          <Calendar
            layout="mobile"
            className="custom-calendar"
            mapDays={({
              date,
              today,
              selectedDate,
              currentMonth,
              isSameDate,
            }) => {
              const props = {};

              // 전체 css
              props.style = {
                borderRadius: '10px',
              };
              if (isSameDate(date, selectedDate)) {
                props.style = {
                  ...props.style,
                  color: '#F49393',
                  backgroundColor: '#F49393',
                  fontWeight: 'bold',
                };
              }
              return props;
            }}
            minDate={4}
            multiple
            value={new Date()}
            onChange={(dateObj) => {
              // setSelecteddate(List(dateObj));
              // console.log(SelectedDate);
            }}
          />
        </CalendarDiv>
        <SizedBox height="30px" />
        <TextColorBinary
          text={title2}
          colorFirst={theme.pink}
          colorSecond={theme.black}
          num={8}
        />
        <SizedBox />
        <SubTitle> 중복 선택이 가능해요</SubTitle>
        <SizedBox />
        <ColumnSelectButton
          state={setSelectedArea}
          selectedArea={selectedArea}
          area={['강남', '건대', '신촌', '홍대', '상관없음']}
        />
      </ScrollDiv>
    </BasicContainer>
  );
}
const SizedBox = styled.div`
  height: ${(props) => props.height || '10px'};
`;

const CalendarDiv = styled.div`
  padding-left: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
`;
const SubTitle = styled.text`
  display: flex;
  color: #aaaaaa;
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
