import { Button, Modal } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as SadFace } from '../../asset/svg/SadFace.svg';

export default function StudentCardModal({ open, setModal }) {
  const navigate = useNavigate();

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
              <SSadFace />
              <BlackText>
                학교 인증을 완료한 후에
                <br />
                상대 팀의 프로필을 살펴볼 수 있어요.
              </BlackText>
            </TextBox>
          </Container>
          <ButtonBox>
            <SButton onClick={() => navigate('/myinfo/studentcard')}>
              인증하러 가기
            </SButton>
            <WhiteButton onClick={() => setModal(false)}>취소</WhiteButton>
          </ButtonBox>
        </Modal>
      ) : null}
    </div>
  );
}

const Container = styled.div`
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

const SSadFace = styled(SadFace)`
  width: 40%;
`;

const BlackText = styled.span`
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
