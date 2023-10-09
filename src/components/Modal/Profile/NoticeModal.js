import { Modal } from 'antd';
import styled from 'styled-components';
import theme from '../../../style/theme';

export default function NoticeModal({ open, setModal, teamId }) {
  return (
    <div>
      {open ? (
        <SModal
          open={open}
          footer={null}
          centered
          width="380px"
          closable
          onCancel={() => setModal(false)}
        >
          <Container>
            <TextBox>
              <GreyText style={{ fontWeight: '500' }}>유의사항</GreyText>
              <GreyText>
                <li>
                  삭제하시면 &lt;보낸신청&gt;과 &lt;받은 신청&gt; 내역이 모두
                  사라져요.
                </li>
                <li>
                  삭제하더라도 최종 성사된 상대 팀의 연락처와 프로필은 매칭
                  완료에서 계속 확인할 수 있어요!
                </li>
                <li>
                  미팅학개론 이용 재개를 원하실 경우, 우리 팀 프로필을 다시
                  만들어 주세요.
                </li>
              </GreyText>
            </TextBox>
          </Container>
        </SModal>
      ) : null}
    </div>
  );
}

const SModal = styled(Modal)`
  .ant-modal-content {
    padding: 5% 7%;
    color: ${theme.grey};
    background-color: #eeeeee;
  }
`;

const Container = styled.div`
  padding-top: 5%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const TextBox = styled.div`
  width: 100%;
`;

const GreyText = styled.div`
  margin-bottom: 4%;
  color: ${theme.grey};
  font-size: 14px;
  font-weight: 400;
  word-break: keep-all;
  line-height: normal;

  > li {
    position: relative;
    margin: 2% 0 2% 2%;
    :before {
      content: '∙';
      position: absolute;
      top: 0;
      left: -10px;
    }
  }
`;
