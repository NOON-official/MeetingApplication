import styled from 'styled-components';
import * as React from 'react';
import { StyledDiv } from '../Elements/StyledComponent';
import { useSelector, useDispatch } from 'react-redux';

const AreaBox = styled.div`
  width: 100%;
  height: 12%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 15px;
`;
const Area = styled.button`
  width: ${(props) => props.width || '90%'};
  height: 100%;
  
  border: 0.2px solid var(--color-lightblue);
  border-radius: var(--round-borderradious);
  margin: ${(props)=>props.margin||"10px"};
  max-height: 50px;
  font-family: var(--font-family);
  font-size: 20px;
  color: ${(props) => props.color || 'black'};
  background-color: ${(props) => props.background_color || 'transparent'};
`;
const Areas = (props) => {
  const dispatch = useDispatch();
  const area = useSelector((state) => state.area);
  const exist = React.useMemo(() => area.includes(props.meta), [area]);
  const bgcolor = React.useMemo(() => (exist ? '#EB8888' : '#F6EEEE'), [exist]);
  const fontColor = React.useMemo(() => (exist ? 'white' : '#B79292'), [exist]);
  const bgColor = React.useMemo(() => (exist ? '#F6EEEE' : 'transparent'), [exist]);
  const OnAreaClick = React.useCallback(() => {
    if (exist) {
      dispatch({ type: 'AREA_DELETE', payload: props.meta });
    } else {
      dispatch({ type: 'AREA', payload: props.meta });
    }
  }, [exist, props.meta]);
  return (
    <Area color={fontColor} margin="1%"background_color={bgcolor} onClick={OnAreaClick} width={props.width}>
      {props.area}
    </Area>
  );
};

const AreaContainer = () => {
  return (
    <StyledDiv top="20%" width="95%" height="50%" left="50%" display="flex" direction="column" justify_content="spcae-around">
        <Areas area="강남" meta={1} width="98%"></Areas>
        <Areas area="건대" meta={2}width="98%"></Areas> 
        <Areas area="신촌" meta={3}width="98%"></Areas> 
        <Areas area="홍대" meta={4}width="98%"></Areas> 
        <Areas area="상관없음" meta={5}width="98%"></Areas> 
    </StyledDiv>
  );
};

export default AreaContainer;
