import styled from 'styled-components';

import MainHeader from '../header/mainHeader';
import TopHeader from '../header/topHeader';
import { theme } from '../../style/theme';

function MainLayOut({ children }) {
  return (
    <Container>
      <TopHeader />
      <MainHeader />
      <Content>{children}</Content>
    </Container>
  );
}
export default MainLayOut;

const Container = styled.div`
  min-height: 100vh;
  background-color: ${theme.background};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Content = styled.div`
  width: 400px;
  min-height: calc(100vh - 120px);
  background-color: ${theme.background};
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
