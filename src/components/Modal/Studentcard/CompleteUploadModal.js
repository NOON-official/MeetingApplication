import { Modal } from 'antd';
import styled from 'styled-components';
import { useState } from 'react';
import AutomaticModal from '../AutomaticModal';

export default function CompleteUploadModal({ open, setModal, progress }) {
  const [openCompleteModal, setOpenCompleteModal] = useState(false);

  return (
    <div>
      {progress === 100 && (
        <AutomaticModal
          open={openCompleteModal}
          setModal={setOpenCompleteModal}
          title="업로드 완료!"
        />
      )}
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
                사진이 업로드되고 있어요 <br /> 조금만 기다려 주세요!
              </BlackText>
              <ProgressBar>
                <IngBar progress={progress} />
              </ProgressBar>
              <Count>1/1</Count>
              <CancelBtn
                onClick={() => {
                  setModal(false);
                }}
              >
                취소
              </CancelBtn>
            </TextBox>
          </Container>
        </Modal>
      ) : null}
    </div>
  );
}

const Container = styled.div`
  padding-top: 5%;
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
  color: #000000;
  font-size: 16px;
`;

const ProgressBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5% 0;
  width: 90%;
  height: 5px;
  background-color: #f1ecec;
  border-radius: 20px;
`;

const IngBar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 5px;
  ${({ progress }) => {
    return progress ? `width: ${progress}%` : `width: 0`;
  }};
  background-color: ${(props) => props.theme.pink};
  border-radius: 20px;
`;

const Count = styled.div`
  margin: 1% 0 2%;
  text-align: center;
`;

const CancelBtn = styled.div`
  color: #767676;
  font-size: 14px;
  font-weight: 400;
`;
