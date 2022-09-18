import styled from 'styled-components';
import { StyledDiv } from '../Elements/StyledComponent';
import Day from './Day';

const Days = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.justify_content || 'space-around'};
  position: absolute;
  top: ${(props) => props.top || '5%'};
  height: 10%;
  width: 100%;
  float: left;
  left: ${(props) => props.left};
`;

const DayText = (props) => {
  return <div style={{ marginBottom: '7px' }}>{props.text}</div>;
};
const DaysContainer = (props) => {
  return (
    <StyledDiv top="20%" width="95%" height="65%" left="50%">
      <Days>
        {' '}
        <Day day="월요일" meta={1}></Day>
        <Day day="화요일" meta={2}></Day>
        <Day day="수요일" meta={3}></Day>
      </Days>
      <Days top="18%">
        {' '}
        <Day day="목요일"meta={4}></Day>
        <Day day="금요일"meta={5}></Day>
        <Day day="토요일"meta={6}></Day>
      </Days>
      <Days left=" 1%" justify_content="start" top="31%">
        <Day day="일요일"meta={7}></Day>
      </Days>
    </StyledDiv>
  );
};

export default DaysContainer;
