import styled from 'styled-components';
import { StyledDiv } from '../Elements/StyledComponent';
import { useSelector, useDispatch } from 'react-redux';

import * as React from 'react';

const UniversitiesBox = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Uni = styled.button`
  width: ${(props) => props.width || '45%'};
  height: 100%;
  border: 0.2px solid var(--color-lightblue);
  border-radius: var(--round-borderradious);
 
  max-height: 200px;
  font-family: var(--font-family);
  font-size: 20px;
  color: ${(props) => props.color || 'black'};
  background-color: ${(props) => props.background_color || 'transparent'};
`;
const University = (props) => {
  const dispatch = useDispatch();
  const universities = useSelector((state) => state.preffereduniversity);

  const zerobgcolor = React.useMemo(() => (universities == 0 ? '#EB8888' : '#F6EEEE;'), [universities]);
  const zerofontColor = React.useMemo(() => (universities == 0 ? 'white' : '#B79292'), [universities]);
  const onebgcolor = React.useMemo(() => (universities == 1 ? '#EB8888' : '#F6EEEE;'), [universities]);
  const onefontColor = React.useMemo(() => (universities == 1 ? 'white' : '#B79292'), [universities]);
  const OnUniversityClick = React.useCallback(() => {
    dispatch({ type: 'PREFFEREDUNIVERSITIES', payload: props.reduxnum });
  }, [dispatch]);
  if (props.reduxnum == 0) {
    return (
      <Uni color={zerofontColor} background_color={zerobgcolor} onClick={OnUniversityClick}>
        {props.university}
      </Uni>
    );
  } else {
    return (
      <Uni color={onefontColor} background_color={onebgcolor} onClick={OnUniversityClick}>
        {props.university}
      </Uni>
    );
  }
};

const UnivBox = () => {
  return (
    <StyledDiv position="static" width="100%" left="0" transform="0" height="45px">
      <UniversitiesBox>
        <University reduxnum={1} university={'같은 학교는 싫어요'}></University>
        <University reduxnum={2} university={'상관 없어요'}></University>
      </UniversitiesBox>
    </StyledDiv>
  );
};

export default UnivBox;
