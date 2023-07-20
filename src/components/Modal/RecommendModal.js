import { Modal } from 'antd';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { ReactComponent as Magnifier } from '../../asset/svg/Magnifier.svg';

export default function RecommendModal() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const now = new Date();
    const targetTime = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      23,
      0,
      0,
    );

    const lastPopupTime = localStorage.getItem('lastPopupTime');

    if (lastPopupTime) {
      const lastTime = new Date(parseInt(lastPopupTime, 10));
      if (now >= lastTime && now < targetTime) {
        // 현재 시간이 이전 팝업이 뜬 시간 이후 && 밤 11시 전
        setShowPopup(false);
      } else {
        setShowPopup(true);
        localStorage.setItem('lastPopupTime', now.getTime().toString());
      }
    } else {
      // 팝업 본 적 없을 때
      setShowPopup(true);
      localStorage.setItem('lastPopupTime', now.getTime().toString());
    }
  }, []);

  return (
    <div>
      <Modal
        open={showPopup}
        footer={null}
        centered
        width="380px"
        closable
        onCancel={() => setShowPopup(false)}
      >
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
    </div>
  );
}

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
  font-size: 14px;
  color: #525252;
  font-family: 'GmarketSans';
`;

const SMagnifier = styled(Magnifier)``;
