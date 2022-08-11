import styled from 'styled-components';
import charimg from '../../image/entj.png';
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
  font-size: 18px;
`;
const Warning = styled.div`
  color: red;
  font-size: 15px;
  margin-top: 20px;
`;
const Moderatoer = () => {
  return (
    <Container>
      <Character width="100" height="200" src={charimg} />
      <Name>사회자</Name>
      <CharacterText>
        어색한 분위기를 풀어주는 당신은 미팅의 유재석! 당신이 없다면 미팅이 진행되지 않아요.
        <br />
        <Warning> -주의! 진행만 하다가 숨겨진 단짝을 놓칠 수 있어요!-</Warning>
      </CharacterText>
    </Container>
  );
};
export default Moderatoer;
