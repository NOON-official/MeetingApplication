import { Modal } from 'antd';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { ReactComponent as Magnifier } from '../../../asset/svg/Magnifier.svg';
import { useGetUserTeamIdDataQuery } from '../../../features/backendApi';

export default function RecommendModal() {
  const [showPopup, setShowPopup] = useState(false);
  const { data: myTeamId } = useGetUserTeamIdDataQuery();

  useEffect(() => {
    // 현재 시간
    const now = dayjs();
    // 밤 11시
    const targetTime = now.set({ hour: 23, minute: 0, second: 0 });

    const lastPopupTime = localStorage.getItem('lastPopupTime');
    const lastTime = lastPopupTime ? dayjs(parseInt(lastPopupTime, 10)) : null;

    // 현재 시간이 23시 이후인지
    const isAfter11pm = now.isAfter(targetTime);

    if (myTeamId?.teamId) {
      if (!lastTime || now.diff(lastTime, 'hour') >= 24) {
        // 한 번도 팝업을 본 적 없는 경우 or 팝업 확인한지 24시간 이후
        setShowPopup(true);
        localStorage.setItem('lastPopupTime', now.valueOf().toString());
      } else if (now.diff(lastTime, 'hour') < 24 && isAfter11pm) {
        // 마지막 팝업 확인 시간으로부터 24시간 이내이고, 현재 시간이 23:00 ~ 23:59
        setShowPopup(true);
        localStorage.setItem('lastPopupTime', now.valueOf().toString());
      } else {
        // 마지막 팝업 확인 시간으로부터 24시간 이내이고, 현재 시간이 00:00 ~ 22:59
        setShowPopup(false);
      }
    } else {
      setShowPopup(false);
    }
  }, [myTeamId]);

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
