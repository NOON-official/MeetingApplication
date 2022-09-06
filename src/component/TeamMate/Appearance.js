import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import * as React from 'react';
import { StyledDiv, StyledText } from '../Elements/StyledComponent';
const buttonColor = '#EB8888';
const FaceButton = styled.button`
  margin: 5px;
  border-radius: 34px;
  height: 30px;
  width: auto;
  min-width: 60px;
  font-size: 16px;
  min-height: 30px;
  font-family: var(--font-family);
  border: 0;
  background-color: ${(props) => props.background_color || 'transparent'};
  color: ${(props) => props.color || '#B79292'};
`;
const AppearanceContainer = styled.div`
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
  height: 27%;
  border: 1px solid #c9c9c9;
  margin: 2%;
`;
const MySelect = () => {
  const appearance = useSelector((state) => state.appearance);
  return appearance.map((data) => <Face face={data}></Face>);
};
const SelectedFace = (props) => {
  return (
    <SelectedBox>
      <MySelect></MySelect>
    </SelectedBox>
  );
};

const Face = (props) => {
  const dispatch = useDispatch();
  const appearance = useSelector((state) => state.appearance);
  const num = useSelector((state) => state.num);
  const exist = React.useMemo(() => appearance.includes(props.face), [appearance]);
  const fontColor = React.useMemo(() => (exist ? 'white' : '#B79292'), [exist]);
  const bgColor = React.useMemo(() => (exist ? buttonColor : '#FBF6F6'), [exist]);
  const OnFaceClick = React.useCallback(() => {
    if (exist) {
      dispatch({ type: 'APPEARANCE_DELETE', payload: props.face });
    } else {
      if (appearance.length < num) dispatch({ type: 'APPEARANCE', payload: props.face });
    }
  }, [exist, props.face, appearance]);
  return (
    <FaceButton color={fontColor} background_color={bgColor} type="button" value={props.face} onClick={OnFaceClick}>
      {props.face}
    </FaceButton>
  );
};
const Appearance = (props) => {
  return (
    <StyledDiv
      
      position="static"
      transform="0"
      bg="white"
      height="120px"
      width="100%"
      border="14px"
      display="flex"
      justify_content="space-around"
      direction="column"
      border_color="#F1ECEC"
      align_item="center"
    >
      <StyledText margin="5px 0 0 0" position="static" width="90%" font="Pretendard" size="12px"  color="#777777" weight="500" line="16.8px">
        외모
      </StyledText>
      <AppearanceContainer >
        <Face face={'강아지상'}></Face>
        <Face face={'고양이상'}></Face>
        <Face face={'토끼상'}></Face>
        <Face face={'공룡상'}></Face>
      </AppearanceContainer>
      <AppearanceContainer >
        <Face face={'말상'}></Face>
        <Face face={'원숭이상'}></Face>
        <Face face={'여우상'}></Face>
        <Face face={'쥐상'}></Face>
      </AppearanceContainer>
    </StyledDiv>
  );
};

export default Appearance;
