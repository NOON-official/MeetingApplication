import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { StyledDiv, StyledText } from '../Elements/StyledComponent';
import * as React from 'react';
const buttonColor = '#EB8888';
const FashionButton = styled.button`
  margin: 5px;
  border-radius: 34px;
  height: 30px;
  width: auto;
  min-width: 60px;
  border: 0;
  font-family: var(--font-family);
  background-color: ${(props) => props.background_color || 'transparent'};
  color: ${(props) => props.color || '#B79292'};

  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
`;
const FashionContainer = styled.div`
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
  const fashion = useSelector((state) => state.fashion);
  return fashion.map((data) => <Fashion fashion={data}></Fashion>);
};
const SelectedFashion = (props) => {
  return (
    <SelectedBox>
      <MySelect></MySelect>
    </SelectedBox>
  );
};
const Fashion = (props) => {
  const dispatch = useDispatch();
  const fashion = useSelector((state) => state.fashion);
  const num = useSelector((state) => state.num);
  const exist = React.useMemo(() => fashion.includes(props.fashion), [fashion]);
  const fontColor = React.useMemo(() => (exist ? 'white' : '#B79292'), [exist]);
  const bgColor = React.useMemo(() => (exist ? buttonColor : '#FBF6F6'), [exist]);
  const OnFashionClick = React.useCallback(() => {
    if (exist) {
      dispatch({ type: 'FASHION_DELETE', payload: props.fashion });
    } else {
      dispatch({ type: 'FASHION', payload: props.fashion });
    }
  }, [exist, props.fashion, fashion]);
  return (
    <FashionButton
      color={fontColor}
      background_color={bgColor}
      type="button"
      value={props.fashion}
      onClick={OnFashionClick}
    >
      {props.fashion}
    </FashionButton>
  );
};
const Fashions = (props) => {
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
      <StyledText  margin="5px 0 0 0"position="static" width="90%"font="Pretendard" size="14px"  color="#777777" weight="500" line="16.8px">
        패션
      </StyledText>
      <FashionContainer top="28%">
        <Fashion fashion={'베이직'}></Fashion>
        <Fashion fashion={'캐주얼'}></Fashion>
        <Fashion fashion={'스트릿'}></Fashion>
        <Fashion fashion={'스포티'}></Fashion>
      </FashionContainer>
      <FashionContainer top="58%">
        <Fashion fashion={'페미닌'}></Fashion>
        <Fashion fashion={'걸리쉬'}></Fashion>
        <Fashion fashion={'무신사'}></Fashion>
        <Fashion fashion={'파자마'}></Fashion>
      </FashionContainer>
    </StyledDiv>
  );
};

export default Fashions;
