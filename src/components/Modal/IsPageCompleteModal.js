import { Button, Modal } from 'antd';
import styled from 'styled-components';
import { ReactComponent as ErrorChar } from '../../asset/svg/ErrorMessageCharacter.svg';
import theme from '../../style/theme';

export default function IsPageCompleteModal({ open, setModal }) {
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
              <BlackText>아직</BlackText>
              <ColorText>완료하지 않은 답변이</ColorText>
              <BlackText>있어요.</BlackText>
            </TextBox>
            <div>모든 항목에 응답해 주세요.</div>
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
  font-size: 35px;
  font-family: 'Nanum JungHagSaeng';
`;
const ColorText = styled.span`
  color: ${theme.pink};
  font-size: 35px;
  font-family: 'Nanum JungHagSaeng';
`;

const SButton = styled(Button)`
  margin-top: 10%;
  width: 100%;
  height: 50px;
  color: white;
  background-color: ${theme.pink};
`;
