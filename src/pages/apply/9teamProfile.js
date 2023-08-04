import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

import { Carousel } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import ApplyLayout from '../../layout/ApplyLayout';
import ChannelTalk from '../../asset/ChannelTalk';
import theme from '../../style/theme';
import { createTeam } from '../../features/apply/asyncAction';
import ApplyButton from '../../components/ApplyButton';
import backend from '../../util/backend';
import MatchingCompleteModal from '../../components/Modal/MatchingCompleteModal';
import SliderBoxMembers from '../../components/SliderBoxMembers';

export default function Apply9Page() {
  const { ...applydata } = useSelector((store) => store.apply);
  const {
    areas,
    teamAvailableDate,
    city,
    drink,
    intro,
    kakaoId,
    finishedStep,
    members,
    teamName,
  } = applydata;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);
  const [userPhone, setUserPhone] = useState('');
  const [gender, setGender] = useState('');

  const setModal = (bool) => {
    setOpenModal(bool);
  };

  const getInformation = useCallback(async () => {
    const userData = await backend.get('/users/my-info');
    setGender(userData.data.gender);
    setUserPhone(userData.data.phone);
  }, []);

  useEffect(() => {
    if (finishedStep < 8) {
      window.alert('잘못된 접근입니다');
      navigate(`/apply/${finishedStep + 1}`);
    }
    getInformation();
  }, [finishedStep]);

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
      if (userPhone === null) {
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
              <Content>{gender === 'male' ? '남성' : '여성'}</Content>
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

const SCarousel2 = styled(Carousel)`
  width: 100%;
  background-color: ${theme.background};
  border: 1px solid #f1ecec;
  border-radius: 10px;

  .slick-dots-bottom {
    margin: 0;
    top: 105%;
  }
  .slick-dots li button {
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: #d9d9d9;
  }
  .slick-dots li.slick-active button {
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background: #eb8888;
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  height: 200px;
`;

const Title2 = styled.div`
  width: 100%;
  min-width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 35px;
  background-color: ${theme.lightPink};
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeftBox = styled.div`
  padding: 0 5%;
  width: 30%;
  height: calc(200px - 35px);
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`;

const Profile = styled.div`
  &:hover {
    cursor: pointer;
  }
  margin-top: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background: #ffffff;
  border: 1px solid #f1ecec;
  border-radius: 50%;
`;

const ProfileTitle = styled.div`
  width: 59px;
  height: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 200;
  font-size: 13px;
  border-radius: 7px;
  color: white;
  background-color: #eb8888;
  font-family: 'SCoreDream';
  margin-bottom: 15px;
`;

const RightBox = styled.div`
  margin-top: 20% 0;
  padding-right: 5%;
  width: 60%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`;

const Info = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding-bottom: 2px;
  padding-left: 5px;
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 20px;
  font-family: 'Nanum JungHagSaeng';
  width: 100%;
  max-width: 100%;
  border-bottom: 1px solid #eb8888;
`;

const InfoTitle = styled.div`
  width: 30%;
  color: ${theme.pink};
  font-family: 'SCoreDream';
  font-size: 13px;
  font-weight: 200;
`;

const InfoContent = styled.span`
  width: 70%;
  font-family: 'SCoreDream';
  font-size: 13px;
  font-weight: 200;
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
