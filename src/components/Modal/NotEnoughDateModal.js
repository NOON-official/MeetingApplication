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
              <BlackText>미팅 선호 날짜는 최소</BlackText>
              <ColorText> 4일 이상</ColorText>
              <BlackText> 선택해 주세요</BlackText>
            </TextBox>
            <SmallText>많이선택할수록 매칭확률이 올라가요!</SmallText>
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
  font-size: 27px;
  font-family: 'Nanum JungHagSaeng';
`;
const ColorText = styled.span`
  color: ${theme.pink};
  font-size: 30px;
  font-family: 'Nanum JungHagSaeng';
`;
const SmallText = styled.span`
  font-weight: 400;
  font-size: 13px;
  color: #525252;
`;
const SButton = styled(Button)`
  margin-top: 10%;
  width: 100%;
  height: 50px;
  color: white;
  background-color: ${theme.pink};
`;
