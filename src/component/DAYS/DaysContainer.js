import styled from 'styled-components'
import { StyledDiv } from '../Elements/StyledComponent'
import Day from './Day'

const Days = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: absolute;
  top: ${(props) => props.top || '5%'};
  height: 10%;
  width: 100%;
  float: left;
`

const DayText = (props) => {
  return <div style={{ marginBottom: '7px' }}>{props.text}</div>
}
const DaysContainer = (props) => {
  return (
    <StyledDiv top="15%" width="95%" height="65%" left="50%">
      <Days>
        {' '}
        <Day day="월요일"></Day>
        <Day day="화요일"></Day>
        <Day day="수요일"></Day>
      </Days>
      <Days top="18%">
        {' '}
        <Day day="목요일"></Day>
        <Day day="금요일"></Day>
        <Day day="토요일"></Day>
      </Days>
      <Days top="31%">
        <Day day="일요일"></Day>
      </Days>
    </StyledDiv>
  )
}

export default DaysContainer
