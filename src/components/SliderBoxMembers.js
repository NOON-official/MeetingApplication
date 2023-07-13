import React from 'react';
import styled from 'styled-components';

import { Carousel } from 'antd';

import theme from '../style/theme';
import Universities from '../asset/Universities';
import Mbti from '../asset/Mbti';
import { ReactComponent as Plus } from '../asset/svg/Plus.svg';
import { ReactComponent as Profile1 } from '../asset/svg/Profile1.svg';
import { ReactComponent as Profile2 } from '../asset/svg/Profile2.svg';
import { ReactComponent as Profile3 } from '../asset/svg/Profile3.svg';
import { ReactComponent as Profile4 } from '../asset/svg/Profile4.svg';

export default function SliderBoxMembers({ members }) {
  const profileimg = (role) => {
    if (role === 1) {
      return <Profile1 />;
    }
    if (role === 2) {
      return <Profile4 />;
    }
    if (role === 3) {
      return <Profile3 />;
    }
    if (role === 4) {
      return <Profile2 />;
    }
    return <Plus />;
  };

  const Member = {
    1: '대표자',
    2: '팀원 2',
    3: '팀원 3',
    4: '팀원 4',
  };

  return (
    <SCarousel2 dots>
      {members.map((member, idx) => {
        const { role, age, university, mbti, appearance } = member;

        return (
          <Container key={member}>
            <Title2 />
            <Box>
              <LeftBox>
                <Profile>{profileimg(role)}</Profile>
                <ProfileTitle>{Member[idx + 1]}</ProfileTitle>
              </LeftBox>
              <RightBox>
                <Info>
                  <InfoTitle>나이</InfoTitle>
                  <InfoContent>만 {age}세</InfoContent>
                </Info>
                <Info>
                  <InfoTitle>대학교</InfoTitle>
                  <InfoContent>{Universities[university - 1].name}</InfoContent>
                </Info>
                <Info>
                  <InfoTitle>MBTI</InfoTitle>
                  <InfoContent>
                    {mbti === undefined || mbti === 17
                      ? '만나서 알려드려요'
                      : Mbti[mbti - 1]?.name}
                  </InfoContent>
                </Info>
                <Info>
                  <InfoTitle>닮은꼴</InfoTitle>
                  <InfoContent>
                    {appearance === undefined
                      ? '만나서 알려드려요'
                      : appearance}
                  </InfoContent>
                </Info>
              </RightBox>
            </Box>
          </Container>
        );
      })}
    </SCarousel2>
  );
}
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
