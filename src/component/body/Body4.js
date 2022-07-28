import styled from 'styled-components'
import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CharactorContainer from '../Characters/CharactorContainer'
import {
  Container,
  MobileBox,
  Title,
  SubTitle,
  ButtonBox,
} from '../Elements/StyledComponent'

const buttonColor = '#C4D7E0'

const Contents = styled.div`
  font-family: 'Single Day', cursive;
  top: 70%;
  font-size: 18px;
  font-weight: 400;
  height: 20px;
  left: calc(50% - 175px);
  margin: 0;
  color: #000;
  white-space: pre-wrap;
  font-style: normal;
  letter-spacing: -0.015em;
  line-height: 149.8%;
  position: absolute;
  text-align: center;
  width: 350px;
`

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
const Character = (props) => {
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

const Body4 = () => {
  return (
    <Container>
      <MobileBox>
        <Title>우리 팀원을 소개해요</Title>
        <CharactorContainer></CharactorContainer>

        <Contents>
          미팅 나갈 구성원을 알려주세요~
          <ButtonBox>
            <Character character={'개그맨'}>개그맨</Character>
            <Character character={'비주얼'}>비주얼</Character>
            <Character character={'사회자'}>사회자</Character>
            <Character character={'깍두기'}>깍두기</Character>
          </ButtonBox>
        </Contents>
      </MobileBox>
    </Container>
  )
}

export default Body4
