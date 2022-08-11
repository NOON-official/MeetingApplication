import styled from 'styled-components';
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyledDiv } from '../Elements/StyledComponent';
import { ReactComponent as Comedian } from '../../Asset/page7/Comedian.svg';
import { ReactComponent as Moderator } from '../../Asset/page7/Moderator.svg';
import { ReactComponent as Face } from '../../Asset/page7/Face.svg';
import { ReactComponent as Nerd } from '../../Asset/page7/Nerd.svg';

const buttonColor = '#C4D7E0';
const CharacterButton = styled.button`
  font-family: 'Single Day', cursive;
  height: 40px;
  width: 70px;
  border: 0;
  background-color: transparent;
  color: ${(props) => props.color || '#1A1A1A'};
`;

export const Character = (props) => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters);
  const num = useSelector((state) => state.num);
  const exist = React.useMemo(() => characters.includes(props.character), [characters]);
  const fontColor = React.useMemo(() => (exist ? '#1A1A1A' : '#BBBBBB'), [exist]);
  const Characters = React.useCallback(
    (props) => {
      if (props.character == '개그맨') {
        if (exist) {
          return <Comedian />;
        } else {
          return <Comedian class="bright" />;
        }
      } else if (props.character == '사회자') {
        if (exist) {
          return <Moderator />;
        } else {
          return <Moderator class="bright" />;
        }
      } else if (props.character == '비주얼') {
        if (exist) {
          return <Face />;
        } else {
          return <Face class="bright" />;
        }
      } else if (props.character == '깍두기') {
        if (exist) {
          return <Nerd />;
        } else {
          return <Nerd class="bright" />;
        }
      }
    },
    [exist, props.character, characters],
  );

  const OnCharacterClick = React.useCallback(() => {
    console.log('exist', exist);
    if (exist) {
      dispatch({ type: 'CHARACTERS_DELETE', payload: props.character });
    } else {
      if (characters.length < num) dispatch({ type: 'CHARACTERS', payload: props.character });
    }
  }, [exist, props.character, characters]);

  return (
    <StyledDiv position="static" transform="0" onClick={OnCharacterClick}>
      <Characters character={props.character} />
      <CharacterButton color={fontColor}>{props.character}</CharacterButton>
    </StyledDiv>
  );
};
