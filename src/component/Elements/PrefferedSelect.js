import * as React from 'react'
import Slider from '@mui/material/Slider'
import { styled } from '@mui/material/styles'
import { useSelector, useDispatch } from 'react-redux'
import {
  SubTitle,
  ButtonBox,
  SliderBox,
  Contents,
  SelectButton,
  StyledText,
} from './StyledComponent'
import UnivBox from '../Universities/PrefferedUnivBox'
const PrettoSlider = styled(Slider)({
  color: '#F6EEEE',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#EB8888',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#EB8888',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
})
const Job = (props) => {
  const dispatch = useDispatch()
  const jobs = useSelector((state) => state.prefferedjobs)
  const exists = React.useMemo(() => jobs.includes(props.job), [jobs])
  const fontColor = React.useMemo(
    () => (exists ? 'white' : '#B79292'),
    [exists]
  )
  const bgColor = React.useMemo(
    () => (exists ? '#EB8888' : '#F6EEEE'),
    [exists]
  )
  const onJobClick = React.useCallback(() => {
    if (exists) {
      dispatch({ type: 'PREFFEREDJOBS_DELETE', payload: props.job })
    } else {
      dispatch({ type: 'PREFFEREDJOBS', payload: props.job })
    }
  }, [exists, dispatch, props.job, jobs])

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
      <SubTitle font="Pretendard" top="5%" left="5%">
        {' '}
        직업
      </SubTitle>
      <ButtonBox top="12%">
        <Job job={'대학생'}></Job>
        <Job job={'직장인'}></Job>
        <Job job={'대학원생'}></Job>
        <Job job={'취준생'}></Job>
      </ButtonBox>
    </Contents>
  )
}
function valuetext(value) {
  return `${value}°C`
}
export const AgeSelect = () => {
  const dispatch = useDispatch()
  const age = useSelector((state) => state.prefferedage)

  const handleChange = (event, newValue) => {
    dispatch({ type: 'PREFFEREDAGE', payload: newValue })
    console.log('redux', age)
  }
  return (
    <Contents>
      <SubTitle font="Pretendard" top="30%" left="8%">
        평균나이
      </SubTitle>
      <SliderBox top="40%">
        <StyledText top="75%" size="10px" color="#B79292">
          20세
        </StyledText>
        <StyledText top="75%" left="90%" size="10px" color="#B79292">
          35세
        </StyledText>
        <PrettoSlider
          min={20}
          max={35}
          getAriaLabel={() => 'Temperature range'}
          value={age}
          onChange={handleChange}
          valueLabelDisplay="on"
          disableSwap
        />
      </SliderBox>
    </Contents>
  )
}

export const UnivSelect = () => {
  return (
    <Contents>
      <SubTitle font="Pretendard" top="55%" left="8%">
        기피 학교
      </SubTitle>
      <UnivBox />
    </Contents>
  )
}
