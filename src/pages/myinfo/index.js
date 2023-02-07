import styled from 'styled-components';
import { Button, Col, notification, Row } from 'antd';
import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MainFooter from '../../layout/footer/MainFooter';
import MainLayout from '../../layout/MainLayout';
import { ReactComponent as KakaoTalk } from '../../asset/svg/KakaoTalk.svg';
import { ReactComponent as RightArrow } from '../../asset/svg/RightArrow.svg';
import { ReactComponent as Copy } from '../../asset/svg/Copy.svg';
import { ReactComponent as QuestionCircle } from '../../asset/svg/QuestionCircle.svg';
import coffeeGreyImg from '../../asset/img/coffee-grey.png';
import coffeeImg from '../../asset/img/coffee.png';
import Section from '../../components/Section';
import PrimaryModal from '../../components/Modal/PrimaryModal';
import MenuBox, { LinkButton, MenuItem } from '../../components/MenuBox';
import { logout } from '../../features/user/asyncActions';
import SigninView from '../../components/Auth/SigninView';

function MyInfo() {
  const [api, contextHolder] = notification.useNotification();
  const [isNoticeOpened, setIsNoticeOpened] = useState(false);
  const dispatch = useDispatch();
  const { accessToken } = useSelector((state) => state.user);

  const inviteCode = 'ABCD123';

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(inviteCode);
    api.open({
      key: 'clipboard',
      message: `클립보드에 복사되었습니다`,
      placement: 'bottom',
      className: 'ant-notification-no-description',
    });
  }, [inviteCode]);

  if (!accessToken) {
    return (
      <MainLayout>
        <SigninView />
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      {contextHolder}
      <Section>
        <MenuBox>
          <MenuItem>
            <Link to="/myinfo/account">
              <LinkButton>
                계정관리 <RightArrow />
              </LinkButton>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/myinfo/ticket">
              <LinkButton>
                이용권 현황 <RightArrow />
              </LinkButton>
            </Link>
          </MenuItem>
          <MenuItem>
            <LinkButton
              href="https://docs.google.com/forms/d/e/1FAIpQLScjiIvjK7UTXLeR5c5C4unZWXKarGR0sq_9TjMqi51IKtyvUg/viewform"
              target="_blank"
            >
              제안하기 <RightArrow />
            </LinkButton>
          </MenuItem>
        </MenuBox>
      </Section>
      <Section my="8px" style={{ textAlign: 'right' }}>
        <LogoutButton type="text" onClick={() => dispatch(logout())}>
          로그아웃
        </LogoutButton>
      </Section>
      <Section>
        <InvitationTitle>친구 초대 이벤트</InvitationTitle>
        <CouponBox>
          <InvitationSubtitle>
            친구 4명을 초대하면
            <br />
            스타벅스 커피 1잔 쿠폰을 드려요!
          </InvitationSubtitle>
          <Coupons>
            <Circle isActive>1</Circle>
            <Circle>2</Circle>
            <Circle>3</Circle>
            <Circle>
              {false ? <img src={coffeeImg} /> : <img src={coffeeGreyImg} />}
            </Circle>
          </Coupons>
          <InvitationDescription>
            <li>
              <b>나의 혜택:</b> 초대 받은 친구가 미팅학개론 회원가입 시,{' '}
              <PinkText>스탬프 1개</PinkText>
              적립 <PinkText>(4개 달성 시 커피 1잔 + 이용권 1장)</PinkText>
            </li>
            <li>
              <b>친구 혜택:</b> 내가 보낸 초대 코드로 친구가 미팅학개론 회원가입
              시, 친구에게 <PinkText>미팅학개론 50% 할인권</PinkText> 제공
            </li>
          </InvitationDescription>
          <div style={{ width: '100%', paddingLeft: '12px' }}>
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
              {inviteCode} <Copy />
            </CopyButton>
          </Col>
          <Col span={12}>
            <KakaoButton icon={<KakaoTalk />} block>
              카카오톡 공유하기
            </KakaoButton>
          </Col>
        </Row>
      </Section>
      <MainFooter />
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
    </MainLayout>
  );
}

export default MyInfo;

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
  margin-bottom: 12px;
  text-align: center;
  width: 100%;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  color: ${(props) => props.theme.pink};
`;

const Coupons = styled.div`
  margin-bottom: 25px;
  width: 90%;
  display: flex;
  justify-content: center;
  justify-content: space-between;
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 65px;
  width: 65px;
  height: 65px;
  color: ${(props) => (props.isActive ? 'white' : props.theme.grey)};
  font-weight: 600;
  font-size: 20px;
  border-radius: 50%;

  background-color: ${(props) =>
    `${props.isActive ? `${props.theme.lightPink}` : '#ECE9E9'}`};
  > img {
    height: 40px;
  }
`;

const LogoutButton = styled(Button)`
  > span {
    color: ${(props) => props.theme.grey};
  }
`;

const InvitationTitle = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.grey};
  padding-left: 20px;
  padding-bottom: 10px;
`;

const InvitationDescription = styled.ul`
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
  color: ${(props) => props.theme.grey};
  padding: 0 32px;

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
  background-color: #fee500;
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
