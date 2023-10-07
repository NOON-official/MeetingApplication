import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ModifyProfileModal from '../Modal/Profile/ModifyProfileModal';
import DeleteMyProfileModal from '../Modal/Profile/DeleteMyProfileModal';
import NoticeModal from '../Modal/Profile/NoticeModal';
import { useGetMyTeamIdQuery } from '../../features/api/userApi';
import { ReactComponent as Info } from '../../asset/svg/Info.svg';

export default function EditProfile() {
  const navi = useNavigate();
  const [isModifyModalOpen, setIsModifyModalOpen] = useState(false);
  const [isStopMatchingModalOpen, setIsStopMatchingModalOpen] = useState(false);
  const [isNoticeModalOpen, setIsNoticeModalOpen] = useState(false);

  const { data: myTeamId } = useGetMyTeamIdQuery();

  return (
    <div>
      <ModifyProfileModal
        open={isModifyModalOpen}
        setModal={() => {
          setIsModifyModalOpen((prev) => !prev);
        }}
      />
      <DeleteMyProfileModal
        open={isStopMatchingModalOpen}
        setModal={() => {
          setIsStopMatchingModalOpen((prev) => !prev);
        }}
        teamId={myTeamId}
      />
      <NoticeModal
        open={isNoticeModalOpen}
        setModal={() => {
          setIsNoticeModalOpen((prev) => !prev);
        }}
      />
      {myTeamId ? (
        <TeamIntro>
          <EditBtn onClick={() => setIsModifyModalOpen(true)}>수정</EditBtn>
          <EditBtn onClick={() => setIsStopMatchingModalOpen(true)}>
            삭제
          </EditBtn>
          <SInfo onClick={() => setIsNoticeModalOpen(true)} />
        </TeamIntro>
      ) : (
        <TeamIntro>
          <EditBtn onClick={() => navi('/apply/1')}>만들러 가기</EditBtn>
        </TeamIntro>
      )}
    </div>
  );
}

const TeamIntro = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 5% 0;
`;

const EditBtn = styled.button`
  margin-left: 15px;
  padding: 4px 7px;
  border-radius: 5px;
  color: #777777;
  background-color: #e6e6e6;
  font-size: 12px;
`;

const SInfo = styled(Info)`
  margin-left: 10px;
  cursor: pointer;
`;
