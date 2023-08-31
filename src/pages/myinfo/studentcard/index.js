import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import AWS from 'aws-sdk';
import MyinfoLayout from '../../../layout/MyinfoLayout';
import { ReactComponent as UniversityMark } from '../../../asset/svg/UniversityMark.svg';
import { ReactComponent as UniversityMarkGray } from '../../../asset/svg/UniversityMarkDarkGray.svg';
import { ReactComponent as ChooseImg } from '../../../asset/svg/ChooseImg.svg';
import { useGetUserReferralIdQuery } from '../../../features/backendApi';
import CompleteUploadModal from '../../../components/Modal/Studentcard/CompleteUploadModal';
import AutomaticModal from '../../../components/Modal/AutomaticModal';
import BigFileModal from '../../../components/Modal/Studentcard/BigFileModal';
import backend from '../../../util/backend';
import Section from '../../../components/Section';
import Guidelines from './guidelines';
import Uploadsection from './uploadsection';
import { useGetMyInfoQuery } from '../../../features/api/userApi';

export default function StudentCard() {
  const [openModal, setOpenModal] = useState(false);
  const [openCompleteModal, setOpenCompleteModal] = useState(false);
  const [openBigfileModal, setOpenBigfileModal] = useState(false);

  const { data: myInfo, refetch } = useGetMyInfoQuery();
  const { data: referralIdData } = useGetUserReferralIdQuery();

  const referralId = useMemo(
    () => referralIdData?.referralId || '',
    [referralIdData],
  );

  // aws s3 upload file
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

  const selectFile = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setImgSrc(reader.result);
        setImgFile(file);
      };

      reader.readAsDataURL(file);
    }
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
          Key: `${myInfo?.nickname}${referralId}.jpg`,
          Body: imgFile,
        },
      });

      let uploadBytes = 0;

      load.on('httpUploadProgress', (progress) => {
        uploadBytes = progress.loaded;
        setPercentage((uploadBytes / totalBytes) * 100);
      });

      load
        .promise()
        .then(async (data) => {
          try {
            await backend.post(`/auth/student-card`, {
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

  useEffect(() => {
    refetch();
  }, [openCompleteModal, refetch]);

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

        {myInfo?.isVerified === false && (
          // 신청내역 없을 때
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

            {imgSrc && <Uploadsection setImgSrc={setImgSrc} upload={upload} />}
            <Guidelines />
          </Content>
        )}

        {myInfo?.isVerified === true && myInfo?.approval === null && (
          // 신청했으나 승인 기다릴 때
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
              <CheckingText>
                업로드해 주신 학생증을 검토 중이에요! 🔍
              </CheckingText>
            </ImgUpload>
            <Guidelines />
          </Content>
        )}

        {myInfo?.isVerified === true && myInfo?.approval === false && (
          // 신청했으나 반려됨
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
                    <BigSizeText>
                      <SUniversityMarkGray />
                      학생증 승인이 반려되었어요
                    </BigSizeText>
                    하단의 유의사항을 살펴보신 뒤 다시 업로드 해주세요!
                  </LightGrayText>
                  <InputLabel htmlFor="fileInput">
                    <ChooseImg />
                  </InputLabel>
                </>
              )}
            </ImgUpload>

            {imgSrc && <Uploadsection setImgSrc={setImgSrc} upload={upload} />}
            <Guidelines />
          </Content>
        )}

        {myInfo?.isVerified === true && myInfo?.approval && (
          // 인증 완료됨
          <Content>
            <VerifyBox>
              <UniversityMark />
              <PinkText>학교 인증 완료</PinkText>
            </VerifyBox>
          </Content>
        )}
      </Section>
    </MyinfoLayout>
  );
}

const VerifyBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10% 0;
  border: 1px solid #ffc6c6;
  border-radius: 14px;
  background-color: #ffe8e8;
`;

const PinkText = styled.span`
  margin-left: 5%;
  // 글자 색
  background: linear-gradient(90deg, #ccb5f3 0%, #ff9595 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 17px;
  font-weight: 400;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5%;
`;

const Title = styled.div`
  padding-bottom: 6%;
  width: 85%;
  margin: 0 auto;
  font-weight: 500;
  text-align: center;
  line-height: 20px;
`;

const Content = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-top: 10%;
  border-top: 0.7px solid #bdbdbd;
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

const ImgUpload = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 5% 0;
  width: 100%;
  height: 130px;
  border: 1px solid #bdbdbd;
  border-radius: 6px;
`;

const CheckingText = styled.div`
  color: #aeaeae;
`;

const SUniversityMarkGray = styled(UniversityMarkGray)`
  margin-right: 3%;
`;

const LightGrayText = styled.div`
  width: 100%;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #bdbdbd;
  font-size: 12px;
  text-align: center;
  line-height: 16px;
`;

const BigSizeText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1%;
  font-size: 17px;
  font-weight: 500;
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
