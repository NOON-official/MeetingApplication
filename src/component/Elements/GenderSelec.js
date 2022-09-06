import * as React from 'react';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { SubTitle, ButtonBox, SliderBox, Contents, ContentsAge, SelectButton, StyledText } from './StyledComponent';

const PrettoSlider = styled(Slider)({
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

export const GenderSelect = () => {
  const dispatch = useDispatch();
  const gender = useSelector((state) => state.gender);
  const setmale = React.useCallback(() => {
    dispatch({ type: 'SET_MALE' });
  }, [dispatch]);
  const setfemale = React.useCallback(() => {
    dispatch({ type: 'SET_FEMALE' });
  }, [dispatch]);
  // 남자: true, 여자 : false

  const ColorMale = gender === '남자' ? '#EB8888' : '#F6EEEE';
  const colorM = gender === '남자' ? 'white' : '#B79292';
  const ColorFemale = gender === '남자' ? '#F6EEEE' : '#EB8888';
  const colorF = gender === '남자' ? '#B79292' : 'white';

  return (
    <Contents>
      <SubTitle weight="500" font="Pretendard" top="5%" left="5%">
        성별
      </SubTitle>
      <ButtonBox top="12%">
        <SelectButton
          variant="extended"
          size="small"
          background_color={ColorMale}
          color={colorM}
          aria-label="add"
          onClick={setmale}
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
          onClick={setfemale}
        >
          여자
        </SelectButton>
      </ButtonBox>
    </Contents>
  );
};
export const NumberSelect = () => {
  const dispatch = useDispatch();
  const number = useSelector((state) => state.num);
  function setnumber(value) {
    dispatch({ type: 'NUMBER', payload: value });
  }
  return (
    <Contents>
      <SubTitle weight="500" font="Pretendard" top="28%" left="6%">
        인원수
      </SubTitle>

      <ButtonBox top="38%">
        <SelectButton
          variant="extended"
          size="small"
          background_color={number === 2 ? '#EB8888' : '#F6EEEE'}
          color={number === 2 ? 'white' : '#B79292'}
          aria-label="add"
          onClick={() => setnumber(2)}
          width="50%"
        >
          2 : 2
        </SelectButton>
        <SelectButton
          variant="extended"
          size="small"
          background_color={number === 3 ? '#EB8888' : '#F6EEEE'}
          color={number === 3 ? 'white' : '#B79292'}
          aria-label="add"
          onClick={() => setnumber(3)}
          width="50%"
        >
          3 : 3
        </SelectButton>
       
      </ButtonBox>
    </Contents>
  );
};
export const AgeSelect = () => {
  const dispatch = useDispatch();
  const age = useSelector((state) => state.age);
  const handleChange = (event, newValue) => {
    if (typeof newValue === 'number') {
      dispatch({ type: 'AGE', payload: newValue });
    }
  };

  return (
    <ContentsAge>
      <SubTitle weight="500" font="Pretendard" top="53%" left="8%">
        평균나이
      </SubTitle>
      <SliderBox top="60%">
        <StyledText top="75%" size="15px" color="#B79292">
          20세
        </StyledText>
        <StyledText top="75%" left="90%" size="15px" color="#B79292">
          35세
        </StyledText>
        <PrettoSlider
          style={{ color: '#F6EEEE' }}
          min={20}
          valueLabelDisplay="on"
          step={1}
          max={35}
          defaultValue={30}
          aria-label="Default"
          value={age}
          onChange={handleChange}
        />
      </SliderBox>
    </ContentsAge>
  );
};

const Job = (props) => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs);
  const num = useSelector((state) => state.num);
  const exists = React.useMemo(() => jobs.includes(props.job), [jobs, props.job]);
  const fontColor = React.useMemo(() => (exists ? 'white' : '#B79292'), [exists]);
  const bgColor = React.useMemo(() => (exists ? '#EB8888' : '#F6EEEE'), [exists]);

  const onJobClick = React.useCallback(() => {
    if (exists) {
      dispatch({ type: 'JOBS_DELETE', payload: props.job });
    } else {
      if (jobs.length < num) dispatch({ type: 'JOBS', payload: props.job });
    }
  }, [exists, dispatch, props.job, jobs, num]);

  return (
    <SelectButton color={fontColor} background_color={bgColor} onClick={onJobClick} width="25%">
      {props.job}
    </SelectButton>
  );
};
export const JobSelect = () => {
  return (
    <Contents>
      <SubTitle weight="500" font="Pretendard" top="75%" left="5%">
        {' '}
        직업
      </SubTitle>
      <SubTitle weight="500" size="13px" font="pretendard" color="#AAAAAA" left="32%" top="75%">
        중복 선택이 가능해요
      </SubTitle>
      <ButtonBox top="85%">
        <Job job={'대학생'}></Job>
        <Job job={'직장인'}></Job>
        <Job job={'대학원생'}></Job>
        <Job job={'취준생'}></Job>
      </ButtonBox>
    </Contents>
  );
};
