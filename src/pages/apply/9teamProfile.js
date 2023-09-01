import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

import { Carousel } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import ApplyLayout from '../../layout/ApplyLayout';
import ChannelTalk from '../../asset/ChannelTalk';
import { createTeam } from '../../features/apply/asyncAction';
import ApplyButton from '../../components/Button/ApplyButton';
import MatchingCompleteModal from '../../components/Modal/Matching/MatchingCompleteModal';
import SliderBoxMembers from '../../components/Slider/SliderBoxMembers';
import { useGetMyInfoQuery } from '../../features/api/userApi';

export default function Apply9Page() {
  const { ...applydata } = useSelector((store) => store.apply);
  const {
    areas,
    teamAvailableDate,
    city,
    drink,
    intro,
    kakaoId,
    members,
    teamName,
  } = applydata;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data: myInfo } = useGetMyInfoQuery();

  const [openModal, setOpenModal] = useState(false);

  const setModal = (bool) => {
    setOpenModal(bool);
  };

  const handleBefore = () => {
    navigate('/apply/8kakaoId');
  };

  const filteredData = { ...applydata };
  delete filteredData.finishedStep;
  delete filteredData.city;

  filteredData.members = filteredData.members.map((member) => {
    if (typeof member.mbti === 'undefined') {
      return {
        ...member,
        mbti: 17,
      };
    }
    return member;
  });

  const handleSubmit = useCallback(async () => {
    try {
      if (myInfo.userPhone === null) {
        navigate('/apply/10phone');
      } else {
        await dispatch(createTeam(filteredData));
        setOpenModal(true);
      }
    } catch (e) {
      console.log(e);
    }
  });

  let dates = '';
  if (teamAvailableDate.includes(1) && teamAvailableDate.includes(2)) {
    dates = '모두 좋아요';
  } else if (teamAvailableDate.includes(1)) {
    dates = '평일';
  } else {
    dates = '주말';
  }

  const CityContent = {
    1: '서울 / 경기',
    2: '대구',
    3: '부산',
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

  const AlcholContent = {
    1: '반 병',
    2: '한 병',
    3: '한 병 반',
    4: '두 병',
    5: '술고래',
  };

  return (
    <ApplyLayout>
      <MatchingCompleteModal open={openModal} setModal={setModal} />
      <TeamProfile>
        <SCarousel dots>
          <TextBox>
            <TeamTitle>
              <Title1>우리 팀 기본 정보</Title1>
              <TeamName>{teamName}</TeamName>
            </TeamTitle>
            <TeamInfo>
              <Subtitle>성별</Subtitle>
              <Content>{myInfo?.gender === 'male' ? '남성' : '여성'}</Content>
            </TeamInfo>
            <TeamInfo>
              <Subtitle>일정</Subtitle>
              <Content>{dates}</Content>
            </TeamInfo>
            <TeamInfo>
              <Subtitle>지역</Subtitle>
              <div>
                <SubContent>{CityContent[city]}</SubContent>
                <Content>
                  {areas.map((x) => {
                    return <span key={x}>{AreaContent[x]}&nbsp;&nbsp;</span>;
                  })}
                </Content>
              </div>
            </TeamInfo>
          </TextBox>
          <TextBox>
            <TeamTitle>
              <Title1>우리 팀 기본 정보</Title1>
              <TeamName>{teamName}</TeamName>
            </TeamTitle>
            <TeamInfo>
              <Subtitle2>주량</Subtitle2>
              <Content>
                {AlcholContent[drink]} (Lv.{drink})
              </Content>
            </TeamInfo>
            <TeamInfo>
              <Subtitle>카톡ID / 번호</Subtitle>
              <Content>{kakaoId}</Content>
            </TeamInfo>
          </TextBox>
        </SCarousel>
        <TeamIntro>
          <Title1>우리 팀 한 줄 어필</Title1>
          <Intro>{intro}</Intro>
        </TeamIntro>
        <SliderBoxMembers members={members} />
      </TeamProfile>
      <Footer>
        <ButtonBox>
          <ApplyButton onClick={handleBefore}>이전</ApplyButton>
          <ApplyButton onClick={handleSubmit}>제출하기</ApplyButton>
        </ButtonBox>
      </Footer>
      <div>{ChannelTalk.hideChannelButton()}</div>
    </ApplyLayout>
  );
}

const TeamProfile = styled.div`
  width: 90%;
  margin-top: 5%;
`;

const SCarousel = styled(Carousel)`
  width: 100%;
  border: 1px solid #f1ecec;
  border-radius: 10px;
  background-color: white;

  .slick-dots-bottom {
    margin: 0;
    top: 105%;
  }
  .slick-dots li button {
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background-color: #d9d9d9;
  }
  .slick-dots li.slick-active button {
    width: 9px;
    height: 9px;
    border-radius: 100%;
    background: #eb8888;
  }
`;

const TextBox = styled.div`
  width: 100%;
  height: 170px;
  padding: 7%;
`;

const TeamTitle = styled.div`
  display: flex;
`;

const Title1 = styled.div`
  font-weight: 600;
  font-size: 16px;
`;

const TeamName = styled.span`
  display: inline-block;
  padding: 4px 10px;
  margin-left: 6%;
  border-radius: 3px;
  background-color: #ececec;
  font-weight: 600;
  font-size: 12px;
`;

const TeamInfo = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 4% 0;
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

const Content = styled.div`
  font-weight: 500;
`;

const Subtitle2 = styled.span`
  background-color: #ffeded;
  border-radius: 10px;
  padding: 3px 7px;
  margin-right: 25%;
  font-weight: 600;
  font-size: 14px;
  color: #eb8888;
`;

const SubContent = styled.div`
  color: #777777;
  font-weight: 400;
`;

const TeamIntro = styled.div`
  margin: 10% 0;
  padding: 7% 7% 5%;
  border: 1px solid #f1ecec;
  border-radius: 10px;
  background-color: #ffffff;
`;

const Intro = styled.div`
  margin-top: 7%;
  line-height: 25px;
  font-size: 13px;
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
