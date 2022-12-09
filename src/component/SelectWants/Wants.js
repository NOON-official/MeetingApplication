import styled from 'styled-components';
import * as React from 'react';
import { StyledDiv } from '../Elements/StyledComponent';
import { useSelector, useDispatch } from 'react-redux';
const WantBox = styled.div`
  width: 100%;
  height: 20%;
  max-height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Thing = styled.button`
  width: ${(props) => props.width || '90%'};
  height: 90%;
  border: 0.2px solid var(--color-lightblue);
  border-radius: var(--round-borderradious);

  max-height: 200px;

  font-family: var(--font-family);
  font-size: ${(props) => props.size || '16px'};
  color: ${(props) => props.color || 'black'};
  background-color: ${(props) => props.background_color || 'transparent'};
`;
const Want = (props) => {
  const dispatch = useDispatch();
  const want = useSelector((state) => state.prefferedthing);
  const exist = React.useMemo(() => want.includes(props.meta), [want]);
  const bgcolor = React.useMemo(() => (exist ? '#EB8888' : '#F6EEEE'), [exist]);
  const fontColor = React.useMemo(() => (exist ? 'white' : '#B79292'), [exist]);

  const OnwantClick = React.useCallback(() => {
    if (exist) {
      dispatch({ type: 'DELETE_PREFFEREDTHING', payload: props.meta });
    } else {
      dispatch({ type: 'SET_PREFFEREDTHING', payload: props.meta });
    }
  }, [exist, props.meta]);

  return (
    <Thing size={props.size} color={fontColor} background_color={bgcolor} onClick={OnwantClick} width={props.width}>
      {props.want}
    </Thing>
  );
};

const Wants = () => {
  return (
    <StyledDiv
      top="17%"
      width="95%"
      height="45%"
      left="50%"
      display="flex"
      direction="column"
      justify_content="space-between"
    >
      <WantBox>
        <Want want="코로나 때문에 못한 연애 오늘!?" meta={1}></Want>
      </WantBox>
      <WantBox>
        <Want want="친구는 다다익선! 찐친 만들어 보자." meta={2}></Want>
      </WantBox>
      <WantBox>
        <Want want="왁자지껄 이 밤이 떠너가라!" meta={3}></Want>
      </WantBox>
      <WantBox>
        <Want want="술게임 한 수 배우러 왔습니다." meta={4}></Want>
      </WantBox>
      <WantBox>
        <Want want="술게임 못해도 챙겨주는 훈훈한 분위기." meta={5}></Want>
      </WantBox>
    </StyledDiv>
  );
};

export default Wants;
