import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { StyledDiv, StyledText } from '../Elements/StyledComponent';
import * as React from 'react';
const buttonColor = '#EB8888';
const MbtiButton = styled.button`
  margin: 5px;
  border-radius: 34px;
  height: 30px;
  width: auto;
  font-family: var(--font-family);
  font-size: 16px;
  min-width: 60px;
  border: 0;
  background-color: ${(props) => props.background_color || 'transparent'};
  color: ${(props) => props.color || '#B79292'};
`;
const MbtiContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: ${(props) => props.location || 'space-around'};
  position: static;
  top: ${(props) => props.top};
`;
const SelectedBox = styled.div`
  display: flex;
  flex-direction: row;
  height: 20%;
  border: 1px solid #c9c9c9;
  margin: 2%;
`;
const MySelect = () => {
  const mbti = useSelector((state) => state.mbti);
  return mbti.map((data) => <Mbti mbti={data}></Mbti>);
};
const SelectedMbti = (props) => {
  return (
    <SelectedBox>
      <MySelect></MySelect>
    </SelectedBox>
  );
};
const Mbti = (props) => {
  const dispatch = useDispatch();
  const mbti = useSelector((state) => state.mbti);
  const num = useSelector((state) => state.num);
  const exist = React.useMemo(() => mbti.includes(props.meta), [mbti]);
  const fontColor = React.useMemo(() => (exist ? 'white' : '#B79292'), [exist]);
  const bgColor = React.useMemo(() => (exist ? buttonColor : '#FBF6F6'), [exist]);
  const OnMbtiClick = React.useCallback(() => {
    if (exist) {
      dispatch({ type: 'MBTI_DELETE', payload: props.meta });
    } else {
      if (mbti.length < num) dispatch({ type: 'MBTI', payload: props.meta });
    }
  }, [exist, props.meta, mbti]);
  return (
    <MbtiButton color={fontColor} background_color={bgColor} type="button" value={props.meta} onClick={OnMbtiClick}>
      {props.mbti}
    </MbtiButton>
  );
};
const Mbtis = (props) => {
  return (
    <StyledDiv
      
    position="static"
    transform="0"
    bg="white"
    height="200px"
    width="100%"
    border="14px"
    display="flex"
    justify_content="space-around"
    direction="column"
    border_color="#F1ECEC"
    align_item="center"
    margin="10% 0 0 0 "
    >
      <StyledText margin="5px 0 0 0"position="static" width="90%"font="Pretendard" size="12px"  color="#777777" weight="500" line="16.8px">
        MBTI
      </StyledText>
      <MbtiContainer >
        <Mbti mbti={'ESTP'}meta={7}></Mbti>
        <Mbti mbti={'ESFP'}meta={5}></Mbti>
        <Mbti mbti={'ENFP'}meta={3}></Mbti>
        <Mbti mbti={'ENTP'}meta={4}></Mbti>
      </MbtiContainer>
      <MbtiContainer >
        <Mbti mbti={'ESTJ'}meta={8}></Mbti>
        <Mbti mbti={'ESFJ'}meta={6}></Mbti>
        <Mbti mbti={'ENFJ'} meta={1}></Mbti>
        <Mbti mbti={'ENTJ'}meta={2}></Mbti>
      </MbtiContainer>
      <MbtiContainer >
        <Mbti mbti={'ISTJ'}meta={15}></Mbti>
        <Mbti mbti={'ISFJ'}meta={14}></Mbti>
        <Mbti mbti={'INFJ'}meta={10}></Mbti>
        <Mbti mbti={'INTJ'}meta={16}></Mbti>
      </MbtiContainer>
      <MbtiContainer >
        <Mbti mbti={'ISTP'}meta={12}></Mbti>
        <Mbti mbti={'ISFP'}meta={13}></Mbti>
        <Mbti mbti={'INFP'}meta={9}></Mbti>
        <Mbti mbti={'INTP'}meta={11}></Mbti>
      </MbtiContainer>
    </StyledDiv>
  );
};

export default Mbtis;
