import { Button, Modal } from 'antd';
import styled from 'styled-components';
import Alert from '../../asset/img/alert.png';
import theme from '../../style/theme';
import KakaoLoginLink from '../KakaoLoginLink';

export default function AgeLimitationModal({ open, setModal }) {
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
            <img src={Alert} />
            <TextBox>
              <Text>미팅학개론은 &nbsp;</Text>
              <BoldText>성인 대학생</BoldText>
              <Text>만 이용이 가능합니다.</Text>
            </TextBox>
            <KakaoLink>
              <SButton onClick={() => setModal(false)}>19세 이상입니다</SButton>
            </KakaoLink>
            <SButton onClick={() => setModal(false)}>19세 미만입니다</SButton>
          </Container>
        </Modal>
      ) : null}
    </div>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const TextBox = styled.div`
  margin-top: 5%;
  margin-bottom: 5%;
  width: 100%;
  text-align: center;
`;

const Text = styled.span`
  font-size: 15px;
  color: #525252;
`;
const BoldText = styled.span`
  font-weight: 800;
  font-size: 15px;
  color: #525252;
`;
const SButton = styled(Button)`
  text-align: center;
  margin-left: 2%;
  margin-right: 2%;
  border-radius: 10px;
  width: 130px;
  height: 45px;
  color: white;
  background-color: ${theme.pink};
`;
const KakaoLink = styled(KakaoLoginLink)`
  display: block;
`;
