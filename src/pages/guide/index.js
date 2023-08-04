import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Chtalk } from '../../asset/svg/ChannelTalk.svg';
import Section from '../../components/Section';
import Accordion from '../../components/Accordion';
import ChannelTalk from '../../asset/ChannelTalk';
import MyinfoLayout from '../../layout/MyinfoLayout';

const guides = [
  {
    title: '이용 방법이 궁금해요.',
    content: `1. 지인과 팀을 만드신 후 <em>대표자만</em> 미팅학개론에 접속하여 미팅 신청을 완료해 주세요.🤩 <br/> 2. 이후 추천된 상대팀에서 <em>미팅을 신청</em>하거나 본인 팀에 들어온 <em>미팅을 수락</em>해주세요. <br/> 3. 매칭이 완료되는 대로 연락처가 교환되니 조금만 기다려 주세요.`,
  },
  {
    title: '팅 사용 방법이 궁금해요.',
    content: `상대팀에게 미팅 신청을 하기 위해서는 <em>2팅</em> 필요하고, 상대팀의 미팅을 수락하기 위해서는 <em>4팅</em>이 들어요.<br/>
팅은 가입시 기본으로 지급되고, 이벤트를 통해서 무료로 얻을 수 있어요. 추가적으로 구매 페이지 에서 20팅 당 9,900원에 결제 가능해요!`,
  },
  {
    title: '팅을 환불하고 싶어요.',
    content: `사용하지 않은 팅은 결제 후 2일 이내에 언제든지 가능해요. 본인이 신청하거나 상대방의 미팅 신청을 수락한 후 팅은 환불 되지 않아요.`,
  },
  {
    title: '매칭 신청 후 상대방이 응답하지 않아요.',
    content: `거절 버튼을 누르는 게 미안하셨나봐요.🥲 며칠 더 기다려보면 혹시라도 수락해 주실 수도…?`,
  },
  {
    title: '상대팀이 보이지 않아요.',
    content:
      '해당 조건에 맞는 매칭 팀이 없나봐요. 매칭 조건을 확대하거나 하루만 기다리면 다른 상대팀이 나타날 거에요.',
  },
  {
    title: '매칭 후 연락이 되지 않아요.',
    content: `최종 매칭 후 받은 카톡 아이디 검색이 불가능한 경우 <em>전화번호를 대신 전달해드리고 있어요</em>. 아래 채널톡을 통해 문의 주세요.`,
  },
  {
    title: '학생증 인증이 거부 됐어요.',
    content:
      '회원 이름과 학생증이 일치하지 않거나, 학생증이 인식하기 어려운 경우 인증이 거부될 수 있어요. 다시 한번 학생증을 확인하시고 인증을 해주세요!',
  },
];

export default function Guide() {
  const setting = {
    pluginKey: process.env.REACT_APP_CHANNEL_TALK_PLUGIN,
    memberId: window.localStorage.id,
    profile: {
      name: window.localStorage.nickname,
    },
    customLauncherSelector: ' #custom-button-1',
    hideChannelButtonOnBoot: true,
  };

  return (
    <MyinfoLayout title="서비스 가이드">
      <Section my="32px">
        <Container>
          {guides.map((guide) => (
            <Accordion
              {...guide}
              content={
                <ContentWrapper
                  dangerouslySetInnerHTML={{ __html: guide.content }}
                />
              }
              key={guide.title}
            />
          ))}
          <CustomChannelTalk id="custom-button-1">
            {ChannelTalk.boot(setting)}
          </CustomChannelTalk>
        </Container>
      </Section>
    </MyinfoLayout>
  );
}

const Container = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  > svg {
    width: 100%;
    height: auto;
  }
`;

const CustomChannelTalk = styled(Chtalk)`
  width: 100%;
  &:hover {
    cursor: pointer;
  }
`;

const ContentWrapper = styled.p`
  font-size: 13px;
  line-height: 20px;
  ol {
    list-style: decimal;
    padding-left: 12px;
    > li {
      margin: 2px 0;
    }
  }
  > em {
    color: #eb8888;
  }
`;
