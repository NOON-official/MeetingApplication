import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import * as React from 'react'
const buttonColor = '#C4D7E0'
const FaceButton = styled.button`
  margin: 5px;
  border-radius: 34px;
  height: 40px;
  width: 70px;
  border: 1px solid #c9c9c9;
  background-color: ${(props) => props.background_color || 'transparent'};
  color: ${(props) => props.color || 'black'};
`
const AppearanceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.location || 'flex-start'};
`
const SelectedBox = styled.div`
  display: flex;
  flex-direction: row;
  height: 27%;
  border: 1px solid #c9c9c9;
  margin: 2%;
`
const MySelect = () => {
  const appearance = useSelector((state) => state.appearance)
  return appearance.map((data) => <Face face={data}></Face>)
}
const SelectedFace = (props) => {
  return (
    <SelectedBox>
      <MySelect></MySelect>
    </SelectedBox>
  )
}

const Face = (props) => {
  const dispatch = useDispatch()
  const appearance = useSelector((state) => state.appearance)
  const exist = React.useMemo(
    () => appearance.includes(props.face),
    [appearance]
  )
  const fontColor = React.useMemo(() => (exist ? 'white' : 'black'), [exist])
  const bgColor = React.useMemo(
    () => (exist ? buttonColor : 'transparent'),
    [exist]
  )
  const OnFaceClick = React.useCallback(() => {
    if (exist) {
      dispatch({ type: 'APPEARANCE_DELETE', payload: props.face })
    } else {
      dispatch({ type: 'APPEARANCE', payload: props.face })
    }
  }, [exist, props.face])
  return (
    <FaceButton
      color={fontColor}
      background_color={bgColor}
      type="button"
      value={props.face}
      onClick={OnFaceClick}
    >
      {props.face}
    </FaceButton>
  )
}
const Appearance = (props) => {
  return (
    <div
      style={
        ({ display: 'flex' }, { flexDirection: 'column' }, { height: '100%' })
      }
    >
      <AppearanceContainer>
        <Face face={'강아지'}></Face>
        <Face face={'고양이'}></Face>
        <Face face={'물고기'}></Face>
      </AppearanceContainer>
      <AppearanceContainer location={'flex-end'}>
        <Face face={'공룡상'}></Face>
        <Face face={'밥상'}></Face>
        <Face face={'최우수상'}></Face>
      </AppearanceContainer>
      <SelectedFace></SelectedFace>
    </div>
  )
}

export default Appearance
