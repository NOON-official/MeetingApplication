import styled from 'styled-components';
import { StyledDiv } from '../Elements/StyledComponent';
import { useSelector, useDispatch } from 'react-redux';

import * as React from 'react';
/*const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 30%;
  left: 50%;
  transform: translate(-50%, 0);
  position: absolute;
  top: 20%;
  width: 95%;
  max-width: 375px;
`*/
const UniversitiesBox = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 10px;
`;

const Uni = styled.button`
  width: ${(props) => props.width || '50%'};
  height: 100%;
  border: 0.2px solid var(--color-lightblue);
  border-radius: var(--round-borderradious);
  margin: 10px;
  max-height: 200px;
  font-family: var(--font-family);
  font-size: 20px;
  color: ${(props) => props.color || 'black'};
  background-color: ${(props) => props.background_color || 'transparent'};
`;
const University = (props) => {
  const dispatch = useDispatch();
  const universities = useSelector((state) => state.preffereduniversity);
  const exist = React.useMemo(() => universities.includes(props.university), [universities]);
  const bgcolor = React.useMemo(() => (exist ? '#EB8888' : '#F6EEEE;'), [exist]);
  const fontColor = React.useMemo(() => (exist ? 'white' : '#B79292'), [exist]);

  const OnUniversityClick = React.useCallback(() => {
    if (exist) {
      dispatch({
        type: 'PREFFEREDUNIVERSITIES_DELETE',
        payload: props.university,
      });
    } else {
      dispatch({ type: 'PREFFEREDUNIVERSITIES', payload: props.university });
    }
  }, [exist, props.university, universities]);

  return (
    <Uni color={fontColor} background_color={bgcolor} onClick={OnUniversityClick}>
      {props.university}
    </Uni>
  );
};

const UnivBox = () => {
  return (
    <StyledDiv width="100%" left="50%" height="45%" top="60%">
      <UniversitiesBox>
        <University university={'외대'}></University>
        <University university={'경희대'}></University>
      </UniversitiesBox>
      <UniversitiesBox>
        <University university={'시립대'}></University>
        <University university={'한예종'}></University>
      </UniversitiesBox>
      <UniversitiesBox>
        <University width={'100%'} university={'상관 없어요'}></University>
      </UniversitiesBox>
    </StyledDiv>
  );
};

export default UnivBox;
