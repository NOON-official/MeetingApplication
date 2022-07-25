import styled from 'styled-components'
import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
const buttonColor = '#218fc3'
const Container = styled.div`
  left: 0;
  overflow: hidden;
  overflow-x: hidden;
  position: absolute;
  top: 10%;
  width: 100%;
  height: 75%;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Title = styled.div`
  top: ${(props) => props.top || '5%'};
  font-size: 18px;
  font-weight: bold;
  height: 27px;
  margin: 0;
  color: #000;
  font-style: normal;
  letter-spacing: -0.015em;
  line-height: 149.8%;
  text-align: ${(props) => props.text_align || 'center'};
  width: 100%;
`
const StyledBox = styled.div`
  display: flex;
  top: ${(props) => props.top || '5%'};
  justify-content: ${(props) => props.justify_contnet || 'flext-start'};
  align-items: ${(props) => props.align_item || 'center'};
  width: ${(props) => props.width || '500px'};
  height: ${(props) => props.height || '100%'};
  margin: ${(props) => props.margin || '0%'};
  overflow: hidden;
  flex-direction: column;
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.color || buttonColor};

  margin: 20px;
`
const PrefferedBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #c9c9c9;
  border-radius: 12px;
  box-sizing: border-box;
  height: auto;
  left: 50%;
  margin: 10px;
  width: 301px;
  overflow: hidden;
  overflow-x: hidden;
`
const MyTeamInfo = (props) => {
  const gender = useSelector((state) => state.gender)
  const num = useSelector((state) => state.num)
  const age = useSelector((state) => state.age)
  const universities = useSelector((state) => state.university)
  const area = useSelector((state) => state.area)
  const day = useSelector((state) => state.day)
  const appearance = useSelector((state) => state.appearance)
  const mbti = useSelector((state) => state.mbti)
  const fashion = useSelector((state) => state.fashion)

  return (
    <StyledBox
      align_item={'flex-start'}
      justify_contnet={'flex-start'}
      top={'10%'}
      height={'auto'}
      width="auto"
      margin="0px 10px 0px 10px"
    >
      #{gender} #{num}명 #평균 {age}살{' '}
      {universities.map((data) => {
        return ` #${data}`
      })}
      {area.map((data) => {
        return ` #${data}`
      })}
      {day.map((data) => {
        return ` #${data}`
      })}
      {appearance.map((data) => {
        return ` #${data}`
      })}
      {mbti.map((data) => {
        return ` #${data}`
      })}
      {fashion.map((data) => {
        return ` #${data}`
      })}
    </StyledBox>
  )
}
const PrefferedInfo = () => {
  const job = useSelector((state) => state.prefferedjobs)
  const age = useSelector((state) => state.prefferedage)
  const university = useSelector((state) => state.preffereduniversity)
  return (
    <StyledBox
      align_item={'flex-start'}
      justify_contnet={'flex-start'}
      top={'10%'}
      height={'auto'}
      width="auto"
      margin="10px"
      color="#ed586d"
    >
      {job.map((data) => {
        return ` #${data}`
      })}
      #{age}살
      {university.map((data) => {
        return ` #${data}`
      })}
    </StyledBox>
  )
}
const Body8 = () => {
  return (
    <Container>
      <Title>당신만의 미팅학개론이 완성되었어요</Title>
      <StyledBox top={'10%'} margin="5%">
        <PrefferedBox top="90px" name="하이">
          <Title top={'0%'} text_align={'center'}>
            1. 우리는 이런 팀이에요
          </Title>
          <MyTeamInfo name={'안녕'}></MyTeamInfo>
        </PrefferedBox>
        <PrefferedBox top="270px" name="하이">
          <Title text_align={'center'}>2. 상대는 이런팀을 원해요</Title>
          <PrefferedInfo></PrefferedInfo>
        </PrefferedBox>
        <PrefferedBox top="400px" name="하이">
          <Title text_align={'center'}>3.분위기는 이랬으면 좋겠어요</Title>
        </PrefferedBox>
      </StyledBox>
    </Container>
  )
}

export default Body8
