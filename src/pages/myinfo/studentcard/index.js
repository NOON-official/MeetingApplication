import React from 'react';
import styled from 'styled-components';
import MyinfoLayout from '../../../layout/MyinfoLayout';
import { ReactComponent as UniversityMark } from '../../../asset/svg/UniversityMark.svg';
import { ReactComponent as Camera } from '../../../asset/svg/Camera.svg';

export default function StudentCard() {
  return (
    <MyinfoLayout title="학교 인증">
      <Section>
        <Header>
          <Title>학교 인증</Title>
          <UniversityMark />
        </Header>
        <Subtitle>
          학교 인증 후 뱃지를 달아드려요
          <br /> 학교 인증한 팀은 매칭 확률이 높아져요!
        </Subtitle>

        <Content>
          <BlackText>학생증으로 인증하기</BlackText>
          <GrayText>
            학생증 이미지를 업로드해 주시면 <br />
            검토 후에 승인해 드려요 (24시간 이내)
          </GrayText>
          <ImgUpload>
            <InputTag
              type="file"
              accept="image/*"
              placeholder="dkdkd"
              id="fileInput"
            />
            <InputLabel htmlFor="fileInput">
              <Camera />
            </InputLabel>
          </ImgUpload>

          <GrayText>유의사항</GrayText>
          <GrayText2>
            <List>∙ 실물 학생증 사진, 모바일 학생증 캡쳐본 모두 가능해요</List>
            <List>∙ 대학교, 학과, 학번, 이름이 모두 보여야 승인돼요</List>
            <List>∙ 미팅 신청자와 학생증에 기재된 이름이 일치해야 해요</List>
          </GrayText2>
        </Content>
      </Section>
    </MyinfoLayout>
  );
}

const Section = styled.div`
  margin: 3%;
  padding: 5%;
  border-radius: 10px;
  background-color: #ffffff;
  height: 90%;
`;

const Header = styled.div`
  display: flex;
`;

const Title = styled.div`
  margin-right: 3%;
  font-size: 20px;
  font-weight: 600;
`;

const Subtitle = styled.div`
  margin-top: 5%;
  font-size: 15px;
  font-weight: 400;
  line-height: 19px;
`;

const Content = styled.div`
  margin-top: 10%;
`;

const BlackText = styled.div`
  margin-bottom: 3%;
  font-weight: 500;
`;

const GrayText = styled.div`
  font-size: 15px;
  font-weight: 300;
  line-height: 18px;
`;

const GrayText2 = styled.ul`
  margin: 3% 0;
  font-size: 13px;
  font-weight: 300;
  line-height: 18px;
`;

const List = styled.li``;

const ImgUpload = styled.div`
  position: relative;
  margin: 5% 0;
  width: 100%;
  height: 60px;
  border: 1px solid #bdbdbd;
  border-radius: 6px;
`;

const InputTag = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 5% 0;
  opacity: 0;
  cursor: pointer;
`;

const InputLabel = styled.label`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;
