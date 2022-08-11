import { useSelector, useDispatch } from 'react-redux';
import Slider from '@mui/material/Slider';
import styled from 'styled-components';
import * as React from 'react';
import { Contents } from '../Elements/StyledComponent';
const buttonColor = '#FFDCE1';

const ContentsAge = styled.div`
  display: flex;
  flex-direction: column;
  color: '#FFDCE1' !important;
  position: absolute;
  top: ${(props) => props.top || '26%'};
  left: 50%;
  transform: translate(-50%, 0);
  font-weight: 800;
  justify-content: center;
  align-items: center;
  width: 300px;
`;
const SelectButton = styled.button`
  margin-right: 3px;
  border-radius: 34px;
  height: 40px;
  width: 70px;
  background-color: ${(props) => props.background_color || 'transparent'};
  color: ${(props) => props.color};
  border-color: #80808029;
`;

const Job = (props) => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.prefferedjobs);
  const exists = React.useMemo(() => jobs.includes(props.job), [jobs]);
  const fontColor = React.useMemo(() => (exists ? 'white' : 'black'), [exists]);
  const bgColor = React.useMemo(() => (exists ? buttonColor : 'transparent'), [exists]);

  const onJobClick = React.useCallback(() => {
    if (exists) {
      dispatch({ type: 'PREFFEREDJOBS_DELETE', payload: props.job });
    } else {
      dispatch({ type: 'PREFFEREDJOBS', payload: props.job });
    }
  }, [exists, props.job]);

  return (
    <SelectButton color={fontColor} background_color={bgColor} onClick={onJobClick}>
      {props.job}
    </SelectButton>
  );
};
export const JobSelect = () => {
  return (
    <Contents position={'absolute'} flexDirection={'row'} top={'13%'}>
      <Job job={'대학생'}></Job>
      <Job job={'직장인'}></Job>
      <Job job={'대학원생'}></Job>
      <Job job={'취준생'}></Job>
    </Contents>
  );
};
export const AgeSelect = () => {
  const dispatch = useDispatch();
  const age = useSelector((state) => state.prefferedage);
  const handleChange = (event, newValue) => {
    if (typeof newValue === 'number') {
      dispatch({ type: 'PREFFEREDAGE', payload: newValue });
    }
  };
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
  );
};
