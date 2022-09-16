import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { StyledDiv, StyledText, SliderBox } from '../Elements/StyledComponent';
import * as React from 'react';


const PrettoSlider = styled(Slider)({
    width: "90%",
    color: '#F6EEEE',
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
  
const Height = () => {
    const dispatch = useDispatch();
    const heigth = useSelector((state) => state.height);
    const handleChange = (event, newValue) => {
      if (typeof newValue === 'number') {
        dispatch({ type: 'HEIGHT', payload: newValue });
      }
    };

  return (
    <StyledDiv
    position="static"
    transform="0"
    bg="white"
    height="110px"
    width="100%"
    border="14px"
    display="flex"
    justify_content="space-around"
    direction="column"
    border_color="#F1ECEC"
    align_item="center"
    >
      <StyledText margin="10px 0 0 0"position="static" width="90%" font="Pretendard" size="12px"  color="#777777" weight="500" line="16.8px">
        평균키
      </StyledText>
      <SliderBox position=" static" left="0" transform="0" display="flex" direction="column" >
        {/** divide slider and text */}
        <StyledDiv position="static" transform="0" display="flex" justify_content="center" align_item="end" height="50px">
        <PrettoSlider
          style={{ color: '#F6EEEE' }}
          min={150}
          valueLabelDisplay="on"
          step={1}
          max={190}
          defaultValue={170}
          aria-label="Default"
          value={heigth}
          onChange={handleChange}
          
        />
        </StyledDiv>
       <StyledDiv position="static" transform="0" display="flex" justify_content="space-between" align_item="start">
            <StyledText position="static" transform="0" color="#B79292" font="Nanum JungHagSaeng">150cm</StyledText>
            <StyledText position="static" transform="0" color="#B79292" font="Nanum JungHagSaeng">190cm</StyledText>
       </StyledDiv>
      </SliderBox>
    </StyledDiv>
  );
};

export default Height;

