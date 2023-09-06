import React from 'react';
import styled from 'styled-components';
import { ReactComponent as NoMatchingData } from '../../asset/svg/NoMatchingData.svg';

export default function NoMatching({ children }) {
  return (
    <Container>
      <Title>{children}</Title>
      <NoMatchingData />
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
