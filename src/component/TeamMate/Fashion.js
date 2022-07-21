import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import * as React from 'react'
const buttonColor = '#C4D7E0'
const FashionButton = styled.button`
  margin: 5px;
  border-radius: 34px;
  height: 40px;
  width: 70px;
  border: 1px solid #c9c9c9;
  background-color: ${(props) => props.background_color || 'transparent'};
  color: ${(props) => props.color || 'black'};
`
const FashionContainer = styled.div`
  display: flex;
  flex-direction: row;
`
const SelectedBox = styled.div`
  display: flex;
  flex-direction: row;
  height: 27%;
  border: 1px solid #c9c9c9;
  margin: 2%;
`
const MySelect = () => {
  const fashion = useSelector((state) => state.fashion)
  return fashion.map((data) => <Fashion fashion={data}></Fashion>)
}
const SelectedFashion = (props) => {
  return (
    <SelectedBox>
      <MySelect></MySelect>
    </SelectedBox>
  )
}
const Fashion = (props) => {
  const dispatch = useDispatch()
  const fashion = useSelector((state) => state.fashion)
  const exist = React.useMemo(() => fashion.includes(props.fashion), [fashion])
  const fontColor = React.useMemo(() => (exist ? 'white' : 'black'), [exist])
  const bgColor = React.useMemo(
    () => (exist ? buttonColor : 'transparent'),
    [exist]
  )
  const OnFashionClick = React.useCallback(() => {
    if (exist) {
      dispatch({ type: 'FASHION_DELETE', payload: props.fashion })
    } else {
      dispatch({ type: 'FASHION', payload: props.fashion })
    }
  }, [exist, props.fashion])
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
  )
}
const Fashions = (props) => {
  return (
    <div
      style={
        ({ display: 'flex' }, { flexDirection: 'column' }, { height: '100%' })
      }
    >
      <FashionContainer>
        <Fashion fashion={'스트릿'}></Fashion>
        <Fashion fashion={'페미닌'}></Fashion>
        <Fashion fashion={'러블리'}></Fashion>
        <Fashion fashion={'클래식'}></Fashion>
      </FashionContainer>
      <FashionContainer>
        <Fashion fashion={'캐주얼'}></Fashion>
        <Fashion fashion={'베이직'}></Fashion>
        <Fashion fashion={'없음'}></Fashion>
      </FashionContainer>
      <SelectedFashion></SelectedFashion>
    </div>
  )
}

export default Fashions
