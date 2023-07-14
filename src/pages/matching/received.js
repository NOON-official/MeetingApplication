import React from 'react';
import styled from 'styled-components';
import MatchingLayout from '../../layout/MatchingLayout';
import OtherTeamList from '../../components/RecommendBox/OtherTeamList';

export default function MatchingReceived() {
  return (
    <MatchingLayout>
      <Container>
        <Header>
          <EditBtn>편집</EditBtn>
        </Header>

        <Text>상대팀의 프로필을 살펴본 뒤 미팅 의사를 알려주세요 😉</Text>
      </Container>
      <OtherTeamList isRecommend={false} />
    </MatchingLayout>
  );
}

const Container = styled.div`
  width: 90%;
  margin: 5% auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 5%;
`;

const EditBtn = styled.span`
  margin-left: auto;
  font-weight: 500;
`;

const Text = styled.div`
  width: 100%;
  color: #777777;
  font-size: 14px;
  font-weight: 300;
`;
