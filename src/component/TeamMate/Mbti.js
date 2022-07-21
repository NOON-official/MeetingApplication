import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import * as React from 'react'
const buttonColor = '#C4D7E0'
const MbtiButton = styled.button`
  margin: 5px;
  border-radius: 34px;
  height: 40px;
  width: 70px;
  border: 1px solid #c9c9c9;

  background-color: ${(props) => props.background_color || 'transparent'};
  color: ${(props) => props.color || 'black'};
`
const MbtiContainer = styled.div`
  display: flex;
  flex-direction: row;
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
  const exist = React.useMemo(() => mbti.includes(props.mbti), [mbti])
  const fontColor = React.useMemo(() => (exist ? 'white' : 'black'), [exist])
  const bgColor = React.useMemo(
    () => (exist ? buttonColor : 'transparent'),
    [exist]
  )
  const OnMbtiClick = React.useCallback(() => {
    if (exist) {
      dispatch({ type: 'MBTI_DELETE', payload: props.mbti })
    } else {
      dispatch({ type: 'MBTI', payload: props.mbti })
    }
  }, [exist, props.mbti])
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
    <div
      style={
        ({ display: 'flex' }, { flexDirection: 'column' }, { height: '100%' })
      }
    >
      <MbtiContainer>
        <Mbti mbti={'ESTP'}></Mbti>
        <Mbti mbti={'ESFP'}></Mbti>
        <Mbti mbti={'ENFP'}></Mbti>
        <Mbti mbti={'ENTP'}></Mbti>
      </MbtiContainer>
      <MbtiContainer>
        <Mbti mbti={'ESTJ'}></Mbti>
        <Mbti mbti={'ESFJ'}></Mbti>
        <Mbti mbti={'ENFJ'}></Mbti>
        <Mbti mbti={'ENTJ'}></Mbti>
      </MbtiContainer>
      <MbtiContainer>
        <Mbti mbti={'ISTJ'}></Mbti>
        <Mbti mbti={'ISFJ'}></Mbti>
        <Mbti mbti={'INFJ'}></Mbti>
        <Mbti mbti={'INTJ'}></Mbti>
      </MbtiContainer>
      <MbtiContainer>
        <Mbti mbti={'ISTP'}></Mbti>
        <Mbti mbti={'ISFP'}></Mbti>
        <Mbti mbti={'INFP'}></Mbti>
        <Mbti mbti={'INTP'}></Mbti>
      </MbtiContainer>
      <SelectedMbti></SelectedMbti>
    </div>
  )
}

export default Mbtis
