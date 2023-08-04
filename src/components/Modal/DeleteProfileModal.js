import { Button, Modal } from 'antd';
import styled from 'styled-components';
import { useState } from 'react';
import theme from '../../style/theme';
import backend from '../../util/backend';
import { ReactComponent as ExclamationMark } from '../../asset/svg/ExclamationMark.svg';
import AutomaticModal from './AutomaticModal';

export default function DeleteProfileModal({ open, setModal, state, data }) {
  const [openCompleteModal, setOpenCompleteModal] = useState(false);

  const deleteProfile = async () => {
    if (state === 'applied') {
      try {
        await backend.delete(`/users/matchings/applied`, {
          data: { matchingIds: data },
        });
        setOpenCompleteModal(true);
      } catch (e) {
        console.error(e);
        window.alert('삭제 중 오류가 발생하였습니다');
      }
    } else {
      try {
        await backend.delete(`/users/matchings/received`, {
          data: { matchingIds: data },
        });
        setOpenCompleteModal(true);
      } catch (e) {
        console.error(e);
        window.alert('삭제 중 오류가 발생하였습니다');
      }
    }
  };

  return (
    <div>
      <AutomaticModal
        open={openCompleteModal}
        setModal={setOpenCompleteModal}
        title="삭제되었어요"
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
          <Container>
            <TextBox>
              <SExclamationMark />
              <BlackText>
                다른 팀 프로필을 삭제하시면 <br /> 다시 복구할 수 없어요. <br />
                그래도 삭제하시겠어요?
              </BlackText>
            </TextBox>
            <ButtonBox>
              <SButton1
                onClick={() => {
                  deleteProfile();
                  setModal(false);
                }}
              >
                삭제할래요
              </SButton1>
              <SButton2
                onClick={() => {
                  setModal(false);
                }}
              >
                취소
              </SButton2>
            </ButtonBox>
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
