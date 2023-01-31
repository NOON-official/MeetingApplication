import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Calendar } from 'react-multi-date-picker';
import { useSelector } from 'react-redux';
import TextColorBinary from '../../util/TextColorBinary';
import theme from '../../style/theme';
import ApplyLayout from '../../layout/ApplyLayout';
import ApplyButton from '../../components/ApplyButton';
import ProgressBar from '../../components/ProgressBar';
import IsPageCompleteModal from '../../components/Modal/IsPageCompleteModal';
import ColumnSelectButton from '../../components/ColumnSelectButton';

// eslint-disable-next-line consistent-return

export default function Apply2() {
  const title = '미팅 선호 날짜를 알려주세요';
  const title2 = '미팅 선호 지역을 알려주세요';
  const [openModal, setOpenModal] = useState(false);
  const [selectedArea, setSelectedArea] = useState([]);
  const [SelectedDate, setSelecteddate] = useState(new Date());
  const { finishedStep } = useSelector((store) => store.apply);
  const navigate = useNavigate();

  useEffect(() => {
    if (finishedStep < 1) {
      window.alert('잘못된 접근입니다');
      navigate(`/apply/${finishedStep + 1}`);
    }
  }, []);

  const setModal = (bool) => {
    setOpenModal(bool);
  };

  return (
    <ApplyLayout>
      <IsPageCompleteModal open={openModal} setModal={setModal} />
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
            format="YYYY/MM/DD"
            layout="mobile"
            className="custom-calendar"
            multiple
            minDate={4}
            value={SelectedDate}
            onChange={setSelecteddate}
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
      <Footer>
        <ProgressBar page={2} />
        <ButtonBox>
          <ApplyButton>
            <SLink to="/apply/1">이전</SLink>
          </ApplyButton>
          <ApplyButton>
            <SLink to="/apply/3">다음</SLink>
          </ApplyButton>
        </ButtonBox>
      </Footer>
    </ApplyLayout>
  );
}
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
const SLink = styled(Link)`
  width: 100%;
  text-decoration: 'none';
  color: ${(props) => props.theme.lightPink};
`;
const SizedBox = styled.div`
  height: ${(props) => props.height || '10px'};
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
const SubTitle = styled.span`
  display: flex;
  color: #aaaaaa;
  font-size: 13px;
  font-weight: 500;
`;
const ScrollDiv = styled.div`
  width: 90%;
  align-items: flex-start;
  margin-top: 8%;
`;
