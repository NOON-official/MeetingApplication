import { Modal } from 'antd';
import styled from 'styled-components';
import { useState } from 'react';
import theme from '../../../style/theme';
import { ReactComponent as ExclamationMark } from '../../../asset/svg/ExclamationMark.svg';
import AutomaticModal from '../AutomaticModal';
import { useDeleteApplyProfileMutation } from '../../../features/api/userApi';

export default function DeleteOtherProfileModal({ open, setModal, data }) {
  const [deleteApplyProfile] = useDeleteApplyProfileMutation();

  const [openCompleteModal, setOpenCompleteModal] = useState(false);

  const deleteProfile = async () => {
    try {
      await deleteApplyProfile({
        matchingIds: data,
      }).unwrap();
      setOpenCompleteModal(true);
    } catch (e) {
      console.error(e);
      window.alert('삭제 중 오류가 발생하였습니다');
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

const SButton1 = styled.button`
  width: 48%;
  height: 50px;
  border-radius: 10px;
  color: white;
  background-color: ${theme.pink};
  font-size: 18px;
  font-weight: 400;
`;

const SButton2 = styled(SButton1)`
  border: 1px solid #f2cbcb;
  color: #f2cbcb;
  background-color: #ffffff;
`;
