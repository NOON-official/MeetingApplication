import { Button, Modal } from 'antd';
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { usePutAcceptMatchingMutation } from '../../../features/api/userApi';
import NotEnoughTingModal from './NotEnoughTingModal';
import SuccessMatchingModal from '../Matching/SuccessMatchingModal';

export default function AcceptTingModal({
  open,
  setModal,
  matchingId,
  teamId,
}) {
  const [accept] = usePutAcceptMatchingMutation();
  const [openSuccessMatchingModal, setOpenSuccessMatchingModal] =
    useState(false);
  const [openNotEnoughTingModal, setOpenNotEnoughTingModal] = useState(false);

  const acceptMatching = useCallback(async () => {
    try {
      await accept({ matchingId, teamId }).unwrap();
      setOpenSuccessMatchingModal(true);
    } catch (err) {
      if (err.data.message === 'insufficient ting') {
        setOpenNotEnoughTingModal(true);
      } else {
        alert('잠시 후에 다시 시도해주세요');
      }
    }
  }, [matchingId, teamId]);

  return (
    <div>
      <SuccessMatchingModal
        open={openSuccessMatchingModal}
        setModal={() => setOpenSuccessMatchingModal((prev) => !prev)}
      />
      {open ? (
        <Modal
          open={open}
          footer={null}
          centered
          width="380px"
          closable
          onCancel={() => setModal(false)}
        >
          <NotEnoughTingModal
            content="수락하려면 4팅이 필요해요!"
            open={openNotEnoughTingModal}
            setModal={() => setOpenNotEnoughTingModal((prev) => !prev)}
          />
          <Container>
            <TextBox>
              <BlackText>
                정말 수락하시겠어요? <br /> 수락하시면 4팅이 사용돼요!
              </BlackText>
            </TextBox>
          </Container>
          <ButtonBox>
            <SButton onClick={() => acceptMatching()}>수락할래요</SButton>
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
  margin: 5% 0;
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
