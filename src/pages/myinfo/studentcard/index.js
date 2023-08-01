import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import MyinfoLayout from '../../../layout/MyinfoLayout';
import { ReactComponent as UniversityMark } from '../../../asset/svg/UniversityMark.svg';
import { ReactComponent as ChooseImg } from '../../../asset/svg/ChooseImg.svg';

export default function StudentCard() {
  const [imgFile, setImgFile] = useState(null);
  const [imgSrc, setImgSrc] = useState(null);

  const onUpload = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);

    return new Promise((resolve) => {
      reader.onload = () => {
        setImgSrc(reader.result);
        setImgFile(file);
        resolve();
      };
    });
  };

  return (
    <MyinfoLayout title="학교 인증">
      <Section>
        <Title>
          학교 인증 완료 팀은 &lt;우리 팀 추천 매칭&gt;이
          <br /> 업데이트 될 때 최우선 순위로 노출돼요! 😉
        </Title>

        <Content>
          <Header>
            <BlackText>학생증으로 인증하기</BlackText>
            <UniversityMark />
          </Header>
          <GrayText>
            학생증 이미지를 업로드해 주시면 <br />
            24시간 이내에 검토하여 승인해 드릴게요
          </GrayText>
          <ImgUpload>
            {imgSrc ? (
              <ImgPreview src={imgSrc} />
            ) : (
              <>
                <InputTag
                  type="file"
                  accept="image/*"
                  id="fileInput"
                  multiple
                  onChange={(e) => onUpload(e)}
                />
                <LightGrayText>
                  20MG 이하의 이미지 1장을 <br /> 업로드 할 수 있어요
                </LightGrayText>
                <InputLabel htmlFor="fileInput">
                  <ChooseImg />
                </InputLabel>
              </>
            )}
          </ImgUpload>

          {imgSrc && (
            <>
              <InputTag
                type="file"
                accept="image/*"
                id="fileInput"
                multiple
                onChange={(e) => onUpload(e)}
              />
              <ButtonBox>
                <SInputLabel htmlFor="fileInput">
                  <ChangeButton>변경하기</ChangeButton>
                </SInputLabel>
                <UploadButton>업로드하기</UploadButton>
              </ButtonBox>
            </>
          )}

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
  padding: 6%;
  background-color: #ffffff;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5%;
`;

const Title = styled.div`
  border-bottom: 0.7px solid #bdbdbd;
  padding-bottom: 6%;
  width: 85%;
  margin: 0 auto;
  font-weight: 500;
  text-align: center;
  line-height: 20px;
  /* letter-spacing: 1px; */
`;

const Content = styled.div`
  width: 85%;
  margin: 0 auto;
  margin-top: 10%;
`;

const BlackText = styled.div`
  margin-right: 3%;
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
  display: flex;
  position: relative;
  margin: 5% 0;
  width: 100%;
  height: 130px;
  border: 1px solid #bdbdbd;
  border-radius: 6px;
`;

const LightGrayText = styled.div`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #bdbdbd;
  font-size: 12px;
  text-align: center;
  line-height: 16px;
`;

const InputTag = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  border: 1px solid #bdbdbd;
  border-radius: 6px;
  z-index: 1;
  cursor: pointer;
`;

const ImgPreview = styled.img`
  object-fit: contain;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  border: none;
`;

const InputLabel = styled.label`
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin: 5% auto 6%;
`;

const SInputLabel = styled.label``;

const ChangeButton = styled(Button).attrs({ type: 'button' })`
  width: 100px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.lightPink};
  color: ${(props) => props.theme.lightPink};
  background-color: #ffffff;
  font-size: 14px;
  font-weight: 400;
`;

const UploadButton = styled(Button).attrs({ type: 'button' })`
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 10px;
  color: #ffffff;
  background-color: #eb8888;
  font-size: 14px;
  font-weight: 400;
`;
