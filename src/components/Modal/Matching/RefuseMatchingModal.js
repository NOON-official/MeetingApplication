import { Button, Modal } from 'antd';
import React, { useCallback } from 'react';
import styled from 'styled-components';
import { usePutRefuseMatchingMutation } from '../../../features/api/userApi';

export default function RefuseMatchingModal({
  open,
  setModal,
  matchingId,
  teamId,
}) {
  const [refuse] = usePutRefuseMatchingMutation();

  const refuseTeam = useCallback(async () => {
    try {
      await refuse({ matchingId, teamId }).unwrap();
    } catch (err) {
      alert('잠시 후에 다시 시도해주세요');
    }
  }, [matchingId, teamId]);

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
              <BlackText>정말 신청을 거절하시겠어요?</BlackText>
            </TextBox>
          </Container>
          <ButtonBox>
            <SButton onClick={refuseTeam}>거절할래요</SButton>
            <WhiteButton onClick={() => setModal(false)}>취소</WhiteButton>
          </ButtonBox>
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
