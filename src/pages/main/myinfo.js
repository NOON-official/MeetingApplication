import styled from "styled-components";
import { Link } from "react-router-dom";

import { theme } from "../../Style/theme";
import MainFooter from "../../layout/footer/mainFooter";
import MainLayOut from "../../layout/mainlayout";
// import { ReactComponent as Invitefreinds } from "../../asset/svg/Invitefreinds.svg";

const MyInfo = () => {
  return (
    <MainLayOut>
      <Account>
        <Item><SLink to="">계정관리</SLink></Item>
        <Item><SLink to="">이용권현황</SLink></Item>
        <LItem><SLink to="">제안하기</SLink></LItem>
      </Account>
      <CouponBox>
        <Title>친구 4명을 초대하면 스타벅스 커피 1잔 쿠폰을 드려요!</Title>
        <Coupons>
          <Circle>1</Circle>
          <Circle>2</Circle>
          <Circle>3</Circle>
          <Circle>4</Circle>
        </Coupons>
      </CouponBox>
      <MainFooter/>
    </MainLayOut>
  );
  
};

export default MyInfo;

const Account = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  background-color: white;
  border: 1px solid #F8F3F3;
  border-radius: 10px;
  margin-top:21px;
  width: 334px;
  height: 158px;
`;

const Item = styled.div`
  width:85%;
  padding-left:10px;
  font-weight: 600;
  font-size: 14px;
  color: #777777;
  border-bottom: 3px solid #F8F3F3;
  height:50px;
  line-height:50px;
`;

const LItem = styled.div`
  width:85%;
  padding-left:10px;
  height:50px;
  line-height:50px;
`;

const SLink = styled(Link)`
  font-weight: 600;
  font-size: 14px;
  color: #777777;
`;

const CouponBox = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  background-color: white;
  border: 1px solid #F8F3F3;
  border-radius: 10px;
  width: 334px;
  height: 158px;
`;

const Title = styled.p`
  margin-top:10px;
  height:10px;
  text-align:center;
  width:100%;
  font-weight: 200;
  font-size: 12px;
  color: #000000;
`;

const Coupons = styled.div`
  margin-bottom:25px;
  width:90%;
  display: flex;
  justify-content:center;
  justify-content:space-between;
`;

const Circle = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  line-height:65px;
  width: 65px;
  height: 65px;
  color: #777777;
  font-weight: 600;
  font-size: 20px;
  border-radius:50%;
  background-color: ${(props) => `${props.isactive ? `${theme.lightPink}` : "#ECE9E9"}`};
`;


