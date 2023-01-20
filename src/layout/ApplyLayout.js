import styled from 'styled-components';

import TopHeader from './header/TopHeader';

function ApplyLayout({ children }) {
  return (
    <Container>
      <Header>
        <TopHeader />
      </Header>
      <Content>{children}</Content>
    </Container>
  );
}
export default ApplyLayout;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.header`
  width: 100%;
`;

const Content = styled.div`
  width: 400px;
  min-height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
