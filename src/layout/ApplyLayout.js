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
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.header`
  width: 100%;
  height: 6vh;
`;

const Content = styled.div`
  background-color: rgb(245, 245, 245);
  min-height: 94vh;
  width: 400px;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
