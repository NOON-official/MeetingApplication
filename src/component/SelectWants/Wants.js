import styled from 'styled-components'
import * as React from 'react'
import { StyledDiv } from '../Elements/StyledComponent'
import { useSelector, useDispatch } from 'react-redux'

const WantBox = styled.div`
  width: 100%;
  height: 8%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 15px;
`
const Thing = styled.button`
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
`
const Want = (props) => {
  const dispatch = useDispatch()
  const want = useSelector((state) => state.prefferedthing)
  const exist = React.useMemo(() => want.includes(props.want), [want])
  const bgcolor = React.useMemo(() => (exist ? '#EB8888' : '#F6EEEE'), [exist])
  const fontColor = React.useMemo(() => (exist ? 'white' : '#B79292'), [exist])

  const OnwantClick = React.useCallback(() => {
    if (exist) {
      dispatch({ type: 'DELETE_PREFFEREDTHING', payload: props.want })
    } else {
      dispatch({ type: 'SET_PREFFEREDTHING', payload: props.want })
    }
  }, [exist, props.want])
  return (
    <Thing
      color={fontColor}
      background_color={bgcolor}
      onClick={OnwantClick}
      width={props.width}
    >
      {props.want}
    </Thing>
  )
}

const Wants = () => {
  return (
    <StyledDiv top="25%" width="95%" height="65%" left="50%">
      <WantBox>
        <Want want="술게임"></Want>
        <Want want="보드게임"></Want>
        <Want want="대화"></Want>
      </WantBox>
      <WantBox>
        <Want want="설레임"></Want>
        <Want want="재미"></Want>
        <Want want="마시고 죽자"></Want>
      </WantBox>
      <WantBox>
        <Want want="술은 싫어.."></Want>
        <Want want="노잼"></Want>
        <Want want="인생 상담"></Want>
      </WantBox>
    </StyledDiv>
  )
}

export default Wants
