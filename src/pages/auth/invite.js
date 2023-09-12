import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Button, Input } from 'antd';
import backend from '../../util/backend';
import ApplyLayout from '../../layout/ApplyLayout';
import ChannelTalk from '../../asset/ChannelTalk';

function InvitePage() {
  const referralId = sessionStorage.getItem('referralId');
  const [inviteCode, setInviteCode] = useState(referralId);

  const navigate = useNavigate();

  const handleInviteCode = useCallback(
    (e) => {
      setInviteCode(e.target.value);
    },
    [inviteCode],
  );

  const NextPage = useCallback(async () => {
    if (inviteCode !== null) {
      try {
        await backend.post('/invitations', { referralId: inviteCode });
        navigate('/apply/1');
      } catch (e) {
        window.alert('초대코드가 올바르지않습니다!');
      }
    } else {
      navigate('/apply/1');
    }
  });

  return (
    <ApplyLayout>
      <Title>
        <Maintitle>
          혹시 미팅학개론을 소개해주신
          <br /> 회원님이 있나요?
        </Maintitle>
        <Subtitle>회원 초대 코드가 있다면 알려주세요!</Subtitle>
      </Title>
      <Conatiner>
        <SInput
          value={inviteCode}
          onChange={handleInviteCode}
          placeholder="초대 코드 입력하기 (선택)"
        />
      </Conatiner>
      <Footer>
        <SubmitButton onClick={NextPage}>바로 미팅하러 가기</SubmitButton>
        <MainButton
          onClick={() => {
            navigate('/');
          }}
        >
          메인으로 가기
        </MainButton>
        <div>{ChannelTalk.hideChannelButton()}</div>
      </Footer>
    </ApplyLayout>
  );
}

export default InvitePage;

const Title = styled.div`
  width: 90%;
  margin: 10% 0;
`;

const Maintitle = styled.div`
  width: 100%;
  margin-bottom: 5%;
  font-weight: 500;
  font-size: 22px;
  line-height: 30px;
`;

const Subtitle = styled.p`
  color: #aaaaaa;
  font-weight: 400;
  font-size: 15px;
`;

const Conatiner = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SInput = styled(Input)`
  margin-top: 7%;
  width: 100%;
  height: 48px;
`;

const SubmitButton = styled(Button)`
  color: #ffffff;
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  border: none;
  width: 100%;
  height: 50px;
  background: #eb8888;
  border-radius: 10px;
`;

const MainButton = styled(Button)`
  margin-top: 5%;
  color: #f2cbcb;
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  border: 1px solid #f2cbcb;
  width: 100%;
  height: 50px;
  background: transparent;
  border-radius: 10px;
`;

const Footer = styled.div`
  width: 90%;
  margin: auto 0 10%;
`;
