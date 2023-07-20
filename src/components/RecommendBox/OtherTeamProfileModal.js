import React from 'react';
import styled from 'styled-components';

import { Modal } from 'antd';
import { ReactComponent as UniversityMarkBlack } from '../../asset/svg/UniversityMarkBlack.svg';
import SliderBoxMembers from '../SliderBoxMembers';
import ApplyButton from '../ApplyButton';
import Area from '../../asset/Area';

export default function OtherTeamProfileModal({ open, closeModal, teamId }) {
  const DATA = {
    id: 1,
    ownerId: 1,
    gender: 1,
    memberCount: 2,
    memberCounts: [2, 3],
    teamAvailableDate: [1, 2],
    areas: [1, 3],
    members: [
      {
        id: 1,
        role: 1,
        mbti: 13,
        university: 1,
        appearance: '차은우',
        age: 23,
      },
      {
        id: 2,
        role: 3,
        mbti: 16,
        university: 5,
        age: 23,
      },
    ],
    teamName: '기웅내세요',
    intro: '안녕하세요',
    drink: 5,
    prefAge: [23, 27],
    prefVibes: [1, 2, 5],
    isVerified: true,
    createdAt: '2023-01-20T21:37:26.886Z',
    updatedAt: '2023-01-20T21:37:26.886Z',
    modifiedAt: '2023-01-20T21:37:26.886Z',
    deletedAt: '2023-01-20T21:37:26.886Z',
  };

  const {
    teamAvailableDate,
    areas,
    members,
    teamName,
    intro,
    drink,
    isVerified,
  } = DATA;

  let dates = '';
  if (teamAvailableDate.includes(1) && teamAvailableDate.includes(2)) {
    dates = '모두 좋아요';
  } else if (teamAvailableDate.includes(1)) {
    dates = '평일';
  } else {
    dates = '주말';
  }

  const AlcholContent = {
    1: '반 병',
    2: '한 병',
    3: '한 병 반',
    4: '두 병',
    5: '술고래',
  };

  const AreaContent = {
    1: '강남',
    2: '건대',
    3: '수원',
    4: '신촌',
    5: '인천',
    6: '홍대',
    7: '경대 북문',
    8: '계대 앞',
    9: '동성로',
    10: '영대역',
    11: '경대 앞',
    12: '부산대 앞',
    13: '서면',
    14: '해운대',
  };

  return (
    <div>
      {open ? (
        <SModal
          open={open}
          footer={null}
          centered
          width="380px"
          bodyStyle={{ backgroundColor: '#FBFAF9' }}
          closable
          onCancel={() => closeModal()}
        >
          <TeamProfile>
            <TeamName>{teamName}</TeamName>
            <TextBox>
              <Title>상대 팀 한 줄 어필</Title>
              <Content>{intro}</Content>
            </TextBox>
            <TextBox>
              <Container>
                <Title>상대 팀 기본 정보</Title>
                {isVerified ? (
                  <>
                    <SUniversityMark />
                    <UniversityMarkText>대학 인증 완료</UniversityMarkText>
                  </>
                ) : null}
              </Container>
              <TeamInfo>
                <Subtitle>일정</Subtitle>
                <SubContent>{dates}</SubContent>
              </TeamInfo>
              <TeamInfo>
                <Subtitle>지역</Subtitle>
                <div>
                  <AreaCity>
                    {
                      Area.find((x) =>
                        x.content.some((item) => item.id === areas[0]),
                      ).title
                    }
                  </AreaCity>
                  <SubContent>
                    {areas.map((x) => {
                      return <span key={x}>{AreaContent[x]}&nbsp;&nbsp;</span>;
                    })}
                  </SubContent>
                </div>
              </TeamInfo>
              <TeamInfo>
                <Subtitle>주량</Subtitle>
                <SubContent>{`${AlcholContent[drink]} (Lv.${drink})`}</SubContent>
              </TeamInfo>
            </TextBox>
            <SliderBoxMembers members={members} />
          </TeamProfile>
          <Footer>
            <ButtonBox>
              <ApplyButton>신청하기</ApplyButton>
              <ApplyButton>다시 안 보기</ApplyButton>
            </ButtonBox>
          </Footer>
        </SModal>
      ) : null}
    </div>
  );
}

const SModal = styled(Modal)`
  .ant-modal-content {
    padding: 1%;
    background-color: #fbfaf9;
  }
`;

const TeamProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 90%;
  margin: 0 auto;
`;

const TeamName = styled.span`
  margin: 5% auto;
  padding: 5px 10px;
  border-radius: 3px;
  background-color: #ffd3d3;
  font-weight: 600;
  font-size: 16px;
`;

const TextBox = styled.div`
  margin-bottom: 6%;
  border: 1px solid #f1ecec;
  border-radius: 10px;
  background-color: #ffffff;
  padding: 7%;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
`;

const Content = styled.div`
  margin-top: 5%;
  font-weight: 400;
  font-size: 13px;
  line-height: 21px;
  word-break: keep-all;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const SUniversityMark = styled(UniversityMarkBlack)`
  margin: 0 10px 0 30px;
`;

const UniversityMarkText = styled.div`
  color: #777777;
  font-size: 14px;
`;

const TeamInfo = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 5%;
`;

const Subtitle = styled.span`
  background-color: #ffeded;
  border-radius: 10px;
  padding: 3px 7px;
  margin-right: 10%;
  font-weight: 600;
  font-size: 14px;
  color: #eb8888;
`;

const SubContent = styled.div`
  font-size: 14px;
  font-weight: 500;
`;

const AreaCity = styled.div`
  margin-bottom: 5px;
  color: #777777;
  font-weight: 400;
  font-size: 14px;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 10%;
  padding-bottom: 5%;
`;

const ButtonBox = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  justify-content: space-between;
  margin-top: 5%;
`;
