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
  background-color: ${(props) => props.background_color || 'transparent'};
  color: ${(props) => props.color || '#B79292'};
  font-family: Pretendard;
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
`;
const FashionContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: ${(props) => props.location || 'flex-start'};
  position: absolute;
  top: ${(props) => props.top};
  margin-left: 10px;
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
      if (fashion.length < num) dispatch({ type: 'FASHION', payload: props.fashion });
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
      top="75%"
      left="50%"
      bg="white"
      height="25%"
      width="95%"
      border="14px"
      display="flex"
      justify_content="space-between"
      direction="column"
      border_color="#F1ECEC"
    >
      <StyledText font="Pretendard" size="14px" top="10%" left="6%" color="#777777" weight="500" line="16.8px">
        패션
      </StyledText>
      <FashionContainer top="33%">
        <Fashion fashion={'스트릿'}></Fashion>
        <Fashion fashion={'페미닌'}></Fashion>
        <Fashion fashion={'러블리'}></Fashion>
        <Fashion fashion={'클래식'}></Fashion>
      </FashionContainer>
      <FashionContainer top="63%">
        <Fashion fashion={'캐주얼'}></Fashion>
        <Fashion fashion={'베이직'}></Fashion>
        <Fashion fashion={'없음'}></Fashion>
      </FashionContainer>
    </StyledDiv>
  );
};

export default Fashions;
