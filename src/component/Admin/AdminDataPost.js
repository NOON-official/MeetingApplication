import React, { useState } from 'react';
import { Button, Box, TextField, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import client from '../../api';

const AdminDataPost = () => {
  // 매칭하기
  const [MaleTeamId, setMaleTeamId] = useState('');
  const [FemaleTeamId, setFemaleTeamId] = useState('');
  const [ChatLink, setChatLink] = useState('');

  // 매칭 완료된 팀 삭제하기
  const [DeleteMaleTeamId, setDeleteMaleTeamId] = useState('');
  const [DeleteFemaleTeamId, setDeleteFemaleTeamId] = useState('');

  // 매칭 실패한 팀 삭제하기
  const [DeleteTeamId, setDeleteTeamId] = useState('');

  // 서비스 신청 인원 관리
  const [MaleRestricted, setMaleRestricted] = useState('true');
  const [FemaleRestricted, setFemaleRestricted] = useState('true');
  const [MaleTeamNum, setMaleTeamNum] = useState('');
  const [FemaleTeamNum, setFemaleTeamNum] = useState('');

  // 매칭하기
  const handleMatchMaleTeamIdChange = (e) => {
    setMaleTeamId(e.target.value);
  };

  const handleMatchFemaleTeamIdChange = (e) => {
    setFemaleTeamId(e.target.value);
  };

  const handleChatLinkChange = (e) => {
    setChatLink(e.target.value);
  };

  const matchTeam = async () => {
    if (!MaleTeamId || !FemaleTeamId || !ChatLink) {
      return alert('모든 값을 입력해주세요');
    }

    await client
      .post('/api/admin/team/match', {
        maleTeamId: MaleTeamId,
        femaleTeamId: FemaleTeamId,
        chatLink: ChatLink,
      })
      .then(() => {
        alert('매칭 정보 저장에 성공하였습니다');
      })
      .catch((err) => {
        if (err.response.data.status == 400) {
          alert(err.response.data.message);
        }
        console.log(err);
        alert('매칭 정보 저장에 실패하였습니다');
      });
  };

  // 매칭 완료된 팀 삭제하기
  const handleDeleteMaleTeamIdChange = (e) => {
    setDeleteMaleTeamId(e.target.value);
  };

  const handleDeleteFemaleTeamIdChange = (e) => {
    setDeleteFemaleTeamId(e.target.value);
  };

  const deleteMatchedTeam = async () => {
    if (!DeleteMaleTeamId || !DeleteFemaleTeamId) {
      return alert('모든 값을 입력해주세요');
    }

    await client
      .post('/api/admin/close/matching', {
        maleTeamId: DeleteMaleTeamId,
        femaleTeamId: DeleteFemaleTeamId,
      })
      .then(() => {
        alert('매칭 성공한 팀 삭제에 성공하였습니다');
      })
      .catch((err) => {
        if (err.response.data.status == 400) {
          alert(err.response.data.message);
        }
        console.log(err);
        alert('매칭 성공한 팀 삭제에 실패하였습니다');
      });
  };

  // 매칭 실패한 팀 삭제하기
  const handleDeleteTeamIdChange = (e) => {
    setDeleteTeamId(e.target.value);
  };

  const deleteFailedTeam = async () => {
    if (!DeleteTeamId) {
      return alert('모든 값을 입력해주세요');
    }

    await client
      .post('/api/admin/close/team', {
        ourteamId: DeleteTeamId,
      })
      .then(() => {
        alert('매칭 실패한 팀 삭제에 성공하였습니다');
      })
      .catch((err) => {
        if (err.response.data.status == 400) {
          alert(err.response.data.message);
        }
        console.log(err);
        alert('매칭 실패한 팀 삭제에 실패하였습니다');
      });
  };

  // 서비스 신청 인원 관리
  const handleMaleRestrictedChange = (e) => {
    setMaleRestricted(e.target.value);
  };

  const handleFemaleRestrictedChange = (e) => {
    setFemaleRestricted(e.target.value);
  };

  const handleMaleTeamNumChange = (e) => {
    setMaleTeamNum(e.target.value);
  };

  const handleFemaleTeamNumChange = (e) => {
    setFemaleTeamNum(e.target.value);
  };

  const updateApplyStatus = async () => {
    if (
      !(MaleRestricted === 'true' || MaleRestricted === 'false') ||
      !(FemaleRestricted === 'true' || FemaleRestricted === 'false') ||
      !MaleTeamNum ||
      !FemaleTeamNum
    ) {
      return alert('모든 값을 입력해주세요');
    }

    await client
      .put('/api/admin/apply/status', {
        maleIsLimited: MaleRestricted === 'true' ? true : false,
        maleLimitNum: Number(MaleTeamNum),
        femaleIsLimited: FemaleRestricted === 'true' ? true : false,
        femaleLimitNum: Number(FemaleTeamNum),
      })
      .then(() => {
        alert('신청 인원 상태 변경에 성공하였습니다');
      })
      .catch((err) => {
        if (err.response.data.status == 400) {
          alert(err.response.data.message);
        }
        console.log(err);
        alert('신청 인원 상태 변경에 실패하였습니다');
      });
  };

  return (
    <div>
      {/* 팀 매칭하기 */}
      <div>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="match-male-team-id"
            label="남자팀 id"
            variant="outlined"
            size="small"
            onChange={handleMatchMaleTeamIdChange}
          />
          <TextField
            id="match-female-team-id"
            label="여자팀 id"
            variant="outlined"
            size="small"
            onChange={handleMatchFemaleTeamIdChange}
          />
          <TextField
            id="match-chat-link"
            label="오픈채팅 링크"
            variant="outlined"
            size="small"
            onChange={handleChatLinkChange}
          />
          <Button id="match-button" variant="contained" onClick={matchTeam}>
            매칭
          </Button>
        </Box>
      </div>
      {/* 매칭 성공한 팀 삭제하기 */}
      <div>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="delete-male-team-id"
            label="남자팀 id"
            variant="outlined"
            size="small"
            onChange={handleDeleteMaleTeamIdChange}
          />
          <TextField
            id="delete-female-team-id"
            label="여자팀 id"
            variant="outlined"
            size="small"
            onChange={handleDeleteFemaleTeamIdChange}
          />
          <Button id="delete-match-button" variant="contained" onClick={deleteMatchedTeam}>
            매칭 완료된 팀 삭제
          </Button>
        </Box>
      </div>
      {/* 매칭 실패한 팀 삭제하기 */}
      <div>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="delete-team-id"
            label="매칭 실패한 팀 id"
            variant="outlined"
            size="small"
            onChange={handleDeleteTeamIdChange}
          />
          <Button id="delete-team-button" variant="contained" onClick={deleteFailedTeam}>
            매칭 실패한 팀 삭제
          </Button>
        </Box>
      </div>
      {/* 서비스 신청 인원 관리 */}
      <div>
        <FormControl>
          <FormLabel id="male-team">남자팀 인원 제한하기</FormLabel>
          <RadioGroup row name="male-team-restricted" value={MaleRestricted} onChange={handleMaleRestrictedChange}>
            <FormControlLabel value="true" control={<Radio />} label="Yes" />
            <FormControlLabel value="false" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
        <div />
        <TextField
          id="male-team-num"
          label="남자팀 최대 인원수"
          variant="outlined"
          size="small"
          onChange={handleMaleTeamNumChange}
        />
        <div />
        <FormControl>
          <FormLabel id="female-team">여자팀 인원 제한하기</FormLabel>
          <RadioGroup
            row
            name="female-team-restricted"
            value={FemaleRestricted}
            onChange={handleFemaleRestrictedChange}
          >
            <FormControlLabel value="true" control={<Radio />} label="Yes" />
            <FormControlLabel value="false" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
        <div />
        <TextField
          id="female-team-num"
          label="여자팀 최대 인원수"
          variant="outlined"
          size="small"
          onChange={handleFemaleTeamNumChange}
        />
      </div>
      <Button id="save-button" variant="contained" onClick={updateApplyStatus}>
        저장
      </Button>
    </div>
  );
};

export default AdminDataPost;
