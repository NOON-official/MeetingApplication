import React, { useState } from 'react';
import styled from 'styled-components';
import MyinfoLayout from '../../../layout/MyinfoLayout';
import { ReactComponent as UniversityMark } from '../../../asset/svg/UniversityMark.svg';
import { ReactComponent as ChooseImg } from '../../../asset/svg/ChooseImg.svg';
import ApplyButton from '../../../components/ApplyButton';

export default function StudentCard() {
  const [imgFile, setImgFile] = useState(null);
  const [imgSrc, setImgSrc] = useState(null);

  const onUpload = (e) => {
    const file = e.target.files[0];
    console.log(file);

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
            {imgSrc ? null : (
              <>
                <InputTag
                  type="file"
                  accept="image/*"
                  id="fileInput"
                  onChange={(e) => onUpload(e)}
                  // style={{ border: '1px solid red' }}
                />
                <LightGrayText>
                  20MG 이하의 이미지 1장을 <br /> 업로드 할 수 있어요
                </LightGrayText>
                <InputLabel htmlFor="fileInput">
                  <ChooseImg />
                </InputLabel>
              </>
            )}
            <ImgPreview src={imgSrc} />
          </ImgUpload>

          {imgSrc ? <ApplyButton>수정하기</ApplyButton> : null}

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
  letter-spacing: 1px;
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
  font-size: 13px;
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
  /* z-index: 10; */
  cursor: pointer;
`;

const ImgPreview = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
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
