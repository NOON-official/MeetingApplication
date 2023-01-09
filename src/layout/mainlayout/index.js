import styled from "styled-components";

import MainHeader from "../header/mainHeader";
import TopHeader from "../header/topHeader";
import { theme } from "../../Style/theme";
import MainFooter from "../footer/mainFooter";

const MainLayOut = ({ children }) => {
  return (
    <Container>
      <TopHeader />
      <MainHeader />
      <Content>{children}</Content>
      <MainFooter />
    </Container>
  );
};
export default MainLayOut;

const Container = styled.div`
  background-color: ${theme.background};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Content = styled.div`
  width: 100%;
`;
