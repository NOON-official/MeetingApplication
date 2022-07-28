import styled from 'styled-components'
import * as React from 'react'
import Slider from '@mui/material/Slider'
import { useSelector, useDispatch } from 'react-redux'
import {
  SubTitle,
  ButtonBox,
  SliderBox,
  Contents,
  ContentsAge,
  SelectButton,
} from './StyledComponent'
const buttonColor = '#C4D7E0'

export const GenderSelect = () => {
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
      <SubTitle top="10%"> 셩별을 선택해 주세요!</SubTitle>
      <ButtonBox top="20%">
        <SelectButton
          variant="extended"
          size="small"
          background_color={ColorMale}
          color={colorM}
          aria-label="add"
          onClick={() => setmale()}
          width="50%"
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
      </ButtonBox>
    </Contents>
  )
}
export const NumberSelect = () => {
  const dispatch = useDispatch()
  const number = useSelector((state) => state.num)
  function setnumber(value) {
    dispatch({ type: 'NUMBER', payload: value })
  }
  return (
    <Contents>
      <SubTitle top="33%"> 인원을 알려주세요~</SubTitle>

      <ButtonBox top="43%">
        <SelectButton
          variant="extended"
          size="small"
          background_color={number === 2 ? buttonColor : 'white'}
          color={number === 2 ? 'white' : 'black'}
          aria-label="add"
          onClick={() => setnumber(2)}
          width="33%"
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
          width="33%"
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
          width="33%"
        >
          4 명
        </SelectButton>
      </ButtonBox>
    </Contents>
  )
}
export const AgeSelect = () => {
  const dispatch = useDispatch()
  const age = useSelector((state) => state.age)
  const handleChange = (event, newValue) => {
    if (typeof newValue === 'number') {
      dispatch({ type: 'AGE', payload: newValue })
    }
  }
  return (
    <ContentsAge>
      <SubTitle top="56%">우리의 평균 나이는 {age}살 이에요</SubTitle>
      <SliderBox top="66%">
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
      </SliderBox>
    </ContentsAge>
  )
}

const Job = (props) => {
  const dispatch = useDispatch()
  const jobs = useSelector((state) => state.jobs)
  const num = useSelector((state) => state.num)
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
      if (jobs.length < num) dispatch({ type: 'JOBS', payload: props.job })
    }
  }, [exists, props.job, jobs])

  return (
    <SelectButton
      color={fontColor}
      background_color={bgColor}
      onClick={onJobClick}
      width="25%"
    >
      {props.job}
    </SelectButton>
  )
}
export const JobSelect = () => {
  return (
    <Contents>
      <SubTitle top="79%"> 직업을 알려주세요~</SubTitle>
      <ButtonBox top="85%">
        <Job job={'대학생'}></Job>
        <Job job={'직장인'}></Job>
        <Job job={'대학원생'}></Job>
        <Job job={'취준생'}></Job>
      </ButtonBox>
    </Contents>
  )
}
