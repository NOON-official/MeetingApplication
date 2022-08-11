import styled from 'styled-components';
import Comedian from './Comedian';
import { useState } from 'react';
import Face from './Face';
import Nerd from './Nerd';
import Moderatoer from './Moderatoer';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
const Container = styled.div`
  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  height: 60%;
  left: 50%;
  margin: 0 0 0 -150.5px;
  position: absolute;
  top: 90px;
  width: 301px;
`;
const LeftButton = styled.button`
  position: absolute;
  top: 135px;
  width: 30px;
  height: 30px;
  left: 5px;
  background-color: transparent;
  border-color: transparent;
  border-radius: 50%;
`;
const RightButton = styled.button`
  position: absolute;
  top: 135px;
  left: 260px;
  width: 30px;
  height: 30px;
  background-color: transparent;
  border-color: transparent;
  border-radius: 50%;
`;
const CharactorContainer = () => {
  const [nowCharacter, setNowCharacter] = useState(0);
  function eventhandlerplus() {
    if (nowCharacter === 3) {
      setNowCharacter(0);
    } else {
      let now = nowCharacter + 1;
      setNowCharacter(now);
    }
  }
  function eventhandlerMinus() {
    if (nowCharacter === 0) {
      setNowCharacter(3);
    } else {
      let now = nowCharacter - 1;
      setNowCharacter(now);
    }
  }
  const Characters = () => {
    if (nowCharacter === 0) {
      return <Nerd></Nerd>;
    } else if (nowCharacter === 1) {
      return <Comedian></Comedian>;
    } else if (nowCharacter === 2) {
      return <Face></Face>;
    } else if (nowCharacter === 3) {
      return <Moderatoer></Moderatoer>;
    }
  };
  return (
    <Container>
      <LeftButton
        onClick={() => {
          eventhandlerMinus();
        }}
      >
        <ArrowBackIosNewSharpIcon />
      </LeftButton>
      <RightButton
        onClick={() => {
          eventhandlerplus();
        }}
      >
        {' '}
        <ArrowForwardIosSharpIcon />
      </RightButton>
      <Characters></Characters>
    </Container>
  );
};

export default CharactorContainer;
