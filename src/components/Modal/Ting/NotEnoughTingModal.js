import { Button, Modal } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Ting } from '../../../asset/svg/TingImg.svg';

export default function NotEnoughTingModal({ open, setModal }) {
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
              <STing />
              <BlackText>
                앗, 팅이 부족해서 수락할 수 없어요🥲
                <br /> 수락하려면 4팅이 필요해요!
              </BlackText>
            </TextBox>
          </Container>
          <ButtonBox>
            <SButton onClick={() => navigate('/myinfo/ting/buy')}>
              충전하러 가기
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

const STing = styled(Ting)`
  margin-bottom: 2%;
`;

const BlackText = styled.span`
  color: #000000;
  font-size: 16px;
`;

const Bold = styled.span`
  font-weight: 600;
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
