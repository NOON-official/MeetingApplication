import { Button, Modal } from 'antd';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import theme from '../../../style/theme';

export default function ModifyProfileModal({ open, setModal }) {
  const navi = useNavigate();

  return (
    <div>
      {open ? (
        <Modal
          open={open}
          footer={null}
          centered
          width="380px"
          closable
          onCancel={() => setModal(false)}
        >
          <Container>
            <TextBox>
              <BlackText>
                정보를 수정하시면 &lt;우리 팀 추천 매칭&gt;이 <br />
                달라질 수 있어요. 그래도 수정하시겠어요?
              </BlackText>
            </TextBox>
            <SButton
              onClick={() => {
                setModal(false);
                navi('/apply/1');
              }}
            >
              수정하러 가기
            </SButton>
          </Container>
        </Modal>
      ) : null}
    </div>
  );
}
const Container = styled.div`
  padding-top: 10%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const TextBox = styled.div`
  width: 100%;
  text-align: center;
`;

const BlackText = styled.span`
  color: #000000;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
`;

const SButton = styled(Button)`
  margin-top: 5%;
  width: 70%;
  height: 50px;
  border: none;
  border-radius: 10px;
  color: white;
  background-color: ${theme.pink};
  font-size: 18px;
  font-weight: 400;
`;
