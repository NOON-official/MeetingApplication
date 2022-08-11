import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { StyledDiv, StyledText } from '../Elements/StyledComponent'
import * as React from 'react'
const buttonColor = '#EB8888'
const MbtiButton = styled.button`
  margin: 5px;
  border-radius: 34px;
  height: 30px;
  width: auto;
  min-width: 60px;
  border: 0;
  background-color: ${(props) => props.background_color || 'transparent'};
  color: ${(props) => props.color || '#B79292'};
`
const MbtiContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: ${(props) => props.location || 'flex-start'};
  position: absolute;
  top: ${(props) => props.top};
  margin-left: 10px;
`
const SelectedBox = styled.div`
  display: flex;
  flex-direction: row;
  height: 20%;
  border: 1px solid #c9c9c9;
  margin: 2%;
`
const MySelect = () => {
  const mbti = useSelector((state) => state.mbti)
  return mbti.map((data) => <Mbti mbti={data}></Mbti>)
}
const SelectedMbti = (props) => {
  return (
    <SelectedBox>
      <MySelect></MySelect>
    </SelectedBox>
  )
}
const Mbti = (props) => {
  const dispatch = useDispatch()
  const mbti = useSelector((state) => state.mbti)
  const num = useSelector((state) => state.num)
  const exist = React.useMemo(() => mbti.includes(props.mbti), [mbti])
  const fontColor = React.useMemo(() => (exist ? 'white' : '#B79292'), [exist])
  const bgColor = React.useMemo(
    () => (exist ? buttonColor : '#FBF6F6'),
    [exist]
  )
  const OnMbtiClick = React.useCallback(() => {
    if (exist) {
      dispatch({ type: 'MBTI_DELETE', payload: props.mbti })
    } else {
      if (mbti.length < num) dispatch({ type: 'MBTI', payload: props.mbti })
    }
  }, [exist, props.mbti, mbti])
  return (
    <MbtiButton
      color={fontColor}
      background_color={bgColor}
      type="button"
      value={props.mbti}
      onClick={OnMbtiClick}
    >
      {props.mbti}
    </MbtiButton>
  )
}
const Mbtis = (props) => {
  return (
    <StyledDiv
      top="30%"
      left="50%"
      bg="white"
      height="40%"
      width="95%"
      border="14px"
      display="flex"
      justify_content="space-between"
      direction="column"
      border_color="#F1ECEC"
    >
      <StyledText
        font="Pretendard"
        size="14px"
        top="10%"
        left="6%"
        color="#777777"
        weight="500"
        line="16.8px"
      >
        MBTI
      </StyledText>
      <MbtiContainer top="20%">
        <Mbti mbti={'ESTP'}></Mbti>
        <Mbti mbti={'ESFP'}></Mbti>
        <Mbti mbti={'ENFP'}></Mbti>
        <Mbti mbti={'ENTP'}></Mbti>
      </MbtiContainer>
      <MbtiContainer top="40%">
        <Mbti mbti={'ESTJ'}></Mbti>
        <Mbti mbti={'ESFJ'}></Mbti>
        <Mbti mbti={'ENFJ'}></Mbti>
        <Mbti mbti={'ENTJ'}></Mbti>
      </MbtiContainer>
      <MbtiContainer top="60%">
        <Mbti mbti={'ISTJ'}></Mbti>
        <Mbti mbti={'ISFJ'}></Mbti>
        <Mbti mbti={'INFJ'}></Mbti>
        <Mbti mbti={'INTJ'}></Mbti>
      </MbtiContainer>
      <MbtiContainer top="80%">
        <Mbti mbti={'ISTP'}></Mbti>
        <Mbti mbti={'ISFP'}></Mbti>
        <Mbti mbti={'INFP'}></Mbti>
        <Mbti mbti={'INTP'}></Mbti>
      </MbtiContainer>
    </StyledDiv>
  )
}

export default Mbtis
