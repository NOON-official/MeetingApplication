import styled from "styled-components";

import { theme } from "../../style/theme";
import TopHeader from "../header/topHeader";

const ApplyLayout = ({ children }) => {
  return (
    <Container>
      <TopHeader/>
      <Content>{children}</Content>
    </Container>
  );
};
export default ApplyLayout;

const Container = styled.div`
  min-height:100vh;
  background-color: ${theme.background};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Content = styled.div`
  width: 400px;
  min-height: calc(100vh - 70px);
  background-color: ${theme.background};
  display:flex;
  justify-content:center;
  flex-wrap: wrap;
`;