import { Modal } from 'antd';
import styled from 'styled-components';
import { ReactComponent as Magnifier } from '../../asset/svg/Magnifier.svg';
import { ReactComponent as Xbutton } from '../../asset/svg/Xbutton2.svg';

export default function RecommendModal() {
  return (
    <div>
      {/* {open ? ( */}
      <Modal open footer={null} centered width="380px" closable={false}>
        <SXbutton />
        <Container>
          <TextBox>
            <BlackText>
              오늘의 &lt;우리 팀 매칭&gt; 이 <br />
              업데이트 되었어요!
            </BlackText>
            <Content>
              <SmallText>어떤 팀들이 있는지 살펴보러 가볼까요?</SmallText>
              <SMagnifier />
            </Content>
            <SmallText>추천 매칭은 매일 밤 11시에 업데이트 돼요</SmallText>
          </TextBox>
        </Container>
      </Modal>
      {/* ) : null} */}
    </div>
  );
}
const SXbutton = styled(Xbutton)`
  padding-left: 95%;
`;
const SMagnifier = styled(Magnifier)``;
const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;
const BlackText = styled.span`
  color: #000000;
  font-size: 22px;
  font-family: 'PyeongChangPeace';
  line-height: 28px;
`;

const SmallText = styled.span`
  /* font-weight: 400; */

  font-size: 14px;
  color: #525252;
  font-family: 'GmarketSans';
`;
