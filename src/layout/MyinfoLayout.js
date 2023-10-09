import styled from 'styled-components';
import MyinfoHeader from './header/MyinfoHeader';
import BottomTabs from './header/BottomTabs';

export default function MyinfoLayout({ children, title }) {
  return (
    <Container>
      <Header>
        <MyinfoHeader title={title} />
      </Header>
      <Content title={title}>{children}</Content>
      <BottomTabs />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.background};
`;

const Header = styled.header`
  width: 100%;
  max-width: 425px;
`;

const Content = styled.div`
  max-width: 425px;
  width: 100%;
  height: 100%;
  padding-bottom: 90px;
  background-color: ${(props) =>
    props.title === '학교 인증' ||
    props.title === '보유 팅' ||
    props.title === '팅 충전하기'
      ? props.theme.white
      : props.theme.background};
  overflow-y: auto;

  // 스크롤 기능은 있으나 안보이게
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
  &::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }
`;
