import styled from "styled-components";
import { theme } from "../../style/theme";
export const Container = styled.div`
  min-height: 100vh;
  background-color: ${theme.background};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow: hidden;
`;
