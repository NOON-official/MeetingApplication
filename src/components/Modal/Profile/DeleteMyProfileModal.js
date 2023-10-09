import { Button, Modal } from 'antd';
import styled from 'styled-components';
import { useCallback } from 'react';
import theme from '../../../style/theme';
import { useDeleteMyProfileMutation } from '../../../features/api/userApi';

export default function DeleteMyProfileModal({ open, setModal, teamId }) {
  const [deleteMyProfile] = useDeleteMyProfileMutation();

  const deleteMatching = useCallback(async () => {
    try {
      await deleteMyProfile({ teamId }).unwrap();
      window.localStorage.removeItem('apply-data');
      window.alert('삭제되었습니다');
      setModal(false);
    } catch (e) {
      window.alert('삭제 중 오류가 발생하였습니다');
      setModal(false);
    }
  });

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
                미팅 신청을 보내거나 받을 수 없고,
                <br /> 우리 팀이 다른 팀들에게 추천되지 않아요.
                <br />
                그래도 삭제하시겠어요?
              </BlackText>
            </TextBox>
            <SButton
              onClick={() => {
                deleteMatching();
              }}
            >
              삭제할래요
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
