import styled from "styled-components";
import { theme } from "../../style/theme";
export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${theme.background};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: start;
`;
