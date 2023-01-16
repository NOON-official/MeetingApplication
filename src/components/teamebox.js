import styled from "styled-components";

import { theme } from "../style/theme";

const Teambox = () => {
  return(
    <Container>
        <Title>대표자 ID카드 &nbsp;&nbsp;</Title>
    </Container>
  );
}

export default Teambox;

const Container = styled.div`
  border: 1px solid #F1ECEC;
  border-radius: 10px;
  width: 334px;
  height: 201px;
`;

const Title = styled.div`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display:flex;
  justify-content:flex-end;
  align-items:center;
  color: #999999;
  font-weight: 400;
  font-size: 16px;
  width:100%;
  height: 35px;
  background-color: ${theme.lightPink};
  font-family: "Nanum JungHagSaeng";
`;