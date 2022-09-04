import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as SliderThumb } from '../../Asset/Slider/SliderThumb.svg';
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
      backgroundimage:`url("https://picsum.photos/40/40")`,
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
        dispatch({ type: 'DRINK', payload: newValue });
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
      <StyledText margin="10px 0 0 0"position="static" width="90%" font="Pretendard" size="14px"  color="#777777" weight="500" line="16.8px">
        주량 레벨
      </StyledText>
      <SliderBox position=" static" left="0" transform="0" display="flex" direction="column" >
        {/** divide slider and text */}
        <StyledDiv position="static" transform="0" display="flex" justify_content="center" align_item="end" height="50px">
        <PrettoSlider
          style={{ color: '#F6EEEE' }}
          min={0}
          valueLabelDisplay="on"
          step={1}
          max={5}
          defaultValue={3}
          aria-label="Default"
          value={drink}
          onChange={handleChange}
          marks={true}
        
        />
        </StyledDiv>
       <StyledDiv position="static" transform="0" display="flex" justify_content="space-between" align_item="start">
            <StyledText position="static" transform="0" color="#B79292" font="Nanum JungHagSaeng">Level1</StyledText>
            <StyledText position="static" transform="0" color="#B79292" font="Nanum JungHagSaeng">Level5</StyledText>
       </StyledDiv>
      </SliderBox>
    </StyledDiv>
  );
};

export default Drink;

