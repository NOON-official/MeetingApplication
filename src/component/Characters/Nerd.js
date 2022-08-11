import styled from 'styled-components';
import charimg from '../../image/infp.jpg';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;
const Character = styled.img`
  width: 90%;
  height: 35%;
  margin: 5%;
`;
const Name = styled.div`
  height: 5%;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-style: normal;
  letter-spacing: -0.015em;
  line-height: 149.8%;
`;
const CharacterText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 55%;
  margin: 5%;
  color: #000;
  font-weight: 700;
  font-style: normal;
  letter-spacing: -0.015em;
  line-height: 149.8%;
  text-align: start;
  font-size: 17px;
`;
const Warning = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 20px;
`;
const Nerd = () => {
  return (
    <Container>
      <Character width="100" height="200" src={charimg} />
      <Name>깍두기</Name>
      <CharacterText>
        수줍음이 많은 당신.
        <br /> 순수한 매력에 상대방이 반할지도?!
        <Warning>주의! 너무 많은 깍두기는 매칭률을 낮춰요!</Warning>
      </CharacterText>
    </Container>
  );
};
export default Nerd;
