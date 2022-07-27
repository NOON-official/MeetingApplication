import styled from 'styled-components'
import * as React from 'react'
import Slider from '@mui/material/Slider'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
const buttonColor = '#C4D7E0'
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  height: 80%;
  width: 100%;
  font-family: 'Single Day', cursive;
`
const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`
const Contents = styled.div`
  display: flex;
  flex-direction: column;
  color: 'black';
  justify-content: center;
  align-items: center;
  white-space: pre-wrap;
`
const ContentsAge = styled.div`
  display: flex;
  flex-direction: column;
  color: 'black';
`
const TextColor = styled.text`
  color: #800080;
`
const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 30%;
  height: 15%;
  position: absolute;
  bottom: 0;
  left: 0;
  margin-left: 35%;
`
const SelectButton = styled.button`
  margin-right: 3px;
  border-radius: 34px;
  height: 40px;
  width: 70px;
  background-color: ${(props) => props.background_color || 'transparent'};
  color: ${(props) => props.color};
  border-color: #80808029;
  font-family: 'Single Day', cursive;
`

const GenderSelect = () => {
  const dispatch = useDispatch()
  const gender = useSelector((state) => state.gender)
  const setmale = () => {
    dispatch({ type: 'SET_MALE' })
  }
  const setfemale = () => {
    dispatch({ type: 'SET_FEMALE' })
  }
  // 남자: true, 여자 : false

  const ColorMale = gender === '남자' ? buttonColor : 'transparent'
  const colorM = gender === '남자' ? 'white' : 'black'
  const ColorFemale = gender === '남자' ? 'transparent' : buttonColor
  const colorF = gender === '남자' ? 'black' : 'white'

  return (
    <Contents>
      셩별을 선택해 주세요!
      <div>
        <SelectButton
          variant="extended"
          size="small"
          background_color={ColorMale}
          color={colorM}
          aria-label="add"
          onClick={() => setmale()}
        >
          남자
        </SelectButton>
        <SelectButton
          variant="extended"
          size="small"
          background_color={ColorFemale}
          color={colorF}
          aria-label="add"
          onClick={() => setfemale()}
        >
          여자
        </SelectButton>
      </div>
    </Contents>
  )
}
const NumberSelect = () => {
  const dispatch = useDispatch()
  const number = useSelector((state) => state.num)
  function setnumber(value) {
    dispatch({ type: 'NUMBER', payload: value })
  }
  return (
    <Contents>
      인원을 알려주세요~
      <div>
        <SelectButton
          variant="extended"
          size="small"
          background_color={number === 2 ? buttonColor : 'white'}
          color={number === 2 ? 'white' : 'black'}
          aria-label="add"
          onClick={() => setnumber(2)}
        >
          2 명
        </SelectButton>
        <SelectButton
          variant="extended"
          size="small"
          background_color={number === 3 ? buttonColor : 'white'}
          color={number === 3 ? 'white' : 'black'}
          aria-label="add"
          onClick={() => setnumber(3)}
        >
          3 명
        </SelectButton>
        <SelectButton
          variant="extended"
          size="small"
          background_color={number === 4 ? buttonColor : 'white'}
          color={number === 4 ? 'white' : 'black'}
          aria-label="add"
          onClick={() => setnumber(4)}
        >
          4 명
        </SelectButton>
      </div>
    </Contents>
  )
}
const AgeSelect = () => {
  const dispatch = useDispatch()
  const age = useSelector((state) => state.age)
  const handleChange = (event, newValue) => {
    if (typeof newValue === 'number') {
      dispatch({ type: 'AGE', payload: newValue })
    }
  }
  return (
    <ContentsAge>
      우리의 평균 나이는 {age}살 이에요
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

const Job = (props) => {
  const dispatch = useDispatch()
  const jobs = useSelector((state) => state.jobs)
  const exists = React.useMemo(() => jobs.includes(props.job), [jobs])
  const fontColor = React.useMemo(() => (exists ? 'white' : 'black'), [exists])
  const bgColor = React.useMemo(
    () => (exists ? buttonColor : 'transparent'),
    [exists]
  )

  const onJobClick = React.useCallback(() => {
    if (exists) {
      dispatch({ type: 'JOBS_DELETE', payload: props.job })
    } else {
      dispatch({ type: 'JOBS', payload: props.job })
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
    <Contents>
      직업을 알려주세요~
      <div>
        <Job job={'대학생'}></Job>
        <Job job={'직장인'}></Job>
        <Job job={'대학원생'}></Job>
        <Job job={'취준생'}></Job>
      </div>
    </Contents>
  )
}
const Body2 = () => {
  return (
    <Container>
      <Title>우리팀을 소개해 주세요</Title>
      <GenderSelect />
      <NumberSelect />
      <AgeSelect />
      <JobSelect />
    </Container>
  )
}
export default Body2
