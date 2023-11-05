import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Button, Col, Row, notification } from 'antd';
import Section from '../../../components/Section';
import MyinfoLayout from '../../../layout/MyinfoLayout';
import { ReactComponent as QuestionCircle } from '../../../asset/svg/QuestionCircle.svg';
import { ReactComponent as KakaoTalk } from '../../../asset/svg/KakaoTalk.svg';
import { ReactComponent as Copy } from '../../../asset/svg/Copy.svg';
import PrimaryModal from '../../../components/Modal/PrimaryModal';
import { CLIENT_URL } from '../../../config/constants';
import { useGetUserReferralIdQuery } from '../../../features/api/userApi';

export default function Event() {
  const [api, contextHolder] = notification.useNotification();
  const [isNoticeOpened, setIsNoticeOpened] = useState(false);
  const { data: referralId } = useGetUserReferralIdQuery();

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(referralId);
    api.open({
      key: 'clipboard',
      message: `클립보드에 복사되었습니다`,
      placement: 'bottom',
      className: 'ant-notification-no-description',
    });
  }, [referralId]);

  const shareThroughKakao = useCallback(() => {
    const url = `${CLIENT_URL}/?referralId=${referralId}`;

    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title:
          '미팅에 재미를 더하다!💘\n쉽고 빠른 대학생 미팅 매칭 서비스, 미팅학개론',
        description:
          '🎁특별 선물🎁지금 해당 링크를 통해 접속하시면\n미팅학개론 팅 3개를 드려요!',
        imageUrl: `${CLIENT_URL}/assets/images/kakao-share-banner.png`,
        link: {
          // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
          mobileWebUrl: url,
          webUrl: url,
        },
      },
      buttons: [
        {
          title: '미팅하러 가기',
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
  });

  return (
    <MyinfoLayout title="이벤트">
      {contextHolder}
      <Section>
        <InvitationTitle>친구 초대 이벤트</InvitationTitle>
        <CouponBox>
          <InvitationSubtitle>
            친구 1명을 초대할 때마다
            <br />
            본인과 친구 모두 3팅씩 지급해드려요!
          </InvitationSubtitle>

          <InvitationDescription>
            <li>
              <b>나의 혜택:</b> 초대 받은 친구가 미팅학개론 회원가입 시,{' '}
              <PinkText>팅 3개</PinkText> 제공
            </li>
            <li>
              <b>친구 혜택:</b> 내가 보낸 초대 코드로 친구가 미팅학개론 회원가입
              시, 친구에게 <PinkText>팅 3개</PinkText> 제공
            </li>
          </InvitationDescription>
          <div style={{ width: '100%' }}>
            <TooltipButton type="text" onClick={() => setIsNoticeOpened(true)}>
              <QuestionCircle /> 유의 사항
            </TooltipButton>
          </div>
        </CouponBox>
      </Section>
      <Section my="12px">
        <Row gutter={16}>
          <Col span={12}>
            <CopyButton block onClick={copyToClipboard}>
              {referralId} <Copy />
            </CopyButton>
          </Col>
          <Col span={12}>
            <KakaoButton icon={<KakaoTalk />} block onClick={shareThroughKakao}>
              카카오톡 공유하기
            </KakaoButton>
          </Col>
        </Row>
      </Section>
      <PrimaryModal
        title="유의사항"
        open={isNoticeOpened}
        onCancel={() => setIsNoticeOpened(false)}
        footer={null}
      >
        <NoticeDescription>
          <li>친구 초대 횟수에는 제한이 없습니다.</li>
          <li>
            초대 후 친구가 초대 코드를 입력하여 회원가입까지 완료해야
            인정됩니다.
          </li>
          <li>
            부정한 방법으로 초대를 유도할 경우, 당사는 임의로 회원님을 이벤트
            참여 대상에서 제외할 수 있습니다.
          </li>
        </NoticeDescription>
      </PrimaryModal>
    </MyinfoLayout>
  );
}

const InvitationTitle = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.grey};
  padding: 0 0 10px 20px;
`;

const CouponBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: white;
  border: 1px solid #f8f3f3;
  border-radius: 10px;
  padding: 12px;
`;

const InvitationSubtitle = styled.p`
  margin: 12px 0;
  text-align: center;
  width: 100%;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  color: ${(props) => props.theme.pink};
`;

const InvitationDescription = styled.ul`
  font-weight: 400;
  font-size: 12px;
  line-height: 19px;
  color: ${(props) => props.theme.grey};
  padding: 0 30px;

  > li {
    position: relative;
    margin-bottom: 5px;
    :before {
      content: '·';
      position: absolute;
      top: 0;
      left: -8px;
    }
  }
`;

const PinkText = styled.span`
  color: ${(props) => props.theme.pink};
`;

const TooltipButton = styled(Button)`
  > svg {
    vertical-align: middle;
    margin-right: 4px;
  }
  > span {
    color: #cdcdcd;
  }
`;

const KakaoButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 47px;
  background-color: #fee500;

  > svg {
    vertical-align: middle;
    margin-right: 4px;
  }
  > span {
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
  }
`;

const CopyButton = styled(Button)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 47px;
  > svg {
    vertical-align: middle;
    margin-right: 4px;
  }
  > span {
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
  }
`;

const NoticeDescription = styled.ul`
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
  color: ${(props) => props.theme.grey};
  padding: 0 20px;

  > li {
    position: relative;
    :before {
      content: '·';
      position: absolute;
      top: 0;
      left: -8px;
    }
  }
`;
