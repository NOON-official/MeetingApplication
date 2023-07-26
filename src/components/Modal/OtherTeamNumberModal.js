import { Modal } from 'antd';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { ReactComponent as Copy } from '../../asset/svg/Copy.svg';
import backend from '../../util/backend';

export default function OtherTeamNumberModal(props) {
  const { open, closeModal, teamName, teamId } = props;

  const [contact, setContact] = useState(1);

  const getContactDate = async () => {
    const contactData = await backend.get(`/teams/${teamId}/contact`);
    setContact(contactData.data);
  };

  useEffect(() => {
    getContactDate();
  }, []);

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('클립보드에 복사되었습니다');
    } catch (err) {
      alert('복사에 실패하였습니다. 잠시 후 다시 시도해주세요');
    }
  };

  return (
    <div>
      {open ? (
        <SModal
          open={open}
          footer={null}
          centered
          width="380px"
          closable
          onCancel={() => closeModal()}
        >
          <Container>
            <TextBox>
              <TeamName>{teamName}</TeamName>
            </TextBox>
            <TextBox>
              <Section>
                <Bold>카카오톡 ID / 전화번호</Bold>
                <Normal>
                  최종 매칭 성사된 상대팀과 이제 연락을 시작해 보세요!
                </Normal>
                <Text>
                  <KakaoId>{contact}</KakaoId>
                  <SCopy onClick={() => handleCopy(contact)} />
                </Text>
              </Section>
            </TextBox>
          </Container>
        </SModal>
      ) : null}
    </div>
  );
}

const SModal = styled(Modal)`
  .ant-modal-content {
    background-color: #fbfaf9;
  }
`;

const TeamName = styled.span`
  padding: 4px 7px;
  border-radius: 3px;
  background-color: rgba(255, 211, 211, 1);
  font-weight: 600;
`;

const Bold = styled.div`
  font-weight: 600;
`;

const Container = styled.div`
  padding-top: 5%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const TextBox = styled.div`
  margin-bottom: 5%;
  width: 100%;
  text-align: center;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 5%;
  border: 1px solid #f1ecec;
  border-radius: 10px;
  color: #000000;
  background-color: #ffffff;
  font-size: 16px;
`;

const Normal = styled.div`
  margin: 3% 0;
  color: rgba(119, 119, 119, 1);
  font-size: 13px;
  text-align: left;

  @media (max-width: 380px) {
    word-break: keep-all;
  }
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  margin: 0 auto;
  border: 1px solid rgba(255, 211, 211, 1);
  border-radius: 10px;
`;

const KakaoId = styled.span``;

const SCopy = styled(Copy)`
  margin-left: 10px;
  cursor: pointer;
`;
