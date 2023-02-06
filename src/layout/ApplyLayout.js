import styled from 'styled-components';
import TopHeader from './header/TopHeader';

export default function ApplyLayout({ children }) {
  return (
    <Container>
      <Header>
        <TopHeader />
      </Header>
      <Content>{children}</Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.header`
  width: 100%;
  height: 7vh;
`;

const Content = styled.div`
  background-color: rgb(245, 245, 245);
  min-height: 93vh;
  width: 400px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
