import { Button, Modal } from 'antd';
import styled from 'styled-components';
import { ReactComponent as ErrorChar } from '../../asset/svg/ErrorMessageCharacter.svg';
import theme from '../../style/theme';

export default function NotEnoughDateModal({ open, setModal }) {
  return (
    <div>
      {open ? (
        <Modal
          open={open}
          footer={null}
          centered
          width="380px"
          closable={false}
        >
          <Container>
            <ErrorChar />
            <TextBox>
              <BlackText>미팅 선호 지역을</BlackText>
              <ColorText> 하나이상 </ColorText>
              <BlackText>선택해주세요</BlackText>
            </TextBox>
            <div>많이선택할수록 매칭확률이 올라가요!</div>
            <SButton onClick={() => setModal(false)}>닫기</SButton>
          </Container>
        </Modal>
      ) : null}
    </div>
  );
}
const Container = styled.div`
  padding-top: 5%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const TextBox = styled.div`
  width: 100%;
  text-align: center;
`;
const BlackText = styled.span`
  color: black;
  font-size: 30px;
  font-family: 'Nanum JungHagSaeng';
`;
const ColorText = styled.span`
  color: ${theme.pink};
  font-size: 30px;
  font-family: 'Nanum JungHagSaeng';
`;

const SButton = styled(Button)`
  margin-top: 10%;
  width: 100%;
  height: 50px;
  color: white;
  background-color: ${theme.pink};
`;
