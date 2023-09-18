import styled from 'styled-components';

function MainFooter() {
  return (
    <Footer>
      <HeaderFooter>
        <SLink href="https://www.notion.so/moingclub/c83f4127e3c54b7080c333aa31a4cc03?pvs=4">
          이용약관
        </SLink>
        <SLink href="https://furry-bank-197.notion.site/c83f4127e3c54b7080c333aa31a4cc03">
          개인정보처리방침
        </SLink>
      </HeaderFooter>
    </Footer>
  );
}

export default MainFooter;

const Footer = styled.div`
  width: 100%;
  padding-top: 20px;
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
