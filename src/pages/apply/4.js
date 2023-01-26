import styled from 'styled-components';

import { Input } from 'antd';
import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

import theme from '../../style/theme';
import ApplyLayout from '../../layout/ApplyLayout';
import { ReactComponent as Baloon } from '../../asset/svg/Baloon.svg';
import ApplyButton from '../../components/ApplyButton';
import ProgressBar from '../../components/ProgressBar';
import IsPageCompleteModal from '../../components/Modal/IsPageCompleteModal';

function Apply4() {
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);

  const [intro, setIntro] = useState('');

  useEffect(() => {
    if (intro.length >= 10) {
      setOpenModal2(true);
    } else {
      setOpenModal2(false);
    }
  });

  const handleChange = useCallback(
    (e) => {
      setIntro(e.target.value);
    },
    [intro],
  );

  const setModal = (bool) => {
    setOpenModal(bool);
  };

  const handleModal = () => {
    if (intro.length >= 10) {
      setOpenModal(false);
    } else {
      setOpenModal(true);
    }
  };

  console.log(intro);

  return (
    <ApplyLayout>
      <IsPageCompleteModal open={openModal} setModal={setModal} />
      <Title>
        <Maintitle>
          우리팀을 소개하는 <Pink>마지막 한줄</Pink>
        </Maintitle>
        <Subtitle>센스 넘치게 우리 팀을 소개할수록 매칭률이 올라가요!</Subtitle>
        <Subtitle>길게 쓰면 운명의 짝을 만날지도?</Subtitle>
      </Title>
      <Text>
        <Alert>최소 글자수 10자</Alert>
        <STextArea
          value={intro}
          bordered={false}
          style={{
            height: '150px',
            resize: 'none',
            padding: '25px',
          }}
          showCount
          minLength={10}
          maxLength={150}
          onChange={handleChange}
        />
      </Text>
      <Baloon />
      <Footer>
        <ProgressBar page={4} />
        <ButtonBox>
          <ApplyButton>
            <SLink to="/apply/3">이전</SLink>
          </ApplyButton>
          <ApplyButton>
            {openModal2 ? (
              <SLink onClick={handleModal} to="/apply/5">
                다음
              </SLink>
            ) : (
              <SLink onClick={handleModal} to="/apply/4">
                다음
              </SLink>
            )}
          </ApplyButton>
        </ButtonBox>
      </Footer>
    </ApplyLayout>
  );
}

export default Apply4;

const Title = styled.div`
  width: 90%;
  margin-top: 8%;
  height: 13%;
  min-height: 13%;
`;

const Maintitle = styled.div`
  width: 100%;
  font-family: 'Nanum JungHagSaeng';
  font-weight: 400;
  font-size: 35px;
`;

const Pink = styled.div`
  padding-bottom: 5%;
  color: ${theme.pink};
`;

const Subtitle = styled.p`
  margin-top: 2%;
  color: #aaaaaa;
  font-weight: 400;
  font-size: 13px;
`;
const Text = styled.div`
  margin-top: 7%;
  padding-bottom: 10%;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;
const STextArea = styled(Input.TextArea)`
  background-color: white;
  width: 90%;
  border: 1px solid #f1ecec;
  border-radius: 10px;
`;

const Alert = styled.p`
  z-index: 1;
  position: absolute;
  top: 8%;
  right: 10%;
  color: #aaaaaa;
  font-weight: 400;
  font-size: 10px;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 10%;
  padding-bottom: 5%;
`;

const SLink = styled(Link)`
  padding: 10px 58.6px;
  text-decoration: 'none';
  color: ${(props) => props.theme.lightPink};
`;

const ButtonBox = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  justify-content: space-between;
  margin-top: 5%;
`;
