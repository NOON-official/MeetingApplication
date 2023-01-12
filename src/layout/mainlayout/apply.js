import styled from "styled-components";

import { theme } from "../../style/theme";
import ApplyHeader from "../header/applyHeader";

const ApplyLayout = ({ children }) => {
  return (
    <Container>
      <ApplyHeader/>
      <Content>{children}</Content>
    </Container>
  );
};
export default ApplyLayout;

const Container = styled.div`
  background-color: ${theme.background};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Content = styled.div`
  width: 100%;
`;
