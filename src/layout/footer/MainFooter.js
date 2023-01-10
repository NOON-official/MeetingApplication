import styled from "styled-components";

import { theme } from "../../Style/theme";

const MainFooter = () => {
  return (
    <Footer>
      <HeaderFooter>
        <SLink href="https://furry-bank-197.notion.site/4e3c4d1f8306494b9a54fc2226e9a3b7">
          이용약관
        </SLink>
        <SLink href="https://furry-bank-197.notion.site/c83f4127e3c54b7080c333aa31a4cc03">
          개인정보처리방침
        </SLink>
        <SLink href="https://furry-bank-197.notion.site/303cd8bbdefc41a3bf088b30a4c98f84">
          공지사항
        </SLink>
        <SLink href="https://furry-bank-197.notion.site/aaa47097d9b24192a739a3f7aafa8556">
          문의사항
        </SLink>
      </HeaderFooter>
      <BottomFooter>
        <Info>노온</Info>
        <Info>대표자 남한솔 사업자등록번호 811-29-00871</Info>
        <Info>통신판매업신고 : 2021-서울성북-1613</Info>
        <Info>연락처 : 070-8064-3036 / noon.official.info@gmail.com</Info>
        <Info>
          주소지 서울시 성북구 장월로 1마길 56 DAC 스타트업 인큐베이팅센터
        </Info>
      </BottomFooter>
    </Footer>
  );
};

export default MainFooter;

const Footer = styled.div`
  width:100%;
  padding-top:20px;
  margin-top:38px;
  border-top: 1px solid #d6d6d6;
  display: flex;
  flex-wrap: wrap;
`;
const SLink = styled.a`
  color: #515151;
  font-size: 13px;
`;
const HeaderFooter = styled.div`
  font-weight: 400;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  justify-content: space-around;
`;
const BottomFooter = styled.div`
  width: 100%;
  margin-top:23px;
  padding-bottom:10px;
`;
const Info = styled.div`
  margin-top:8px;
  font-weight: 400;
  font-size: 7px;
  color: #9f9f9f;
`;