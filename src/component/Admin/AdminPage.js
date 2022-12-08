import styled from 'styled-components';
import { BoxContainer, Container, MobileBox, SliderBox, StyledDiv } from '../Elements/StyledComponent';
import React, { useState, useEffect, useMemo } from 'react';
import client from '../../api';
import Table from './Table';
import { Button, Box, TextField, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import Universities from '../Universities';
import * as Matching from './Matching.js';

const FullDiv = styled.div`
  width: 100%;
`;
//useCallback 특정 파리미터가 함수를 변환
const TableContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.justify_content || 'space-around'};
  top: ${(props) => props.top || '5%'};
  border:2px;
`;

function binarySearch(arr, target) {
  // TODO : 여기에 코드를 작성합니다.
  let start = 0;
  let end = arr.length - 1;
  let mid;
 
  
  while (start <= end) {
    //점점 좁혀지다가 start와 end의 순서가 어긋나게 되면 반복을 종료한다

    mid = parseInt((start + end) / 2);

    if (target === arr[mid]['key']) {
      return arr[mid]['univ'];
    } else {
      if (target < arr[mid]['key']) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }
  return -1;
}
function preferenceSchoolResult(a){
  if (a==2){
    return 'O'
  }
  else{
    return 'X'
  }
}
//학교레밸
const Level5 = [184,193,170,372,452,180,188,451,444,445,443,247];
const Level4 = [196,169,200,153,185,193,305,191,175,205,172,192,260,427,273,222,227,286,158,189,201,314,407,450,396,214,220,203];
const Level3 = [256,171,177,263,388,176,226,186,174,202,255,324,258,369,330,221,245,351,212,219,268,301,252,358,377,394,210,382,251,178,313,296,347,340];

//학교레밸 평균 구하는 함수
function schoolLevel(schoolList){
  let sum=0;
  var avg=0;
  //console.log(schoolList)
  for(var i=0; i<schoolList.length;i++)  
  {
  if (Level5.includes(schoolList[i]))
    {
        sum+=5;
    }

    else if(Level4.includes(schoolList[i]))
    {
        sum+= 4;
    }
    else if(Level3.includes(schoolList[i]))
    {
      sum+=3;
    }
    else
    {
        sum+= 2;
    }
  }  
  //console.log("총합:",sum)
  avg =sum/schoolList.length
  //console.log("평균:",avg)
  //console.log("학교 갯수:",schoolList.length)

  return avg
}
const AdminPage = () => {
  const [maleThreeTeam, setMaleThreeTeam] = useState([]);
  const [maleTwoTeam, setMaleTwoTeam] = useState([]);
  const [femaleTwoTeam, setFemaleTwoTeam] = useState([]);
  const [femaleThreeTeam, setFemaleThreeTeam] = useState([]);
  const [maleMatchingSuccess, setMaleMatching] = useState([]);
  const [femaleMatchingSuccess, setFemaleMatching] = useState([]);
  const [maleMatchingFail, setMaleMatchingFail] = useState([]);
  const [femaleMatchingFail, setFemaleMatchingFail] = useState([]);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const [FemaleMatchingWaiting, setFemaleMatchingWating] =useState([]);
  const [MaleMatchingWaiting, setMaleMatchingWating] =useState([]);
  const[MaleMatchingRefuse, setMaleMatchingRefuse] =useState([]);
  const[MaleMatchingRefused,setMaleMatchingRefused] =useState([]);
  const[FemaleMatchingRefuse, setFemaleMatchingRefuse] =useState([]);
  const[FemaleMatchingRefused,setFemaleMatchingRefused] =useState([]);
  const[FemaleMatchingAccepted, setFemaleMatchingAccpted] =useState([]);
  const[MaleMatchingAccepted,setMaleMatchingAccpted] =useState([]);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const [MaleIsLimitedStatus, setMaleIsLimitedStatus] = useState('');
  const [MaleLimitNumStatus, setMaleLimitNumStatus] = useState('');
  const [FemaleIsLimitedStatus, setFemaleIsLimitedStatus] = useState('');
  const [FemaleLimitNumStatus, setFemaleLimitNumStatus] = useState('');

///////// ---------버튼 연동을 위한 코드 시작----------

////매칭코드
  const [MaleTeamId, setMaleTeamId] = useState('');
  const [FemaleTeamId, setFemaleTeamId] = useState('');

//// 매칭 완료된 팀 삭제하기
  const [DeleteMaleTeamId, setDeleteMaleTeamId] = useState('');
  const [DeleteFemaleTeamId, setDeleteFemaleTeamId] = useState('');

//// 매칭 완료에서 매칭중으로 되돌리기
  const [RevertMaleTeamId, setRevertMaleTeamId] = useState('');
  const [RevertFemaleTeamId, setRevertFemaleTeamId] = useState('');

//// 매칭 실패 처리하기
  const [FailedTeamId, setFailedTeamId] = useState('');

//// 매칭 실패한 팀 삭제하기
  const [DeleteTeamId, setDeleteTeamId] = useState('');

//// 매칭 실패에서 매칭중으로 되돌리기
  const [RevertTeamId, setRevertTeamId] = useState('');

//// 서비스 신청 인원 관리
  const [MaleRestricted, setMaleRestricted] = useState('true');
  const [FemaleRestricted, setFemaleRestricted] = useState('true');
  const [MaleTeamNum, setMaleTeamNum] = useState('');
  const [FemaleTeamNum, setFemaleTeamNum] = useState('');

  // 매칭 실패 처리하기
  const handleFailedTeamIdChange = (e) => {
    setFailedTeamId(e.target.value);
  };

//매칭하기
const handleMatchMaleTeamIdChange = (e) => {
  setMaleTeamId(e.target.value);
};

const handleMatchFemaleTeamIdChange = (e) => {
  setFemaleTeamId(e.target.value);
};

const matchTeam = async () => {
    if (!MaleTeamId || !FemaleTeamId ) {
      return alert('모든 값을 입력해주세요');
    }

    await client
      .post('/api/admin/team/match', {
        maleTeamId: MaleTeamId,
        femaleTeamId: FemaleTeamId
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


//매칭실패
  const failTeam = async () => {
    if (!FailedTeamId) {
      return alert('모든 값을 입력해주세요');
    }

    await client
      .post('/api/admin/team/fail', {
        ourteamId: FailedTeamId,
      })
      .then(() => {
        alert('팀 매칭 실패 처리에 성공하였습니다');
      })
      .catch((err) => {
        if (err.response.data.status == 400) {
          alert(err.response.data.message);
        }
        console.log(err);
        alert('팀 매칭 실패 처리에 실패하였습니다');
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

  // 매칭완료에서 매칭중으로 되돌리기
  const handleRevertMaleTeamIdChange = (e) => {
    setRevertMaleTeamId(e.target.value);
  };

  const handleRevertFemaleTeamIdChange = (e) => {
    setRevertFemaleTeamId(e.target.value);
  };

  const revertMatchedTeam = async () => {
    if (!RevertMaleTeamId || !RevertFemaleTeamId) {
      return alert('모든 값을 입력해주세요');
    }

    await client
      .put('/api/admin/team/match', {
        maleTeamId: RevertMaleTeamId,
        femaleTeamId: RevertFemaleTeamId,
      })
      .then(() => {
        alert('매칭중으로 되돌리기에 성공하였습니다');
      })
      .catch((err) => {
        if (err.response.data.status == 400) {
          alert(err.response.data.message);
        }
        console.log(err);
        alert('매칭중으로 되돌리기에 실패하였습니다');
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

  // 매칭실패에서 매칭중으로 되돌리기
  const handleRevertTeamIdChange = (e) => {
    setRevertTeamId(e.target.value);
  };

  const revertFailedTeam = async () => {
    if (!RevertTeamId) {
      return alert('모든 값을 입력해주세요');
    }

    await client
      .put('/api/admin/team/fail', {
        ourteamId: RevertTeamId,
      })
      .then(() => {
        alert('매칭중으로 되돌리기에 성공하였습니다');
      })
      .catch((err) => {
        if (err.response.data.status == 400) {
          alert(err.response.data.message);
        }
        console.log(err);
        alert('매칭중으로 되돌리기에 실패하였습니다');
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

  const updateAcceptanceStatus = async () =>{


    await client.post('/api/admin/update/team/state').then(() => {
      alert('신청 인원 수락 거절 상태 변경에 성공하였습니다');
    }).catch((err) => {
      if (err.response.data.status == 400) {
        alert(err.response.data.message);
      }
      console.log(err);
      alert('실패');
    });
  };

  // ---------버튼 연동을 위한 코드 끝----------
  const columns1 = useMemo(
    () => [
      {
        accessor: 'time',
        Header: '신청시간',
      },
       {
        accessor: 'phone',
        Header: '폰번호',
      },
      {
        accessor: 'id',
        Header: 'TeamID',
      },
      {
        accessor: 'name',
        Header: '이름',
      },
      {
        accessor: 'num',
        Header: '인원',
      },
      {
        accessor: 'age',
        Header: '나이',
      },
      {
        accessor: 'preferenceAge',
        Header: '선호나이',
      },
      {
        accessor: 'day',
        Header: '선호요일',
      },
      {
        accessor: 'area',
        Header: '지역',
      },
      {
        accessor: 'university',
        Header: '학교',
      },
      {
        accessor: 'sameUniversity',
        Header: '같은학교 선호',
      },
      {
        accessor:"level",
        Header:"학교레벨"
      },
      {
        accessor: 'job',
        Header: '직업',
      },
      {
        accessor: 'drink',
        Header: '주량',
      },
      {
        accessor: 'prefrenceVibe',
        Header: '미팅 분위기',
      },
      {
        accessor: 'intro',
        Header: '자기소개',
      } 
      
    ],
    [],
  );

  const columns2 = useMemo(
    () => [
      {
        accessor: 'id',
        Header: 'TeamID',
      },
      {
        accessor: 'otherTeamID',
        Header: '상대 TeamID',
      },
      {
        accessor: 'name',
        Header: '이름',
      },
      {
        accessor: 'phone',
        Header: '폰번호',
      },
      {
        accessor: 'time',
        Header: '매칭완료 시간',
      },
    ],
    [],
  );

  const columns3 = useMemo(
    () => [
      {
        accessor: 'id',
        Header: 'TeamID',
      },
      {
        accessor: 'name',
        Header: '이름',
      },
      {
        accessor: 'phone',
        Header: '폰번호',
      },
      {
        accessor: 'time',
        Header: '매칭실패 시간',
      },
    ],
    [],
  );

  const columns4 = useMemo(
    () => [
      {
        accessor: 'MaleIsLimitedStatus',
        Header: '남자 인원제한',
      },
      {
        accessor: 'MaleLimitNumStatus',
        Header: '제한 인원',
      },
      {
        accessor: 'FemaleIsLimitedStatus',
        Header: '여자 인원제한',
      },
      {
        accessor: 'FemaleLimitNumStatus',
        Header: '제한 인원',
      },
    ],
    [],
  );


  let data1  = []; //남성유저3  데이터
  let data2  = []; //여성유저 3 데이터
  let data3  = []; //남성3
  let data4  = []; //여성3
  let data5  = []; //남성 매칭완료
  let data6  = []; //여성 매칭완료
  let data7  = []; //남성 매칭실패
  let data8  = []; //여성매칭실패
  let data9  = []; // 현재 서비스 매칭 신청 가능 상태
  let data10 = []; //여자 수락대기
  let data11 = []; // 남자수락대기
  let data12 = []; //여자 refuse
  let data13 = []; //남자 refuse
  let data14 = []; //여자 refused.. sad..
  let data15 = []; //남자 refused.. sad..
  let data16 = []; //남자 둘다 수락
  let data17 = []; //여자둘다 수락
  let male2 = 0; //남자 2대2
  let male3 = 0; //남자 3대3
  let female2 = 0; //여자 2대2
  let female3 = 0; //여자 3대3

  //데이터 받기
  useEffect(() => {
    //남자 3
    client
      .get('api/admin/team/male/3')
      .then(async (res) => {
        setMaleThreeTeam(res.data.data.maleTeam);
      })
      .catch((err) => {});

    //남자 2
    client
      .get('api/admin/team/male/2')
      .then(async (res) => {
        setMaleTwoTeam(res.data.data.maleTeam);
      })
      .catch((err) => {});

    //여자3
    client
      .get('api/admin/team/female/3')
      .then(async (res) => {
        setFemaleThreeTeam(res.data.data.femaleTeam);
      })
      .catch((err) => {});

    //남자 2
    client
      .get('api/admin/team/female/2')
      .then(async (res) => {
        setFemaleTwoTeam(res.data.data.femaleTeam);
      })
      .catch((err) => {});

    //남자 성공

    client
      .get('api/admin/team/matching/success/male')
      .then(async (res) => {
        // console.log(res.data);
        setMaleMatching(res.data.data.maleTeam);
      })
      .catch((err) => {});

    //여자성공
    client
      .get('api/admin/team/matching/success/female')
      .then(async (res) => {
        setFemaleMatching(res.data.data.femaleTeam);
      })
      .catch((err) => {});

    //남자 실패
    client
      .get('api/admin/team/matching/fail/male')
      .then(async (res) => {
        setMaleMatchingFail(res.data.data.maleTeam);
      })
      .catch((err) => {});

    //여자실패
    client
      .get('api/admin/team/matching/fail/female')
      .then(async (res) => {
        setFemaleMatchingFail(res.data.data.femaleTeam);
      })
      .catch((err) => {});

      //여자 수락대기
      client
      .get('api/admin/team/matching/pending/female')
      .then(async (res) => {
        setFemaleMatchingWating(res.data.data.femaleTeam);
      })
      .catch((err) => {});
      //남자 수락대기
      client
      .get('api/admin/team/matching/pending/male')
      .then(async (res) => {
        setMaleMatchingWating(res.data.data.maleTeam);
      })
      .catch((err) => {});

       //여자 거절한
       client
       .get('api/admin/team/matching/refuse/female')
       .then(async (res) => {
         setFemaleMatchingRefuse(res.data.data.femaleTeam);
       })
       .catch((err) => {});
       //남자 거절한 
       client
       .get('api/admin/team/matching/refuse/male')
       .then(async (res) => {
         setMaleMatchingRefuse(res.data.data.maleTeam);
       })
       .catch((err) => {});

        //여자 거절당한
    client
    .get('api/admin/team/matching/refused/female')
    .then(async (res) => {
          setFemaleMatchingRefused(res.data.data.femaleTeam);
    })
    .catch((err) => {});
        //남자 거절당한 
    client
    .get('api/admin/team/matching/refused/male')
    .then(async (res) => {
          setMaleMatchingRefused(res.data.data.maleTeam);
    })
    .catch((err) => {});

    //남자 둘다 수락한 
    client
    .get('api/admin/team/matching/both-accepted/male')
    .then(async (res) => {
          setFemaleMatchingAccpted(res.data.data.femaleTeam);
    })
    .catch((err) => {});
        //여자 둘다 수락 
    client
    .get('api/admin/team/matching/both-accepted/female')
    .then(async (res) => {
          setMaleMatchingAccpted(res.data.data.maleTeam);
    })
    .catch((err) => {});

 

    // 서비스 매칭 신청 가능 상태 조회
    client
      .get('api/admin/apply/status')
      .then(async (res) => {
        setMaleIsLimitedStatus(res.data.data.applyStatus.maleIsLimited);
        setMaleLimitNumStatus(res.data.data.applyStatus.maleLimitNum);
        setFemaleIsLimitedStatus(res.data.data.applyStatus.femaleIsLimited);
        setFemaleLimitNumStatus(res.data.data.applyStatus.femaleLimitNum);
      })
      .catch((err) => {});
  }, []);

  // 서비스 매칭 신청 가능 상태
  data9[0] = {
    MaleIsLimitedStatus: MaleIsLimitedStatus === 1 ? 'YES' : 'NO',
    MaleLimitNumStatus: MaleLimitNumStatus,
    FemaleIsLimitedStatus: FemaleIsLimitedStatus === 1 ? 'YES' : 'NO',
    FemaleLimitNumStatus: FemaleLimitNumStatus,
  };

  // console.log('1', maleThreeTeam);
  //남자 데이터 받기
  if (maleThreeTeam) {
    for (let i = 0; i < maleThreeTeam.length; i++) {
      data1[i] = {
        id: maleThreeTeam[i]['ourteamId'],
        name: maleThreeTeam[i]['nickname'],
        num: maleThreeTeam[i]['num'],
        age: maleThreeTeam[i]['age'],
        drink: maleThreeTeam[i]['drink'],
        job: maleThreeTeam[i]['job'].sort(),
        university: maleThreeTeam[i]['university'],
        area: maleThreeTeam[i]['area'].sort(),
        day: maleThreeTeam[i]['day'].sort(),
        preferenceAge: maleThreeTeam[i]['preferenceAge'],
        preferenceHeight: maleThreeTeam[i]['preferenceHeight'],
        sameUniversity: preferenceSchoolResult(maleThreeTeam[i]['sameUniversity']),
        level:schoolLevel( maleThreeTeam[i]['university']),
        preferenceVibe: maleThreeTeam[i]['preferenceVibe'].sort(),
        time: maleThreeTeam[i]['updatedAt'],
        intro: maleThreeTeam[i]['intro'],
        preferenceJob: maleThreeTeam[i]['preferenceJob'],
        phone: maleThreeTeam[i]['phone']
      };
      male3 += 1;
    }
  }
  //console.log(maleThreeTeam)
  //안비어있으면 ㄱㄱ
  if (maleTwoTeam) {
    for (let i = 0; i < maleTwoTeam.length; i++) {
      data3[i] = {
        id: maleTwoTeam[i]['ourteamId'],
        name: maleTwoTeam[i]['nickname'],
        num: maleTwoTeam[i]['num'],
        age: maleTwoTeam[i]['age'],
        drink: maleTwoTeam[i]['drink'],
        job: maleTwoTeam[i]['job'].sort(),
        university: maleTwoTeam[i]['university'],
        area: maleTwoTeam[i]['area'].sort(),
        day: maleTwoTeam[i]['day'].sort(),
        preferenceAge: maleTwoTeam[i]['preferenceAge'],
        preferenceHeight: maleTwoTeam[i]['preferenceHeight'],
        sameUniversity: preferenceSchoolResult(maleTwoTeam[i]['sameUniversity']),
        preferenceVibe: maleTwoTeam[i]['preferenceVibe'].sort(),
        time: maleTwoTeam[i]['updatedAt'],
        intro: maleTwoTeam[i]['intro'],
        level: schoolLevel( maleTwoTeam[i]['university']),
        preferenceJob: maleTwoTeam[i]['preferenceJob'],
        phone: maleTwoTeam[i]['phone']

      };
      male2 += 1;
     //console.log(data3[i])
    }
  }
  if (femaleThreeTeam) 
  {
    for (let i = 0; i < femaleThreeTeam.length; i++) {
      data2[i] = {
        id: femaleThreeTeam[i]['ourteamId'],
        name: femaleThreeTeam[i]['nickname'],
        num: femaleThreeTeam[i]['num'],
        age: femaleThreeTeam[i]['age'],
        drink: femaleThreeTeam[i]['drink'],
        job: femaleThreeTeam[i]['job'].sort(),
        university: femaleThreeTeam[i]['university'],
        area: femaleThreeTeam[i]['area'].sort(),
        day: femaleThreeTeam[i]['day'].sort(),
        preferenceAge: femaleThreeTeam[i]['preferenceAge'],
        preferenceHeight: femaleThreeTeam[i]['preferenceHeight'],
        sameUniversity: preferenceSchoolResult(femaleThreeTeam[i]['sameUniversity']),
        preferenceVibe: femaleThreeTeam[i]['preferenceVibe'].sort(),
        time: femaleThreeTeam[i]['updatedAt'],
        intro: femaleThreeTeam[i]['intro'],
        level :schoolLevel( femaleThreeTeam[i]['university']),
        preferenceJob: femaleThreeTeam[i]['preferenceJob'],
        phone: femaleThreeTeam[i]['phone']
      };
      female3 += 1;
    }
  }
  if (femaleTwoTeam) 
  {
    for (let i = 0; i < femaleTwoTeam.length; i++) {
      data4[i] = {
        id: femaleTwoTeam[i]['ourteamId'],
        name: femaleTwoTeam[i]['nickname'],
        num: femaleTwoTeam[i]['num'],
        age: femaleTwoTeam[i]['age'],
        drink: femaleTwoTeam[i]['drink'],
        job: femaleTwoTeam[i]['job'].sort(),
        university: femaleTwoTeam[i]['university'],
        area: femaleTwoTeam[i]['area'].sort(),
        day: femaleTwoTeam[i]['day'].sort(),
        preferenceAge: femaleTwoTeam[i]['preferenceAge'],
        preferenceHeight: femaleTwoTeam[i]['preferenceHeight'],
        sameUniversity: preferenceSchoolResult(femaleTwoTeam[i]['sameUniversity']),
        preferenceVibe: femaleTwoTeam[i]['preferenceVibe'].sort(),
        time: femaleTwoTeam[i]['updatedAt'],
        intro: femaleTwoTeam[i]['intro'],
        level: schoolLevel( femaleTwoTeam[i]['university']),
        preferenceJob: femaleTwoTeam[i]['preferenceJob'],
        phone: femaleTwoTeam[i]['phone']
      };
      female2 += 1;
      //console.log(data4[i])
    }
  }

  // console.log(maleMatchingSuccess);
  if (maleMatchingSuccess) 
  {
    for (let i = 0; i < maleMatchingSuccess.length; i++) {
      data5[i] = {
        id: maleMatchingSuccess[i]['ourteamId'],
        name: maleMatchingSuccess[i]['nickname'],
        otherTeamID: maleMatchingSuccess[i]['partnerTeamId'],
        phone: maleMatchingSuccess[i]['phone'],
        time: maleMatchingSuccess[i]['updatedAt'],
      };
    }
  }

  // console.log(femaleMatchingSuccess);
  if (femaleMatchingSuccess) 
  {
    for (let i = 0; i < femaleMatchingSuccess.length; i++) {
      data6[i] = {
        id: femaleMatchingSuccess[i]['ourteamId'],
        name: femaleMatchingSuccess[i]['nickname'],
        otherTeamID: femaleMatchingSuccess[i]['partnerTeamId'],
        phone: femaleMatchingSuccess[i]['phone'],
        time: femaleMatchingSuccess[i]['updatedAt'],
      };
    }
  }

  // console.log(maleMatchingFail);
  if (maleMatchingFail) 
  {
    for (let i = 0; i < maleMatchingFail.length; i++) {
      data7[i] = {
        id: maleMatchingFail[i]['ourteamId'],
        name: maleMatchingFail[i]['nickname'],
        phone: maleMatchingFail[i]['phone'],
        time: maleMatchingFail[i]['updatedAt'],
      };
    }
  }

  // console.log(femaleMatchingFail);
  if (femaleMatchingFail) 
  {
    for (let i = 0; i < femaleMatchingFail.length; i++) {
      data8[i] = {
        id: femaleMatchingFail[i]['ourteamId'],
        name: femaleMatchingFail[i]['nickname'],
        phone: femaleMatchingFail[i]['phone'],
        time: femaleMatchingFail[i]['updatedAt'],
      };
    }
  }


if(FemaleMatchingWaiting)
{
  for (let i = 0; i < FemaleMatchingWaiting.length; i++) {
    data10[i] = {
      id: FemaleMatchingWaiting[i]['ourteamId'],
      otherTeamID:FemaleMatchingWaiting[i]['partnerTeamId'],
      name: FemaleMatchingWaiting[i]['nickname'],
      num: FemaleMatchingWaiting[i]['num'],
      age: FemaleMatchingWaiting[i]['age'],
      drink: FemaleMatchingWaiting[i]['drink'],
      job: FemaleMatchingWaiting[i]['job'].sort(),
      university: FemaleMatchingWaiting[i]['university'],
      area: FemaleMatchingWaiting[i]['area'].sort(),
      day: FemaleMatchingWaiting[i]['day'].sort(),
      preferenceAge: FemaleMatchingWaiting[i]['preferenceAge'],
      preferenceHeight: FemaleMatchingWaiting[i]['preferenceHeight'],
      sameUniversity: preferenceSchoolResult(FemaleMatchingWaiting[i]['sameUniversity']),
      level:schoolLevel( FemaleMatchingWaiting[i]['university']),
      preferenceVibe: FemaleMatchingWaiting[i]['preferenceVibe'].sort(),
      time: FemaleMatchingWaiting[i]['updatedAt'],
      intro:FemaleMatchingWaiting[i]['intro'],
      preferenceJob: FemaleMatchingWaiting[i]['preferenceJob'],
      phone: FemaleMatchingWaiting[i]['phone']
    };
  }
}

if(MaleMatchingWaiting)
{
  for (let i = 0; i < MaleMatchingWaiting.length; i++) {
    data11[i] = {
      id: MaleMatchingWaiting[i]['ourteamId'],
      otherTeamID:MaleMatchingWaiting[i]['partnerTeamId'],
      name: MaleMatchingWaiting[i]['nickname'],
      num: MaleMatchingWaiting[i]['num'],
      age: MaleMatchingWaiting[i]['age'],
      drink: MaleMatchingWaiting[i]['drink'],
      job: MaleMatchingWaiting[i]['job'].sort(),
      university: MaleMatchingWaiting[i]['university'],
      area: MaleMatchingWaiting[i]['area'].sort(),
      day: MaleMatchingWaiting[i]['day'].sort(),
      preferenceAge: MaleMatchingWaiting[i]['preferenceAge'],
      preferenceHeight: MaleMatchingWaiting[i]['preferenceHeight'],
      sameUniversity: preferenceSchoolResult(MaleMatchingWaiting[i]['sameUniversity']),
      level:schoolLevel( MaleMatchingWaiting[i]['university']),
      preferenceVibe: MaleMatchingWaiting[i]['preferenceVibe'].sort(),
      time: MaleMatchingWaiting[i]['updatedAt'],
      intro:MaleMatchingWaiting[i]['intro'],
      preferenceJob: MaleMatchingWaiting[i]['preferenceJob'],
      phone: MaleMatchingWaiting[i]['phone']
    };
  }
}

if(MaleMatchingRefuse)
{
  for (let i = 0; i < MaleMatchingRefuse.length; i++) {
    data12[i] = {
      id: MaleMatchingRefuse[i]['ourteamId'],
      name: MaleMatchingRefuse[i]['nickname'],
      num:MaleMatchingRefuse[i]['num'],
      age: MaleMatchingRefuse[i]['age'],
      drink: MaleMatchingRefuse[i]['drink'],
      job: MaleMatchingRefuse[i]['job'].sort(),
      university: MaleMatchingRefuse[i]['university'],
      area: MaleMatchingRefuse[i]['area'].sort(),
      day: MaleMatchingRefuse[i]['day'].sort(),
      preferenceAge: MaleMatchingRefuse[i]['preferenceAge'],
      preferenceHeight:MaleMatchingRefuse[i]['preferenceHeight'],
      sameUniversity: preferenceSchoolResult(MaleMatchingRefuse[i]['sameUniversity']),
      level:schoolLevel( MaleMatchingRefuse[i]['university']),
      preferenceVibe: MaleMatchingRefuse[i]['preferenceVibe'].sort(),
      time: MaleMatchingRefuse[i]['updatedAt'],
      intro:MaleMatchingRefuse[i]['intro'],
      preferenceJob: MaleMatchingRefuse[i]['preferenceJob'],
      phone: MaleMatchingRefuse[i]['phone']
    };
  }
}

if(MaleMatchingRefused)
{
  for (let i = 0; i < MaleMatchingRefused.length; i++) {
    data13[i] = {
      id: MaleMatchingRefused[i]['ourteamId'],
      name: MaleMatchingRefused[i]['nickname'],
      num:MaleMatchingRefused[i]['num'],
      age: MaleMatchingRefused[i]['age'],
      drink: MaleMatchingRefused[i]['drink'],
      job: MaleMatchingRefused[i]['job'].sort(),
      university: MaleMatchingRefused[i]['university'],
      area: MaleMatchingRefused[i]['area'].sort(),
      day: MaleMatchingRefused[i]['day'].sort(),
      preferenceAge: MaleMatchingRefused[i]['preferenceAge'],
      preferenceHeight:MaleMatchingRefused[i]['preferenceHeight'],
      sameUniversity: preferenceSchoolResult(MaleMatchingRefused[i]['sameUniversity']),
      level:schoolLevel( MaleMatchingRefused[i]['university']),
      preferenceVibe: MaleMatchingRefused[i]['preferenceVibe'].sort(),
      time: MaleMatchingRefused[i]['updatedAt'],
      intro:MaleMatchingRefused[i]['intro'],
      preferenceJob: MaleMatchingRefused[i]['preferenceJob'],
      phone: MaleMatchingRefused[i]['phone']
    };
  }
}

if(FemaleMatchingRefuse)
{
  for (let i = 0; i < FemaleMatchingRefuse.length; i++) {
    data14[i] = {
      id: FemaleMatchingRefuse[i]['ourteamId'],
      name: FemaleMatchingRefuse[i]['nickname'],
      num:FemaleMatchingRefuse[i]['num'],
      age: FemaleMatchingRefuse[i]['age'],
      drink: FemaleMatchingRefuse[i]['drink'],
      job: FemaleMatchingRefuse[i]['job'].sort(),
      university: FemaleMatchingRefuse[i]['university'],
      area: FemaleMatchingRefuse[i]['area'].sort(),
      day: FemaleMatchingRefuse[i]['day'].sort(),
      preferenceAge: FemaleMatchingRefuse[i]['preferenceAge'],
      preferenceHeight:FemaleMatchingRefuse[i]['preferenceHeight'],
      sameUniversity: preferenceSchoolResult(FemaleMatchingRefuse[i]['sameUniversity']),
      level:schoolLevel( FemaleMatchingRefuse[i]['university']),
      preferenceVibe: FemaleMatchingRefuse[i]['preferenceVibe'].sort(),
      time: FemaleMatchingRefuse[i]['updatedAt'],
      intro:FemaleMatchingRefuse[i]['intro'],
      preferenceJob: FemaleMatchingRefuse[i]['preferenceJob'],
      phone: FemaleMatchingRefuse[i]['phone']
    };
  }
}

if(FemaleMatchingRefused)
{
  for (let i = 0; i < FemaleMatchingRefused.length; i++) {
    data15[i] = {
      id: FemaleMatchingRefused[i]['ourteamId'],
      name: FemaleMatchingRefused[i]['nickname'],
      num:FemaleMatchingRefused[i]['num'],
      age: FemaleMatchingRefused[i]['age'],
      drink: FemaleMatchingRefused[i]['drink'],
      job: FemaleMatchingRefused[i]['job'].sort(),
      university: FemaleMatchingRefused[i]['university'],
      area: FemaleMatchingRefused[i]['area'].sort(),
      day: FemaleMatchingRefused[i]['day'].sort(),
      preferenceAge: FemaleMatchingRefused[i]['preferenceAge'],
      preferenceHeight:FemaleMatchingRefused[i]['preferenceHeight'],
      sameUniversity: preferenceSchoolResult(FemaleMatchingRefused[i]['sameUniversity']),
      level:schoolLevel( FemaleMatchingRefused[i]['university']),
      preferenceVibe: FemaleMatchingRefused[i]['preferenceVibe'].sort(),
      time: FemaleMatchingRefused[i]['updatedAt'],
      intro:FemaleMatchingRefused[i]['intro'],
      preferenceJob: FemaleMatchingRefused[i]['preferenceJob'],
      phone: FemaleMatchingRefused[i]['phone']
    };
  }
}

if(FemaleMatchingRefused)
{
  for (let i = 0; i < FemaleMatchingRefused.length; i++) {
    data15[i] = {
      id: FemaleMatchingRefused[i]['ourteamId'],
      name: FemaleMatchingRefused[i]['nickname'],
      num:FemaleMatchingRefused[i]['num'],
      age: FemaleMatchingRefused[i]['age'],
      drink: FemaleMatchingRefused[i]['drink'],
      job: FemaleMatchingRefused[i]['job'].sort(),
      university: FemaleMatchingRefused[i]['university'],
      area: FemaleMatchingRefused[i]['area'].sort(),
      day: FemaleMatchingRefused[i]['day'].sort(),
      preferenceAge: FemaleMatchingRefused[i]['preferenceAge'],
      preferenceHeight:FemaleMatchingRefused[i]['preferenceHeight'],
      sameUniversity: preferenceSchoolResult(FemaleMatchingRefused[i]['sameUniversity']),
      level:schoolLevel( FemaleMatchingRefused[i]['university']),
      preferenceVibe: FemaleMatchingRefused[i]['preferenceVibe'].sort(),
      time: FemaleMatchingRefused[i]['updatedAt'],
      intro:FemaleMatchingRefused[i]['intro'],
      preferenceJob: FemaleMatchingRefused[i]['preferenceJob'],
      phone: FemaleMatchingRefused[i]['phone']
    };
  }
}

if(FemaleMatchingAccepted)
{
  for (let i = 0; i < FemaleMatchingAccepted.length; i++) {
  data17[i] = {
    id: FemaleMatchingAccepted[i]['ourteamId'],
    otherTeamID:FemaleMatchingAccepted[i]['partnerTeamId'],
    name: FemaleMatchingAccepted[i]['nickname'],
    num:FemaleMatchingAccepted[i]['num'],
    age: FemaleMatchingAccepted[i]['age'],
    drink: FemaleMatchingAccepted[i]['drink'],
    job: FemaleMatchingAccepted[i]['job'].sort(),
    university: FemaleMatchingAccepted[i]['university'],
    area:FemaleMatchingAccepted[i]['area'].sort(),
    day: FemaleMatchingAccepted[i]['day'].sort(),
    preferenceAge: FemaleMatchingAccepted[i]['preferenceAge'],
    preferenceHeight:FemaleMatchingAccepted[i]['preferenceHeight'],
    sameUniversity: preferenceSchoolResult(FemaleMatchingAccepted[i]['sameUniversity']),
    level:schoolLevel( FemaleMatchingAccepted[i]['university']),
    preferenceVibe: FemaleMatchingAccepted[i]['preferenceVibe'].sort(),
    time: FemaleMatchingAccepted[i]['updatedAt'],
    intro:FemaleMatchingAccepted[i]['intro'],
    preferenceJob: FemaleMatchingAccepted[i]['preferenceJob'],
    phone: FemaleMatchingAccepted[i]['phone']
      }
  }
}
if(MaleMatchingAccepted)
{
  for (let i = 0; i < MaleMatchingAccepted.length; i++) {
  data16[i] = {
    id: MaleMatchingAccepted[i]['ourteamId'],
    otherTeamID:FemaleMatchingAccepted[i]['partnerTeamId'],
    name: MaleMatchingAccepted[i]['nickname'],
    num:MaleMatchingAccepted[i]['num'],
    age: MaleMatchingAccepted[i]['age'],
    drink: MaleMatchingAccepted[i]['drink'],
    job: MaleMatchingAccepted[i]['job'].sort(),
    university: MaleMatchingAccepted[i]['university'],
    area:MaleMatchingAccepted[i]['area'].sort(),
    day: MaleMatchingAccepted[i]['day'].sort(),
    preferenceAge: MaleMatchingAccepted[i]['preferenceAge'],
    preferenceHeight:MaleMatchingAccepted[i]['preferenceHeight'],
    sameUniversity: preferenceSchoolResult(MaleMatchingAccepted[i]['sameUniversity']),
    level:schoolLevel( MaleMatchingAccepted[i]['university']),
    preferenceVibe: MaleMatchingAccepted[i]['preferenceVibe'].sort(),
    time: MaleMatchingAccepted[i]['updatedAt'],
    intro:MaleMatchingAccepted[i]['intro'],
    preferenceJob: MaleMatchingAccepted[i]['preferenceJob'],
    phone: MaleMatchingAccepted[i]['phone']
    }
  }

}




  return (
    <div>
      <div
        style={{
          marginBottom: '30px',
        }}
      >
        {' '}
        <h1>관리자페이지</h1>
      </div>
      <TableContainer style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: '70px', width: '30%' }}>
        <table style={{ width: '100%', alignContent: 'center', border: '1px solid' }}>
          <tr>
            <th></th>
            <th style={{ textAlign: 'center', fontSize: '1em', border: '1px solid' }}>
              <b>남자</b>
            </th>
            <th style={{ textAlign: 'center', fontSize: '1em', border: '1px solid' }}>
              <b>여자</b>
            </th>
            <th style={{ textAlign: 'center', fontSize: '1em', border: '1px solid' }}>
              <b>전체</b>
            </th>
          </tr>
          <tr>
            <td style={{ textAlign: 'center', fontSize: '1em', border: '1px solid' }}>3:3</td>
            <td style={{ textAlign: 'center', fontSize: '1em', border: '1px solid' }}>{male3}</td>
            <td style={{ textAlign: 'center', fontSize: '1em', border: '1px solid' }}>{female3}</td>
            <td style={{ textAlign: 'center', fontSize: '1em', border: '1px solid' }}>{male3 + female3}</td>
          </tr>

          <tr>
            <td style={{ textAlign: 'center', fontSize: '1em', border: '1px solid' }}>2:2</td>
            <td style={{ textAlign: 'center', fontSize: '1em', border: '1px solid' }}>{male2}</td>
            <td style={{ textAlign: 'center', fontSize: '1em', border: '1px solid' }}>{female2}</td>
            <td style={{ textAlign: 'center', fontSize: '1em', border: '1px solid' }}>{male2 + female2}</td>
          </tr>
        </table>
      </TableContainer>
      <TableContainer>
        <div style={{ width: '50%' }}>
          <h2>2:2 남자 매칭중</h2>
          <BoxContainer style={{ minHeight: '350px' }}>
            <Table columns={columns1} data={data3}></Table>
          </BoxContainer>
        </div>
        <div style={{ width: '50%' }}>
          <h2>2:2 여자 매칭중</h2>
          <BoxContainer style={{ minHeight: '350px' }}>
            <Table columns={columns1} data={data4}></Table>
          </BoxContainer>
        </div>
      </TableContainer>
      <TableContainer>
        <div style={{ width: '50%' }}>
          <h2>3:3 남자 매칭중</h2>
          <BoxContainer style={{ minHeight: '350px' }}>
            <Table columns={columns1} data={data1}></Table>
          </BoxContainer>
        </div>
        <div style={{ width: '50%' }}>
          <h2>3:3 여자 매칭중</h2>
          <BoxContainer style={{ minHeight: '350px' }}>
            <Table columns={columns1} data={data2}></Table>
          </BoxContainer>
        </div>
      </TableContainer>
       {/* 매칭대기 리스트  */}
      <div>
     {/* 매칭알고리즘 돌리기 버튼 */}
  {/*
    <Button
          id="save-button"
          variant="contained"
          style={{ marginTop: '1rem', marginBottom: '3rem', width: '31rem' }}
          onClick={() => Matching.Matching(data3,data4)}
        >
        2:2알고리즘 돌리기 
        </Button>
        
        <Button
          id="save-button"
          variant="contained"
          style={{ marginTop: '1rem', marginBottom: '3rem', width: '31rem' }}
          onClick={() => Matching.Matching(data1,data2)}
        >
        3:3알고리즘 돌리기 
        </Button>

      */}

<BoxContainer>
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
        
            <Button id="match-button" variant="contained" onClick={matchTeam}>
              매칭하기
            </Button>
          </Box>
        </div>
        {/* 매칭 실패 처리하기 버튼 */}
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
              id="fail-team-id"
              label="매칭 실패 처리할 팀 id"
              variant="outlined"
              size="small"
              onChange={handleFailedTeamIdChange}
            />
            <Button id="fail-team-button" variant="contained" onClick={failTeam}>
              매칭 실패 처리하기
            </Button>
          </Box>
        </div>
      </BoxContainer>
        {/* 매칭 실패 처리하기 버튼 */}

    </div>






      <TableContainer>
        <div style={{ width: '50%' }}>
          <h2>남자 매칭완료</h2>
          <BoxContainer style={{ minHeight: '350px' }}>
            <Table columns={columns2} data={data5}></Table>
          </BoxContainer>
        </div>
        <div style={{ width: '50%' }}>
          <h2>여자 매칭완료</h2>
          <BoxContainer style={{ minHeight: '350px' }}>
            <Table columns={columns2} data={data6}></Table>
          </BoxContainer>
        </div>
      </TableContainer>
      {/* 매칭 성공한 팀 삭제하기 버튼 */}

      <TableContainer>
        <div style={{ width: '50%' }}>
          <h2>남자 매칭 수락대기</h2>
          <BoxContainer style={{ minHeight: '350px' }}>
            <Table columns={columns2} data={data11}></Table>
          </BoxContainer>
        </div>
        <div style={{ width: '50%' }}>
          <h2>여자 매칭 수락대기</h2>
          <BoxContainer style={{ minHeight: '350px' }}>
            <Table columns={columns2} data={data10}></Table>
          </BoxContainer>
        </div>
      </TableContainer>



{/*페이지 나누는 경계 *********************************************************************************/}



      <TableContainer>
        <div style={{ width: '50%' }}>
          <h2>남자 매칭실패</h2>
          <BoxContainer style={{ minHeight: '350px' }}>
            <Table columns={columns3} data={data7}></Table>
          </BoxContainer>
        </div>
        <div style={{ width: '50%' }}>
          <h2>여자 매칭실패</h2>
          <BoxContainer style={{ minHeight: '350px' }}>
            <Table columns={columns3} data={data8}></Table>
          </BoxContainer>
        </div>
      </TableContainer>


{/* 페이지 나누는 경계 *********************************************************************************/}

{/*페이지 나누는 경계 *********************************************************************************/}
{/* 거절 수락 조회 */}



<TableContainer>
        <div style={{ width: '50%' }}>
          <h2>남자 거절</h2>
          <BoxContainer style={{ minHeight: '350px' }}>
            <Table columns={columns3} data={data12}></Table>
          </BoxContainer>
        </div>
        <div style={{ width: '50%' }}>
          <h2>여자 거절</h2>
          <BoxContainer style={{ minHeight: '350px' }}>
            <Table columns={columns3} data={data14}></Table>
          </BoxContainer>
        </div>
</TableContainer>


<TableContainer>
        <div style={{ width: '50%' }}>
          <h2>거절당한 남자</h2>
          <BoxContainer style={{ minHeight: '350px' }}>
            <Table columns={columns3} data={data13}></Table>
          </BoxContainer>
        </div>
        <div style={{ width: '50%' }}>
          <h2>거절당한 여자 </h2>
          <BoxContainer style={{ minHeight: '350px' }}>
            <Table columns={columns3} data={data15}></Table>
          </BoxContainer>
        </div>
</TableContainer>
<Button
          id="update-button"
          variant="contained"
          style={{ marginTop: '1rem', marginBottom: '3rem', width: '31rem' }}
          onClick={updateAcceptanceStatus}
        >
          수락거절 적용
        </Button>
{/* 실패 조회 */}
      {/* 매칭 실패한 팀 삭제하기 버튼 */}
    



      <TableContainer>
        <div style={{ width: '50%' }}>
          <h2>남자 2차수락</h2>
          <BoxContainer style={{ minHeight: '350px' }}>
            <Table columns={columns2} data={data16}></Table>
          </BoxContainer>
        </div>
        <div style={{ width: '50%' }}>
          <h2>여자 2차수락</h2>
          <BoxContainer style={{ minHeight: '350px' }}>
            <Table columns={columns2} data={data17}></Table>
          </BoxContainer>
        </div>
</TableContainer>

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
              비활성화 처리하기
            </Button>
          </Box>
{/*페이지 나누는 경계 *********************************************************************************/}

      {/* 서비스 신청 인원 관리 */}
      <h2>서비스 신청 인원 관리</h2>
      <div>
        <TableContainer>
          <div style={{ width: '50%', marginBottom: '3rem' }}>
            <h3>현재 상태</h3>
            <Table columns={columns4} data={data9}></Table>
          </div>
        </TableContainer>
      </div>
      <div>
        <div>
          <div style={{ display: 'inline-block', marginRight: '3rem' }}>
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
          </div>
          <div style={{ display: 'inline-block' }}>
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
        </div>
        <Button
          id="save-button"
          variant="contained"
          style={{ marginTop: '1rem', marginBottom: '3rem', width: '31rem' }}
          onClick={updateApplyStatus}
        >
          저장하기
        </Button>

      </div>
 
    </div>
  );
};
export default AdminPage;
