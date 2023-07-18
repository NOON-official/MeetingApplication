import { Modal } from 'antd';
import styled from 'styled-components';
import { ReactComponent as Copy } from '../../asset/svg/Copy.svg';

export default function OtherTeamNumberModal(props) {
  const { open, closeModal, teamName, contact } = props;

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
                  <SCopy />
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
  /* border: 1px solid red; */
  margin-bottom: 5%;
  width: 100%;
  text-align: center;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px;
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
`;
