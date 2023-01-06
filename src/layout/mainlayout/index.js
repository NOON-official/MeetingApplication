import styled from "styled-components";

import MainHeader from "../header/mainHeader";
import TopHeader from "../header/topHeader";
import { theme } from "../../Style/theme";

const MainLayOut = ({ children }) => {
  return (
    <Container>
      <TopHeader />
      <MainHeader />
      <Content>{children}</Content>
    </Container>
  );
};
export default MainLayOut;

const Container = styled.div`
  background-color: ${theme.background};
`;

const Content = styled.div``;
