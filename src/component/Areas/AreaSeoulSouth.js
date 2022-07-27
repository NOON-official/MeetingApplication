import { useState } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import * as React from 'react'
const buttonColor = '#C4D7E0'
const BoxButton = styled.button`
  display: flex;
  flex-direction: column;
  position: absolute;
  font-family: 'Single Day', cursive;
  top: 50%;
  width: 50%;
  height: 30%;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.background_color || 'transparent'}!important;
  color: ${(props) => props.color} !important;
  border: 0;
`
const TextTitle = styled.div`
  font-weight: bold;
  font-size: 23px;
`
const TextSub = styled.div`
  font-weight: bold;
  font-size: 18px;
  margin-top: 10px;
  color: #c9c9c9;
`
const Title = (props) => {
  return <TextTitle>{props.title}</TextTitle>
}
const Sub = (props) => {
  return <TextSub>{props.sub}</TextSub>
}
const Box = (props) => {
  const dispatch = useDispatch()
  const area = useSelector((state) => state.area)
  const exist = React.useMemo(() => area.includes(props.area), [area])
  const fontColor = React.useMemo(() => (exist ? 'white' : 'black'), [exist])
  const bgColor = React.useMemo(
    () => (exist ? buttonColor : 'transparent'),
    [exist]
  )
  const OnAreaClick = React.useCallback(() => {
    if (exist) {
      dispatch({ type: 'AREA_DELETE', payload: props.area })
    } else {
      dispatch({ type: 'AREA', payload: props.area })
    }
  }, [exist, props.area])
  return (
    <BoxButton
      color={fontColor}
      background_color={bgColor}
      onClick={() => OnAreaClick(props.area)}
    >
      <Title title={'강남'}></Title>
      <Sub sub={'서초.방배.사당'}></Sub>
    </BoxButton>
  )
}
const AreaSeoulSouth = () => {
  return <Box area={'강남'}></Box>
}

export default AreaSeoulSouth
