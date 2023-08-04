import { Button, Modal } from 'antd';
import styled from 'styled-components';
import theme from '../../style/theme';
import { ReactComponent as ExclamationMark } from '../../asset/svg/ExclamationMark.svg';

export default function BigFileModal({ open, setModal }) {
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
              <SExclamationMark />
              <BlackText>
                해당 이미지의 용량이 커서 <br /> 업로드 할 수 없어요 <br /> 다른
                이미지를 선택해 주세요!
              </BlackText>
            </TextBox>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
`;

const SExclamationMark = styled(ExclamationMark)`
  margin-bottom: 3%;
`;

const BlackText = styled.span`
  color: #000000;
  font-size: 16px;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin-top: 5%;
`;

const SButton1 = styled(Button)`
  width: 48%;
  height: 50px;
  border: none;
  border-radius: 10px;
  color: white;
  background-color: ${theme.pink};
  font-size: 18px;
  font-weight: 400;
`;

const SButton2 = styled(Button)`
  width: 48%;
  height: 50px;
  border: 1px solid #f2cbcb;
  border-radius: 10px;
  color: #f2cbcb;
  background-color: #ffffff;
  font-size: 18px;
  font-weight: 400;
`;
