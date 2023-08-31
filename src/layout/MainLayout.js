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
      <Footer>
        <BottomTabs />
      </Footer>
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
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.background};
  overflow: auto;
`;

const Footer = styled.div`
  max-width: 425px;
  width: 100%;
  background-color: ${(props) => props.theme.background};
`;
