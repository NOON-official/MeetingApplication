import styled from 'styled-components';
import * as React from 'react';
import { StyledDiv } from '../Elements/StyledComponent';
import { useSelector, useDispatch } from 'react-redux';

const WantBox = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 15px;
`;
const Thing = styled.button`
  width: ${(props) => props.width || '30%'};
  height: 100%;
  border: 0.2px solid var(--color-lightblue);
  border-radius: var(--round-borderradious);
  margin: 10px;
  max-height: 200px;
  min-width: 86px;
  font-family: var(--font-family);
  font-size: ${(props) => props.width || '16px'};
  color: ${(props) => props.color || 'black'};
  background-color: ${(props) => props.background_color || 'transparent'};
`;
const Want = (props) => {
  const dispatch = useDispatch();
  const want = useSelector((state) => state.prefferedthing);
  const exist = React.useMemo(() => want.includes(props.want), [want]);
  const bgcolor = React.useMemo(() => (exist ? '#EB8888' : '#F6EEEE'), [exist]);
  const fontColor = React.useMemo(() => (exist ? 'white' : '#B79292'), [exist]);

  const OnwantClick = React.useCallback(() => {
    if (exist) {
      dispatch({ type: 'DELETE_PREFFEREDTHING', payload: props.want });
    } else {
      dispatch({ type: 'SET_PREFFEREDTHING', payload: props.want });
    }
  }, [exist, props.want]);

  return (
    <Thing size={props.size} color={fontColor} background_color={bgcolor} onClick={OnwantClick} width={props.width}>
      {props.want}
    </Thing>
  );
};

const Wants = () => {
  return (
    <StyledDiv top="25%" width="95%" height="65%" left="50%">
      <WantBox>
        <Want want="술게임 좋아요"></Want>
        <Want want="보드게임 좋아요"></Want>
        <Want want="대화가 좋아요"></Want>
      </WantBox>
      <WantBox>
        <Want want="설렘이 좋아요"></Want>
        <Want want="재밌는 게 좋아요"></Want>
        <Want want="마시고 죽자"></Want>
      </WantBox>
      <WantBox>
        <Want want="술은 싫어요"></Want>
        <Want want="구독과 좋아요"></Want>
        <Want want="아무거나 좋아요"></Want>
      </WantBox>
    </StyledDiv>
  );
};

export default Wants;
