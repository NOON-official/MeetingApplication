import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import AWS from 'aws-sdk';
import MyinfoLayout from '../../../layout/MyinfoLayout';
import { ReactComponent as UniversityMark } from '../../../asset/svg/UniversityMark.svg';
import { ReactComponent as ChooseImg } from '../../../asset/svg/ChooseImg.svg';
import {
  useGetMyInfoQuery,
  useGetUserReferralIdQuery,
} from '../../../features/backendApi';
import CompleteUploadModal from '../../../components/Modal/CompleteUploadModal';
import AutomaticModal from '../../../components/Modal/AutomaticModal';
import BigFileModal from '../../../components/Modal/BigFileModal';
import backend from '../../../util/backend';

export default function StudentCard() {
  const [openModal, setOpenModal] = useState(false);
  const [openCompleteModal, setOpenCompleteModal] = useState(false);
  const [openBigfileModal, setOpenBigfileModal] = useState(false);

  const ACCESS_KEY = process.env.REACT_APP_AWS_ACCESS_KEY_ID;
  const REGION = process.env.REACT_APP_AWS_REGION;
  const SECRET_ACCESS_KEY = process.env.REACT_APP_AWS_SECRET_ACCESS_KEY;
  const S3_BUCKET = 'studentidcard';

  AWS.config.update({
    region: REGION,
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY,
  });

  const [imgFile, setImgFile] = useState(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [percentage, setPercentage] = useState(0);

  const { data: myInfo } = useGetMyInfoQuery();
  const { data: referralIdData } = useGetUserReferralIdQuery();
  const referralId = useMemo(
    () => referralIdData?.referralId || '',
    [referralIdData],
  );

  const selectFile = (e) => {
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

  const upload = () => {
    const totalBytes = imgFile.size;
    if (totalBytes >= 20 * 1024 * 1024) {
      setOpenBigfileModal(true);
    } else {
      setOpenModal(true);
      const load = new AWS.S3.ManagedUpload({
        params: {
          ACL: 'public-read',
          Bucket: S3_BUCKET,
          Key: `${myInfo.nickname}${referralId}.jpg`,
          Body: imgFile,
        },
      });

      let uploadBytes = 0;

      load.on('httpUploadProgress', (progress) => {
        uploadBytes = progress.loaded;
        setPercentage((uploadBytes / totalBytes) * 100);
      });

      const promise = load.promise();

      promise
        .then((data) => {
          try {
            backend.post(`/auth/student-card`, {
              studentCardUrl: data.Location,
            });
            setOpenCompleteModal(true);
          } catch (err) {
            console.log(err);
          }
        })
        .catch((err) => alert('이미지 로드에 실패했습니다!'));
    }
  };

  return (
    <MyinfoLayout title="학교 인증">
      <BigFileModal open={openBigfileModal} setModal={setOpenBigfileModal} />
      {percentage !== 100 && (
        <CompleteUploadModal
          open={openModal}
          setModal={() => setOpenModal()}
          progress={percentage}
        />
      )}
      <AutomaticModal
        open={openCompleteModal}
        setModal={setOpenCompleteModal}
        title="업로드 완료!"
      />
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
                  onChange={(e) => selectFile(e)}
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
            <ButtonBox>
              <SInputLabel onClick={() => setImgSrc(null)}>
                <ChangeButton>변경하기</ChangeButton>
              </SInputLabel>
              <UploadButton onClick={upload}>업로드하기</UploadButton>
            </ButtonBox>
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
  width: 75%;
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
