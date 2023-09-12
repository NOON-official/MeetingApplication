import { Modal } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Mailbox from '../../../asset/img/Mailbox.png';
import { useGetMyInfoQuery } from '../../../features/api/userApi';

export default function FreeTingModal({ open, setModal }) {
  const navigate = useNavigate();
  const { data: myinfo } = useGetMyInfoQuery();

  return (
    <div>
      {open ? (
        <SModal
          open={open}
          footer={null}
          centered
          width="380px"
          closable
          onCancel={() => {
            setModal(false);
            navigate('/apply/invite');
          }}
        >
          <Container>
            <Header>회원가입을 축하해요!</Header>
            <TextBox>
              <BlackText>
                <ColorText>
                  무료 {myinfo?.gender === 'female' ? 30 : 5}팅
                </ColorText>
                이 도착했어요!
              </BlackText>
              <Content>
                <SmallText>
                  우리 팀 프로필을 만든 후<br />
                  사용해보세요!
                </SmallText>
                <SImg src={Mailbox} />
              </Content>
            </TextBox>
          </Container>
        </SModal>
      ) : null}
    </div>
  );
}

const SModal = styled(Modal)`
  .ant-modal-content {
    padding-bottom: 0;
    padding-right: 0;
    background-color: #fbfaf9;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Header = styled.span`
  display: inline;
  border-radius: 15px;
  padding: 1% 6%;
  margin-bottom: 5%;
  color: #ffffff;
  background-color: #000;
  font-family: 'GmarketSans';
  font-size: 14px;
`;

const BlackText = styled.span`
  color: #000000;
  font-size: 25px;
  font-family: 'PyeongChangPeace';
  line-height: 28px;
`;

const ColorText = styled.span`
  background: linear-gradient(
    90deg,
    #a143ff 0%,
    #59f 30.73%,
    #4fffea 65.63%,
    #52ff63 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  margin-top: 10px;
`;

const SmallText = styled.span`
  margin-bottom: 4%;
  font-size: 14px;
  color: #525252;
  font-weight: 300;
  font-family: 'GmarketSans';
`;

const SImg = styled.img`
  width: 145px;
`;
