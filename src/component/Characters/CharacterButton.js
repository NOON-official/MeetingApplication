import styled from 'styled-components'
import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
const buttonColor = '#C4D7E0'
const CharacterButton = styled.button`
  font-family: 'Single Day', cursive;
  margin: 5px;
  border-radius: 34px;
  height: 40px;
  width: 70px;
  border: 0.5px solid var(--color-lightblue);
  background-color: ${(props) => props.background_color || 'transparent'};
  color: ${(props) => props.color || 'black'};
`
export const Character = (props) => {
  const dispatch = useDispatch()
  const characters = useSelector((state) => state.characters)
  const num = useSelector((state) => state.num)
  const exist = React.useMemo(
    () => characters.includes(props.character),
    [characters]
  )

  const fontColor = React.useMemo(() => (exist ? 'white' : 'black'), [exist])
  const bgColor = React.useMemo(
    () => (exist ? buttonColor : 'transparent'),
    [exist]
  )
  const OnCharacterClick = React.useCallback(() => {
    console.log('exist', exist)
    if (exist) {
      dispatch({ type: 'CHARACTERS_DELETE', payload: props.character })
    } else {
      if (characters.length < num)
        dispatch({ type: 'CHARACTERS', payload: props.character })
    }
  }, [exist, props.character, characters])

  return (
    <CharacterButton
      color={fontColor}
      background_color={bgColor}
      onClick={OnCharacterClick}
    >
      {props.character}
    </CharacterButton>
  )
}
