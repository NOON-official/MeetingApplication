import styled from 'styled-components';
import TopHeader from './header/TopHeader';

export default function ApplyLayout({ children }) {
  return (
    <Container>
      <TopHeader />
      <Content>{children}</Content>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
  max-width: 425px;
  padding-top: 7vh;
  background-color: rgb(245, 245, 245);
  overflow-y: auto;

  // 스크롤 기능은 있으나 안보이게
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
  &::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }
`;
