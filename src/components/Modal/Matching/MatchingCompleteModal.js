import { Button, Modal } from 'antd';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import theme from '../../../style/theme';
import { createTeam } from '../../../features/apply/asyncAction';

export default function MatchingCompleteModal({ open, setModal }) {
  const { ...applydata } = useSelector((store) => store.apply);
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

  const navi = useNavigate();
  const dispatch = useDispatch();

  return (
    <div>
      {open ? (
        <Modal
          open={open}
          footer={null}
          centered
          width="380px"
          closable={false}
        >
          <Container>
            <TextBox>
              <BlackText>
                우리 팀 프로필이 모두 완성되었어요
                <br /> 이제 바로 미팅할 수 있어요!
              </BlackText>
            </TextBox>
            <SButton
              onClick={() => {
                dispatch(createTeam(filteredData));
                setModal(false);
                navi('/');
              }}
            >
              미팅하러 가기
            </SButton>
          </Container>
        </Modal>
      ) : null}
    </div>
  );
}
const Container = styled.div`
  padding-top: 5%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const TextBox = styled.div`
  width: 100%;
  text-align: center;
`;

const BlackText = styled.span`
  color: black;
  color: #525252;
  font-size: 18px;
`;

const SButton = styled(Button)`
  margin-top: 10%;
  width: 100%;
  height: 50px;
  color: white;
  background-color: ${theme.pink};
  font-size: 18px;
  font-weight: 400;
`;
