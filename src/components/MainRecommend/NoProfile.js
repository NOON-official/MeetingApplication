import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as NoProfileIcon } from '../../asset/svg/NoProfileIcon.svg';

export default function NoProfile({ children }) {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>{children}</Title>
      <NoProfileIcon />
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
  width: 100%;
  margin: 20% auto;
`;

const Title = styled.div`
  margin-bottom: 5%;
  color: #9b9b9b;
  font-size: 15px;
  font-weight: 500;
`;

const Button = styled.div`
  margin-top: 5%;
  width: 30%;
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
