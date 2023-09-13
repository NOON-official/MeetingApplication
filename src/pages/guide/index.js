import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Chtalk } from '../../asset/svg/ChannelTalk.svg';
import Section from '../../components/Section';
import Accordion from '../../components/Accordion';
import ChannelTalk from '../../asset/ChannelTalk';
import MyinfoLayout from '../../layout/MyinfoLayout';

const guides = [
  {
    title: '이용 방법이 궁금해요',
    content: `1. 친구들과 팀을 만든 후 <em>대표자만</em> 미팅학개론에 접속하여 우리팀 프로필을 만들어 주세요! <br/> 
    2. <우리 팀 추천 매칭>에서 <em>원하는 팀을 골라</em> 미팅 신청할 수 있어요.<br/>
    3. 미팅 신청을 넣기 위해서는 <em>학교 인증</em>은 필수! 학생증 인증도 진행해 주세요. (언제든지 가능해요) <br/>
    4. 최종 성사가 완료되면 <em>상대팀의 연락처</em>를 볼 수 있어요.`,
  },
  {
    title: '팅 사용 방법이 궁금해요',
    content: `미팅 신청 시 <em>2팅</em>, 미팅 수락 시 <em>4팅</em>이 사용돼요! <br/>가입할 때 무료로 지급해 드리는 팅이 있으니 체험해 보시고, 더 필요할 땐 팅을 충전할 수 있어요. (10팅 당 4,900원)`,
  },
  {
    title: '팅을 환불하고 싶어요',
    content: `사용하지 않은 팅은 <em>결제 후 7일 이내</em>에 <1:1 채팅 문의>를 통해 환불 가능해요. 미팅 신청을 보내거나 받은 신청을 수락하기 위해 팅을 사용했을 경우에는 환불 진행이 어려워요.🥲`,
  },
  {
    title: '미팅 신청 후 상대 팀이 응답하지 않아요',
    content: `미팅 신청 후 <em>최대 48시간</em>까지 상대 팀의 응답이 없으면 거절로 간주돼요. (매칭 조회 - 보낸 신청 - 거절됐어요 페이지에서 확인 가능해요.)`,
  },
  {
    title: '<우리 팀 추천 매칭>에 상대 팀이 뜨지 않아요',
    content:
      '우리 팀 프로필에 부합하는 상대 팀이 없는 경우에 상대팀이 뜨지 않을 수 있어요. 매일 밤 11시에 <우리 팀 추천 매칭>이 업데이트 되니 조금만 더 기다려 주세요!',
  },
  {
    title: '매칭 완료 후 상대 팀과 연락이 되지 않아요',
    content: `📍최종 매칭 후 전달받은 카톡 ID의 검색이 불가능한 경우, <1:1 채팅 문의>를 남겨주시면 전화번호를 대신 전달해 드려요! <br/>
    최종 매칭 완료되어 카톡ID/전화번호를 전달해 드린 후에 발생하는 문제(ex.연락, 미팅 파투 등)는 미팅학개론에서 책임지지 않고 있어요.`,
  },
  {
    title: '신청한 학교 인증이 반려되었어요',
    content: `<학교 인증 시 유의 사항>에 어긋날 경우 인증이 반려될 수 있어요. 내용을 꼼꼼히 살펴보시고 다시 인증을 진행해 주세요!<br/>
      ∙ 실물 학생증 사진, 모바일 학생증 캡쳐본 모두 가능해요<br/>∙ 대학교, 학과, 학번, 이름이 모두 보여야 승인돼요<br/> ∙ 미팅 신청자와 학생증에 기재된 이름이 일치해야 해요`,
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
      <Section my="3%" mx="10%">
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
