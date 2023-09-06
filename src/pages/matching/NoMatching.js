import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as NoMatchingData } from '../../asset/svg/NoMatchingData.svg';

export default function NoMatching({ children }) {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>{children}</Title>
      <NoMatchingData />
      <Button onClick={() => navigate('/')}>
        <CreateTeamBtn>신청하러 가기</CreateTeamBtn>
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
  margin: 15% auto 0;
`;

const Title = styled.div`
  margin-bottom: 5%;
  color: #9b9b9b;
  font-size: 15px;
  font-weight: 500;
`;

const Button = styled.div`
  width: 30%;
`;

const CreateTeamBtn = styled.button`
  width: 100%;
  margin-top: 10%;
  padding: 7px 5px;
  border: none;
  border-radius: 20px;
  background-color: #ffcdcd;
  color: #eb8888;
  font-size: 14px;
  font-weight: 600;
`;
