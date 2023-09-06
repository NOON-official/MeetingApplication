import { Button, Modal } from 'antd';
import React, { useEffect } from 'react';
import styled from 'styled-components';

export default function SuccessMatchingModal({ open, setModal }) {
  useEffect(() => {
    if (open) {
      const timeout = setTimeout(() => {
        setModal(false);
      }, 1500);

      return () => clearTimeout(timeout);
    }
    return () => {};
  }, [open]);

  console.log(open);

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
                미팅을 수락했어요!🎉 <br />
                이제 &lt;매칭 완료&gt;에서 상대팀의 연락처를 확인할 수 있어요!
              </BlackText>
            </TextBox>
          </Container>
          {/* <ButtonBox>
            <SButton onClick={() => navigate('/matching/success')}>
              네, 알겠습니다!
            </SButton>
            <WhiteButton onClick={() => setModal(false)}>취소</WhiteButton>
          </ButtonBox> */}
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
`;

const BlackText = styled.span`
  margin: 7% 0;
  color: #000000;
  font-size: 16px;
`;

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 5%;
`;

const SButton = styled(Button)`
  width: 45%;
  height: 50px;
  border: none;
  border-radius: 10px;
  color: white;
  background-color: #eb8888;
  font-size: 18px;
  font-weight: 400;
  cursor: pointer;
`;

const WhiteButton = styled(SButton)`
  border: 1px solid #f2cbcb;
  color: #f2cbcb;
  background-color: #ffffff;
`;
