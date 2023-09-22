import { Modal } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Face } from '../../../asset/svg/SmileFace.svg';

export default function BeforeApplyModal({ open, setModal }) {
  return (
    <div>
      {open ? (
        <SModal
          open={open}
          footer={null}
          centered
          width="380px"
          closable
          onCancel={() => {
            setModal(false);
          }}
        >
          <Container>
            <Face />
            <TextBox>
              <BlackText>
                대표자 1명만 우리 팀 프로필을 <br /> 만들어 주세요
              </BlackText>
              <SmallText>
                함께 미팅 나가는 친구들 중 <br /> 1명만 입력하면 OK!
              </SmallText>
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextBox = styled.div`
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BlackText = styled.div`
  color: #000000;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
`;

const SmallText = styled.span`
  margin-top: 5%;
  font-size: 16px;
  color: #525252;
  font-weight: 400;
  text-align: center;
`;
