import styled from 'styled-components';

import MainTabs from './header/MainTabs';
import TopHeader from './header/TopHeader';
import theme from '../style/theme';

function MainLayout({ children }) {
  return (
    <Container>
      <Header>
        <TopHeader />
        <MainTabs />
      </Header>
      <Content>{children}</Content>
    </Container>
  );
}
export default MainLayout;

const Container = styled.div`
  height: 100vh;
  background-color: ${theme.background};
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
  flex: auto;
  background-color: ${theme.background};
  overflow-y: scroll;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
