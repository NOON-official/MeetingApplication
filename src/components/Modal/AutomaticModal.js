import { Modal } from 'antd';
import styled from 'styled-components';
import { useEffect } from 'react';
import { ReactComponent as CheckInvalid } from '../../asset/svg/CheckBigSize.svg';

export default function AutomaticModal({ open, setModal, title }) {
  useEffect(() => {
    if (open) {
      const timeout = setTimeout(() => {
        setModal(false);
      }, 1500);

      return () => clearTimeout(timeout);
    }
    return () => {};
  }, [open]);

  return (
    <div>
      {open ? (
        <SModal
          open={open}
          footer={null}
          centered
          width="130px"
          bodyStyle={{ backgroundColor: '#404040' }}
          closable={false}
        >
          <Container>
            <SCheckInvalid />
            <TextBox>
              <BlackText>{title}</BlackText>
            </TextBox>
          </Container>
        </SModal>
      ) : null}
    </div>
  );
}

const SModal = styled(Modal)`
  .ant-modal-content {
    height: 130px;
    padding: 2%;
    border-radius: 5px;
    background-color: #404040;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 5%;
  text-align: center;
`;

const SCheckInvalid = styled(CheckInvalid)`
  margin-bottom: 3%;
`;

const BlackText = styled.span`
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
`;
