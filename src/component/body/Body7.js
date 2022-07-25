import styled from 'styled-components'
import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Slider from '@mui/material/Slider'
import PrefferedUnivBox from '../Universities/PrefferedUnivBox'
const buttonColor = '#FFDCE1'
const Container = styled.div`
  left: 0;
  overflow: scroll;
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
  position: absolute;
  text-align: center;
  width: 100%;
`
const Contents = styled.div`
  top: ${(props) => props.top || '10%'};
  color: #000;

  font-style: normal;
  letter-spacing: -0.015em;
  line-height: 149.8%;
  position: absolute;
  text-align: center;
  width: 350px;
  font-size: 18px;
  font-weight: 500;
  height: 27px;
  left: calc(50% - 175px);
  margin: 0;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`
const ContentsAge = styled.div`
  display: flex;
  flex-direction: column;
  color: '#FFDCE1' !important;

  top: ${(props) => props.top || '40%'};
  left: 10%;
  font-weight: 800;
  justify-content: center;
  align-items: center;
  width: 300px;
`
const SelectButton = styled.button`
  margin-right: 3px;
  border-radius: 34px;
  height: 40px;
  width: 70px;
  background-color: ${(props) => props.background_color || 'transparent'};
  color: ${(props) => props.color};
  border-color: #80808029;
`
const Job = (props) => {
  const dispatch = useDispatch()
  const jobs = useSelector((state) => state.prefferedjobs)
  const exists = React.useMemo(() => jobs.includes(props.job), [jobs])
  const fontColor = React.useMemo(() => (exists ? 'white' : 'black'), [exists])
  const bgColor = React.useMemo(
    () => (exists ? buttonColor : 'transparent'),
    [exists]
  )

  const onJobClick = React.useCallback(() => {
    if (exists) {
      dispatch({ type: 'PREFFEREDJOBS_DELETE', payload: props.job })
    } else {
      dispatch({ type: 'PREFFEREDJOBS', payload: props.job })
    }
  }, [exists, props.job])

  return (
    <SelectButton
      color={fontColor}
      background_color={bgColor}
      onClick={onJobClick}
    >
      {props.job}
    </SelectButton>
  )
}
const JobSelect = () => {
  return (
    <Contents top={'20%'}>
      <Job job={'대학생'}></Job>
      <Job job={'직장인'}></Job>
      <Job job={'대학원생'}></Job>
      <Job job={'취준생'}></Job>
    </Contents>
  )
}
const AgeSelect = () => {
  const dispatch = useDispatch()
  const age = useSelector((state) => state.prefferedage)
  const handleChange = (event, newValue) => {
    if (typeof newValue === 'number') {
      dispatch({ type: 'PREFFEREDAGE', payload: newValue })
    }
  }
  return (
    <ContentsAge>
      {age}
      <Slider
        style={{ color: buttonColor }}
        valueLabelDisplay="off"
        min={20}
        step={1}
        max={35}
        defaultValue={30}
        aria-label="Default"
        value={age}
        onChange={handleChange}
      />
    </ContentsAge>
  )
}
const Body7 = () => {
  return (
    <Container>
      <Title top={'5%'}>어떤 상대방을 원하시나요?</Title>
      <Title top={'15%'}>상대팀의 직업은?</Title>
      <JobSelect></JobSelect>
      <Title top={'35%'}>상대팀의 평균나이는?</Title>
      <AgeSelect></AgeSelect>
      <Title top={'55%'}>이런 학교는 피하고 싶어요</Title>
      <PrefferedUnivBox top={'70%'}></PrefferedUnivBox>
    </Container>
  )
}

export default Body7
