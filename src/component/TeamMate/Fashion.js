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
  const exist = React.useMemo(() => fashion.includes(props.meta), [fashion]);
  const fontColor = React.useMemo(() => (exist ? 'white' : '#B79292'), [exist]);
  const bgColor = React.useMemo(() => (exist ? buttonColor : '#FBF6F6'), [exist]);
  const OnFashionClick = React.useCallback(() => {
    if (exist) {
      dispatch({ type: 'FASHION_DELETE', payload: props.meta });
    } else {
      dispatch({ type: 'FASHION', payload: props.meta });
    }
  }, [exist, props.meta, fashion]);
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
      <StyledText  margin="5px 0 0 0"position="static" width="90%"font="Pretendard" size="12px"  color="#777777" weight="500" line="16.8px">
        패션
      </StyledText>
      <FashionContainer top="28%">
        <Fashion fashion={'베이직'} meta={1}></Fashion>
        <Fashion fashion={'캐주얼'} meta={2}></Fashion>
        <Fashion fashion={'스트릿'}meta={3}></Fashion>
        <Fashion fashion={'스포티'}meta={4}></Fashion>
      </FashionContainer>
      <FashionContainer top="58%">
        <Fashion fashion={'페미닌'}meta={5}></Fashion>
        <Fashion fashion={'걸리쉬'} meta={6}></Fashion>
        <Fashion fashion={'무신사'} meta={7}></Fashion>
        <Fashion fashion={'파자마'} meta={8}></Fashion>
      </FashionContainer>
    </StyledDiv>
  );
};

export default Fashions;
