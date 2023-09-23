import { Button, Modal } from 'antd';
import styled from 'styled-components';
import { useCallback } from 'react';
import theme from '../../../style/theme';
import backend from '../../../util/backend';

// 매칭 중단하기 기능 제외
export default function StopMatchingModal({ open, setModal, teamId }) {
  const deleteMatching = useCallback(async () => {
    try {
      await backend.delete(`/teams/${teamId}`);
      window.localStorage.removeItem('apply-data');
      window.alert('중단되었습니다');
      setModal(false);
      window.location.reload();
    } catch (e) {
      window.alert('취소중 오류가 발생하였습니다');
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
                중단하시면 다른팀으로부터 미팅 신청을
                <br /> 받을 수 없고 추천에 게시되지 않아요.
                <br />
                그래도 중단하시겠어요?
              </BlackText>
            </TextBox>
            <SButton
              onClick={() => {
                deleteMatching();
              }}
            >
              중단할래요
            </SButton>
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
  color: #000000;
  font-size: 16px;
`;

const ColorText = styled.span`
  color: ${theme.pink};
  font-size: 18px;
`;

const SButton = styled(Button)`
  margin-top: 10%;
  width: 100%;
  height: 50px;
  color: white;
  background-color: ${theme.pink};
  font-size: 18px;
  font-weight: 400;
`;
