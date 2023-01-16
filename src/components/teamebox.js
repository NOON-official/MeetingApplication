import styled from "styled-components";

import { theme } from "../style/theme";
import { ReactComponent as Plus } from "../asset/svg/Plus.svg";

const Teambox = () => {
  return(
    <Container>
        <Title>대표자 ID카드 &nbsp;&nbsp;</Title>
        <LeftBox>
          <Profile><Plus/></Profile>
          <ProfileTitle>대표자</ProfileTitle>
        </LeftBox>
        <RightBox>
          <Info>나이</Info>
          <Info>MBTI</Info>
          <Info>닮은꼴</Info>
        </RightBox>
    </Container>
  );
}

export default Teambox;

const Container = styled.div`
  background-color: ${theme.background};
  border: 1px solid #F1ECEC;
  border-radius: 10px;
  width: 334px;
  height: 200px;
`;

const Title = styled.div`
  width:100%;
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

const LeftBox = styled.div`
  padding-left:24px;
  width:100px;
  height:calc(200px - 35px);
  display:flex;
  align-items:center;
  flex-wrap:wrap;
  justify-content:center;
`;

const Profile = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width: 100px;
  height: 100px;
  background: #FFFFFF;
  border: 1px solid #F1ECEC;
  border-radius:50%;
`;

const ProfileTitle = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  font-weight: 400;
  font-size: 24px;
  color: #999999;
  font-family: "Nanum JungHagSaeng";
`;

const RightBox = styled.div`
  width:200px;
  height:calc(200px - 35px);
  display:flex;
  align-items:center;
  flex-wrap:wrap;
  justify-content:center;
`;

const Info = styled.div`
  border-bottom: 1px solid #EB8888;
  
`;

