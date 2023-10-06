import styled from 'styled-components';
import TopHeader from './header/TopHeader';
import BottomTabs from './header/BottomTabs';

function MainLayout({ children }) {
  return (
    <Container>
      <Header>
        <TopHeader />
      </Header>
      <Content>{children}</Content>
      <BottomTabs />
    </Container>
  );
}
export default MainLayout;

const Container = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.background};
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.header`
  width: 100%;
`;

const Content = styled.div`
  max-width: 425px;
  width: 90%;
  height: 100%;
  background-color: ${(props) => props.theme.background};
  overflow: auto;

  // 스크롤 기능은 있으나 안보이게
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
  &::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }
`;

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  max-width: 425px;
  width: 100%;
  background-color: ${(props) => props.theme.background};
`;
