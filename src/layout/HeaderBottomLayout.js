import React from 'react';
import styled from 'styled-components';
import TopHeader from './header/TopHeader';
import BottomTabs from './header/BottomTabs';

export default function HeaderBottomLayout({ children, backgroundColor }) {
  return (
    <Container>
      <TopHeader />
      <Content color={backgroundColor}>{children}</Content>
      <BottomTabs />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: ${(props) => props.theme.background};
`;

const Content = styled.div`
  max-width: 425px;
  width: 100%;
  height: 100%;
  padding-top: 50px;
  padding-bottom: 85px;
  background-color: ${(props) => props.color};
  overflow-y: auto;

  // 스크롤 기능은 있으나 안보이게
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
  &::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }
`;
