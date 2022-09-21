import * as React from 'react';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { SubTitle, ButtonBox, SliderBox, Contents, SelectButton, StyledText, StyledDiv } from './StyledComponent';
import UnivBox from '../Universities/PrefferedUnivBox';
const PrettoSlider = styled(Slider)({
  color: '#EB8888',
  width: "90%",
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 18,
    width: 18,
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
    fontSize: 12,
    fontWeight: '700',
    top: -1,
    backgroundColor: 'unset',
    color: '#EB8888',
    '&:before': {
      display: 'none',
    },
    '& *': {
      background: 'transparent',
    },
  },
});
const Job = (props) => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.prefferedjobs);
  const exists = React.useMemo(() => jobs.includes(props.meta), [jobs]);
  const fontColor = React.useMemo(() => (exists ? 'white' : '#B79292'), [exists]);
  const bgColor = React.useMemo(() => (exists ? '#EB8888' : '#F6EEEE'), [exists]);

  const onJobClick = React.useCallback(() => {
    if (exists) {
      dispatch({ type: 'PREFFEREDJOBS_DELETE', payload: props.meta });
    } else {
      dispatch({ type: 'PREFFEREDJOBS', payload: props.meta });
    }
  }, [exists, dispatch, props.meta, jobs]);

  return (
    <SelectButton color={fontColor} background_color={bgColor} onClick={onJobClick} width="25%">
      {props.job}
    </SelectButton>
  );
};
export const JobSelect = () => {
  return (
    <Contents heigth="25%" width="100%" justify_content="space-around">
      <SubTitle transform="0" margin="0 0 0 10px" width="100%"position="static" weigth="500" font="Pretendard" align_item="center" justify_content="flex-start">
        {' '}
        직업
      </SubTitle>
      <ButtonBox position="static" left="0" transform="0">
        <Job job={'대학생'} meta={1}></Job>
        <Job job={'직장인'} meta={2}></Job>
        <Job job={'대학원생'} meta={3}></Job>
        <Job job={'취준생'} meta={4}></Job>
      </ButtonBox>
    </Contents>
  );
};

export const AgeSelect = () => {
  const dispatch = useDispatch();
  const age = useSelector((state) => state.prefferedage);

  const handleChange = (event, newValue) => {
    dispatch({ type: 'PREFFEREDAGE', payload: newValue });
  };
  return (
    <Contents heigth="25%" width="100%" justify_content="space-around">
      <SubTitle transform="0" margin="0 0 0 10px" width="100%"position="static" weigth="500" font="Pretendard" align_item="center" justify_content="flex-start">
        {' '}
        평균 나이
      </SubTitle>
      <SliderBox position=" static" left="0" transform="0" display="flex" direction="column" >
        {/** divide slider and text */}
        <StyledDiv position="static" transform="0" display="flex" justify_content="center" align_item="end" height="50px">
        <PrettoSlider
          min={20} max={35} value={age} onChange={handleChange} valueLabelDisplay="on" disableSwap
        
        />
        </StyledDiv>
       <StyledDiv position="static" transform="0" display="flex" justify_content="space-between" align_item="start">
            <StyledText position="static" transform="0" color="#B79292" font="Nanum JungHagSaeng">20세</StyledText>
            <StyledText position="static" transform="0" color="#B79292" font="Nanum JungHagSaeng">35세</StyledText>
       </StyledDiv>
      </SliderBox>
      
    </Contents>
  );
};
export const HeightSelect =()=>{
  const dispatch = useDispatch();
  const height = useSelector((state) => state.prefferedheight);

  const handleChange = (event, newValue) => {
    dispatch({ type: 'PREFFEREDHEIGHT', payload: newValue });
  };
  return (
    <Contents heigth="25%" width="100%" justify_content="space-around">
    <SubTitle transform="0" margin="0 0 0 10px" width="100%"position="static" weigth="500" font="Pretendard" align_item="center" justify_content="flex-start">
      {' '}
      평균 키
    </SubTitle>
    <SliderBox position=" static" left="0" transform="0" display="flex" direction="column" >
      {/** divide slider and text */}
      <StyledDiv position="static" transform="0" display="flex" justify_content="center" align_item="end" height="50px">
      <PrettoSlider
        min={150} max={190} value={height} onChange={handleChange} valueLabelDisplay="on" disableSwap
      
      />
      </StyledDiv>
     <StyledDiv position="static" transform="0" display="flex" justify_content="space-between" align_item="start">
          <StyledText position="static" transform="0" color="#B79292" font="Nanum JungHagSaeng">150cm</StyledText>
          <StyledText position="static" transform="0" color="#B79292" font="Nanum JungHagSaeng">190cm</StyledText>
     </StyledDiv>
    </SliderBox>
    
  </Contents>
  );
}
export const UnivSelect = () => {
  return (
    <Contents heigth="25%" width="100%" justify_content="space-around">
    <SubTitle transform="0" margin="0 0 0 10px" width="100%"position="static" weigth="500" font="Pretendard" align_item="center" justify_content="flex-start">
      {' '}
        기피 학교
      </SubTitle>
      <UnivBox />
    </Contents>
  );
};
