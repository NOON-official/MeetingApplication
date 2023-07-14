import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as SadFace } from '../../asset/svg/SadFace.svg';

export default function NoProfile() {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>프로필을 만든 후 확인할 수 있어요</Title>
      <SSadFace />
      <Button onClick={() => navigate('/apply/1')}>
        <CreateTeamBtn>만들러 가기</CreateTeamBtn>
      </Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 7% auto;
`;

const Title = styled.div`
  margin: 5% 0;
  font-size: 18px;
  font-weight: 500;
`;

const SSadFace = styled(SadFace)`
  margin: 5% 0;
`;

const Button = styled.div`
  width: 40%;
`;

const CreateTeamBtn = styled.button`
  width: 100%;
  padding: 10px 5px;
  border: none;
  border-radius: 20px;
  background-color: #ffcdcd;
  color: #eb8888;
  font-size: 14px;
  font-weight: 600;
`;
