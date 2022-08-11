import * as React from 'react';

import CharactorContainer from '../Characters/CharactorContainer';
import { Container, MobileBox, Title, ButtonBox, SubTitle } from '../Elements/StyledComponent';
import { Character } from '../Characters/CharacterButton';

const CHaracter = () => {
  return (
    <Container>
      <MobileBox>
        <Title>우리 팀원을 소개해요</Title>
        <CharactorContainer></CharactorContainer>

        <SubTitle top={'80%'}>미팅 나갈 구성원을 알려주세요~</SubTitle>
        <ButtonBox top={'88%'}>
          <Character character={'개그맨'}>개그맨</Character>
          <Character character={'비주얼'}>비주얼</Character>
          <Character character={'사회자'}>사회자</Character>
          <Character character={'깍두기'}>깍두기</Character>
        </ButtonBox>
      </MobileBox>
    </Container>
  );
};
