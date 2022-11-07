import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';

import { StyledDiv, StyledText, SliderBox } from '../Elements/StyledComponent';
import * as React from 'react';



const PrettoSlider = styled(Slider)({
  
    width: "90%",
    color: '#F6EEEE',
    height: 5,
    '& .MuiSlider-track': {
      border: 'none',
    },
    '& .MuiSlider-thumb': {

      height: 10  ,
      width: 10,
      backgroundImage:  "url('https://user-images.githubusercontent.com/86870218/199781986-84808bf5-5c64-4f86-b6fe-99bb6b10aabf.svg') !important",
      backgroundColor:'transparent',
     
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit',
      },
      '&:before': {
        display: 'none',
      },
    },
    '& .MuiSlider-valueLabel': {
      zIndex:1,
      fontSize: 4,
 
      fontWeight: '700',
      top: "10%",
      backgroundColor: 'unset',
      color: '#EB8888',
      '&:before': {
        display: 'none',
      },
      '& *': {
        background: 'transparent',
      },
    },
    '& .MuiSlider-mark': {
        backgroundColor: '#bfbfbf',
        height: 8,
        width: 1,
        '&.MuiSlider-markActive': {
          opacity: 1,
          backgroundColor: 'currentColor',
        },
      },
  });
  
const Drink = () => {
    const dispatch = useDispatch();
    const drink = useSelector((state) => state.drink);
    const handleChange = (event, newValue) => {
      if (typeof newValue === 'number') {
        dispatch({ type: 'DRINK', payload: String(newValue) });
      }
    };
    const valueLabel = (value)=>{
      const label = ["한방울", "반병","한병","한병 반","두병","고래"]

      return `${label[value]}`
    }
  return (
    <StyledDiv
    position="static"
    transform="0"
    bg="white"
 
    width="83%"
    border="14px"
    display="flex"
    justify_content="flex-start"  
    direction="column"
    border_color="#F1ECEC"
    align_item="center"
    >

      <StyledText margin="3% 0 0 0"height="10%" align_item="center"position="static" width="90%" font="Pretendard" size="12px"  color="#777777" weight="500" line="16.8px">
        우리팀 주량
      </StyledText>
      <SliderBox position=" static" left="0" transform="0" display="flex" direction="column" >
        {/** divide slider and text */}
        <StyledDiv position="static" transform="0" display="flex" justify_content="center" align_item="flex-end" height="80%">
        <PrettoSlider
          style={{ color: '#F6EEEE' }}
          min={1}
          valueLabelDisplay="on"
          step={1}
          max={5}
          defaultValue={3}
          aria-label="Default"
          value={drink}
          onChange={handleChange}
          marks={true}
          valueLabelFormat={valueLabel}
        />
        </StyledDiv>
       <StyledDiv position="static" transform="0" display="flex" justify_content="space-between" align_item="start" height="10%" margin=" 0 0 3% 0">
            <StyledText size="12px"position="static" transform="0" color="#B79292" font="Nanum JungHagSaeng">level 1</StyledText>
            <StyledText size="12px"position="static" transform="0" color="#B79292" font="Nanum JungHagSaeng">level 5</StyledText>
       </StyledDiv>
      </SliderBox>
    </StyledDiv>
  );
};

export default Drink;

