import styled from 'styled-components';

function BottomFooter() {
  return (
    <Footer>
      <Info>미팅학개론</Info>
      <Info>대표자 금아름 사업자등록번호 : 172-20-01807</Info>
      <Info>통신판매번호 : 2023-서울동대문-0225</Info>
      <Info>대표 번호 : 010-7583-9641   / noon.official.info@gmail.com</Info>
      <Info>
      주소지 : 서울시 동대문구 휘경로 20, 3층
      </Info>
    </Footer>
  );
}

export default BottomFooter;

const Footer = styled.div`
  width: 100%;
  margin-top: 23px;
  padding-bottom: 10px;
`;
const Info = styled.div`
  margin-top: 8px;
  font-weight: 400;
  font-size: 7px;
  color: #9f9f9f;
`;
