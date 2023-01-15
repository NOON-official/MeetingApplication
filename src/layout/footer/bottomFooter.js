import styled from "styled-components";

const BottomFooter = () => {
  return (
    <Footer>
      <Info>노온</Info>
      <Info>대표자 남한솔 사업자등록번호 811-29-00871</Info>
      <Info>통신판매업신고 : 2021-서울성북-1613</Info>
      <Info>연락처 : 070-8064-3036 / noon.official.info@gmail.com</Info>
      <Info>주소지 서울시 성북구 장월로 1마길 56 DAC 스타트업 인큐베이팅센터</Info>
    </Footer>
  );
};

export default BottomFooter;


const Footer = styled.div`
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