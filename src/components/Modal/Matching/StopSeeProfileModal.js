import { Button, Modal } from 'antd';
import styled from 'styled-components';
import { useCallback } from 'react';
import { usePutStopSeeProfileMutation } from '../../../features/api/userApi';
import { ReactComponent as ExclamationMark } from '../../../asset/svg/ExclamationMark.svg';

// 추천팀 다시 안 보기 기능
export default function StopSeeProfileModal({ open, setModal, teamId }) {
  const [stop] = usePutStopSeeProfileMutation();

  const stopSeeProfile = useCallback(async () => {
    try {
      await stop({ teamId }).unwrap();
    } catch (err) {
      alert('잠시 후에 다시 시도해주세요');
    }
  }, [teamId]);

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
              <ExclamationMark />
              <BlackText>
                &#39;다시 안 보기&#39;를 선택하시면
                <br /> 이 팀은 이제 추천 매칭에서 볼 수 없어요.
                <br />
                그래도 진행하시겠어요?
              </BlackText>
            </TextBox>
          </Container>
          <ButtonBox>
            <SButton onClick={() => stopSeeProfile()}>다시 안 보기</SButton>
            <WhiteButton onClick={() => setModal(false)}>취소</WhiteButton>
          </ButtonBox>
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

const BlackText = styled.span`
  margin-top: 5%;
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
