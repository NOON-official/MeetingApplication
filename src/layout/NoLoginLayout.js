import styled from 'styled-components';
import TopHeader from './header/TopHeader';
import BottomTabs from './header/BottomTabs';

function NoLoginLayout({ children }) {
  return (
    <Container>
      <TopHeader />
      <Content>{children}</Content>
      <BottomTabs />
    </Container>
  );
}
export default NoLoginLayout;

const Container = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.background};
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Content = styled.div`
  max-width: 425px;
  width: 100%;
  height: 100%;
  padding-top: 6vh;
  background-color: #ffffff;
  overflow: auto;

  // 스크롤 기능은 있으나 안보이게
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
  &::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }
`;

const Footer = styled.div`
  max-width: 425px;
  width: 100%;
  background-color: ${(props) => props.theme.background};
`;
