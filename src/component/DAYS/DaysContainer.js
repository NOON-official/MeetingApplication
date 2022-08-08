import styled from 'styled-components'
import Day from './Day'
const Container = styled.div`
  font-family: 'Single Day', cursive;
  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  height: 30%;
  left: 50%;
  margin: 0 0 0 -150.5px;
  position: absolute;
  top: 65%;
  width: 301px;
`
const ChooseDay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: absolute;
  top: 10%;
  margin-bottom: 10px;
  border-bottom: 2px solid #c9c9c9;
  font-weight: 900;
  font-size: 15px;
`
const Days1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: absolute;
  top: 30%;
  height: 30%;
  width: 100%;
`
const Days2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: absolute;
  top: 62%;
  height: 30%;
  width: 100%;
`
const DayText = (props) => {
  return <div style={{ marginBottom: '7px' }}>{props.text}</div>
}
const DaysContainer = (props) => {
  return (
    <Container>
      <ChooseDay>
        <DayText text={'요일선택'}></DayText>
      </ChooseDay>
      <Days1>
        {' '}
        <Day day="월요일"></Day>
        <Day day="화요일"></Day>
        <Day day="수요일"></Day>
        <Day day="목요일"></Day>
      </Days1>
      <Days2>
        {' '}
        <Day day="금요일"></Day>
        <Day day="토요일"></Day>
        <Day day="일요일"></Day>
      </Days2>
    </Container>
  )
}

export default DaysContainer
