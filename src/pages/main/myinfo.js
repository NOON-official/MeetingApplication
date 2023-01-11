import styled from "styled-components";
import { Link } from "react-router-dom";

import MainFooter from "../../layout/footer/mainFooter";
import MainLayOut from "../../layout/mainlayout";

const MyInfo = () => {
  return (
    <MainLayOut>
      <Account>
        <Item><SLink to="">계정관리</SLink></Item>
        <Item><SLink to="">이용권현황</SLink></Item>
        <LItem><SLink to="">제안하기</SLink></LItem>
      </Account>
      <Account>
        
      </Account>
      <MainFooter/>
    </MainLayOut>
  );
  
};

export default MyInfo;

const Account = styled.div`
  background-color: white;
  border: 1px solid #F8F3F3;
  border-radius: 10px;
  padding: 10px 20px;
  margin-top:21px;
  width: 334px;
  height: 158px;
`;

const Item = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #777777;
  border-bottom: 3px solid #F8F3F3;
  height:50px;
  line-height:50px;
`;

const LItem = styled.div`
  height:50px;
  line-height:50px;
`;

const SLink = styled(Link)`
  font-weight: 600;
  font-size: 14px;
  color: #777777;
`;

