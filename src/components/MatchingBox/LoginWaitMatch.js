import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Modal } from 'antd';
import { ReactComponent as BigO } from '../../asset/svg/BigO.svg';
import { ReactComponent as RightArrow } from '../../asset/svg/RightArrow.svg';
import { ReactComponent as CircleArrow } from '../../asset/svg/CircleArrow.svg';

export default function LoginWaitMatch() {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const handleCancel = () => {
    setOpenModal(false);
  };

  return (
    <>
      <Modal
        width="380px"
        open={openModal}
        onCancel={handleCancel}
        centered
        footer={null}
      >
        <Container>
          <ModalText>
            매칭을 중단하시면 입력하신 정보가 사라집니다. 정말 매칭을
            중단하시겠어요?
          </ModalText>
          <SButton onClick={() => setOpenModal(false)}>중단하기</SButton>
        </Container>
      </Modal>
      <Top>
        <LeftTop>
          매칭결과
          <SCircleArrow
            onClick={() => {
              window.location.reload();
            }}
          />
        </LeftTop>
        <RightTop
          onClick={() => {
            navigate('/matching/myteam');
          }}
        >
          우리 팀 프로필 조회하기
        </RightTop>
      </Top>
      <WhiteBox>
        <SBigO />
        <TextBox>
          상대팀을 찾고 있어요! 조금만 기다려 주시면 곧 매칭해드릴게요.
        </TextBox>
        <MeetingButton
          onClick={() => {
            navigate('/apply/1');
          }}
        >
          미팅 팁 보러가기
        </MeetingButton>
      </WhiteBox>
      <WhiteBox2>
        <MenuItem
          onClick={() => {
            setOpenModal(true);
          }}
        >
          매칭 중단하기 <RightArrow />
        </MenuItem>
        <Line />
        <MenuItem
          onClick={() => {
            navigate('/myinfo/ticket');
          }}
        >
          이용권 구매하러 가기 <RightArrow />
        </MenuItem>
      </WhiteBox2>
    </>
  );
}
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px;
  color: #777777;
`;

const LeftTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20%;
  font-weight: 600;
  font-size: 14px;
`;

const SCircleArrow = styled(CircleArrow)`
  &:hover {
    cursor: pointer;
  }
`;

const RightTop = styled.div`
  display: flex;
  font-weight: 300;
  font-size: 12px;
  &:hover {
    cursor: pointer;
  }
`;

const WhiteBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;
  padding: 40px 22px 70px 22px;
  background: #ffffff;
  border-radius: 10px;
`;

const SBigO = styled(BigO)`
  margin-right: 5%;
`;

const TextBox = styled.div`
  margin-top: 20%;
  text-align: center;
  width: 55%;
  color: #1a1a1a;
  font-weight: 400;
  font-size: 30px;
  font-family: 'Nanum JungHagSaeng';
`;

const MeetingButton = styled(Button)`
  font-family: 'Nanum JungHagSaeng';
  color: #ffffff;
  font-weight: 400;
  font-size: 24px;
  text-align: center;
  border: none;
  margin-top: 20%;
  width: 160px;
  height: 50px;
  background: #eb8888;
  border-radius: 10px;
`;

const WhiteBox2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;
  background: #ffffff;
  border-radius: 10px;
  font-weight: 600;
  font-size: 14px;
  color: #777777;
  &:hover {
    cursor: pointer;
  }
`;

const MenuItem = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-start;
  justify-content: space-between;
  align-items: center;
  padding: 20px 35px;
  background: #ffffff;
  border-radius: 10px;
  font-weight: 600;
  font-size: 14px;
  color: #777777;
  &:hover {
    cursor: pointer;
  }
`;

const Line = styled.div`
  width: 80%;
  border: 2px solid #f8f3f3;
  background: #f8f3f3;
`;

const Container = styled.div`
  padding-top: 5%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const ModalText = styled.div`
  margin-top: 3%;
  text-align: center;
  width: 275px;
`;

const SButton = styled(Button)`
  margin-top: 10%;
  width: 100%;
  height: 50px;
  color: white;
  background-color: ${(props) => props.theme.pink};
`;
