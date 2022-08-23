import styled from 'styled-components';
import * as React from 'react';
import { StyledDiv } from '../Elements/StyledComponent';
import { useSelector, useDispatch } from 'react-redux';

const AreaBox = styled.div`
  width: 100%;
  height: 12%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 15px;
`;
const Area = styled.button`
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
const Areas = (props) => {
  const dispatch = useDispatch();
  const area = useSelector((state) => state.area);
  const exist = React.useMemo(() => area.includes(props.area), [area]);
  const bgcolor = React.useMemo(() => (exist ? '#EB8888' : '#F6EEEE'), [exist]);
  const fontColor = React.useMemo(() => (exist ? 'white' : '#B79292'), [exist]);
  const bgColor = React.useMemo(() => (exist ? '#F6EEEE' : 'transparent'), [exist]);
  const OnAreaClick = React.useCallback(() => {
    if (exist) {
      dispatch({ type: 'AREA_DELETE', payload: props.area });
    } else {
      dispatch({ type: 'AREA', payload: props.area });
    }
  }, [exist, props.area]);
  return (
    <Area color={fontColor} background_color={bgcolor} onClick={OnAreaClick} width={props.width}>
      {props.area}
    </Area>
  );
};

const AreaContainer = () => {
  return (
    <StyledDiv top="20%" width="95%" height="65%" left="50%">
      <AreaBox>
        <Areas area="상관없음"></Areas>
        <Areas area="강남"></Areas>
        <Areas area="건대"></Areas>
      </AreaBox>
      <AreaBox>
        <Areas area="사당"></Areas>
        <Areas area="신촌"></Areas>
        <Areas area="이태원"></Areas>
      </AreaBox>
      <AreaBox>
        <Areas area="잠실"></Areas>
        <Areas area="홍대"></Areas>
        <Areas area="회기"></Areas>
      </AreaBox>
      <AreaBox>
        <Areas area="대학로"></Areas>
        <Areas area="왕십리"></Areas>

        <Areas area="성수"></Areas>
      </AreaBox>
    </StyledDiv>
  );
};

export default AreaContainer;
