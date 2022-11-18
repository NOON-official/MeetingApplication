import client from '../../api';

//서버에서 받아온 데이터를 매칠가능한 상대끼리 묶어줍니다.
// 이 데이터는 상위 데이터들이 바뀔때마다 초기화되야합니다.
//분류하는 기준은 학교를 분류해줍니다.
// 알고리즘 - 1차적으로 나이비교 여자 선호나이 최소 <= 남자 나이 <= 여자 선호나이 최대 남자 age랑 여자 preference age체크
// 선호지역(요일): 여자 남자 비교 남자 기준으로 여자꺼 비교 =>intersection 함수 사용
//선호직업: 남자 직업이 여자 선호 직업이랑 맞아야함 남자 job이랑 여자 preferenceJob 비교
//학교 구분: 여자 학력 < 남자학력 매칭 
//학교 1 = 같은 학교는 싫어요, 2= 상관 없어요
// 1) 여성 유저가 2인 경우 -> 1-1)남성유저가 2인경우 = 모두허용, 1-2)남성유저가 1인경우 = 여성유저의 대학과 남성유저의 대학을 비교한 후 허용여부
// 2) 여성유저가 1인경우 -> 남성유저와의 대학을 비교한 후 허용여부 판단
//
// warning 반드시 props는 twoman vs twowoman  or threeman vs threewoman으로 해야함
export function Matching(maleData, femaleData){

    
    var matchingData =[ ]//매칭된 커플들 데이터 
    

    //var cycles=0;

    var isMatchable =true
    //만약 남자나이가 여자 최소 선호 나이보다 적고 그리고 남자나이가 여자 최대 선호나이보다 많을때
    var j=0;
    for(var i =0; i<femaleData.length; i++)
    {
        
        for(j=0; j<maleData.length; j++){
           
            //console.log("여자",i,"명",femaleData[i]);
            //console.log("남자 :",j,"명",maleData[j]);
            isMatchable =true
            //cycles+=1;
            if(parseInt(femaleData[i].preferenceAge[0]) >= parseInt(maleData[j].age)  && parseInt(maleData[j].age) > femaleData[i].preferenceAge[1])
            {
                //console.log(i,":나이 안맞아");
                isMatchable =false;
                continue;
            }

            //날짜 
            if(femaleData[i].day.filter(x => maleData[j].day.includes(x)).length ==0)
            {
                //console.log(i,":날짜 안맞아")
                isMatchable =false;
                continue;
            }

            //지역
            if(femaleData[i].area.filter(x => maleData[j].area.includes(x)).length ==0)
            {
                //console.log(i,"지역 안맞아")
                isMatchable =false;
                continue;
            }    
    //console.log(femaleData[0].preferenceJob)
    //console.log(maleData[0].job)

    //직업
            if(femaleData[i].preferenceJob.filter(x => maleData[j].job.includes(x)).length ==0)
            {
                //console.log(i,"어린애는 싫어")
                isMatchable =false;
                continue;
            }
        //같은 학교 선호 안할때 
            if(femaleData[i].sameUniversity=='X' || maleData[j].sameUniversity=='X')
            {
        
            //같은 학교 일때 isMatchable 풀기 
                if(femaleData[i].university ==maleData[j].university)
                {
                    //console.log(i,"같은 학교 싫어요")
                    isMatchable=false
                    continue;
                }

            //여자 학력이 더 높을때 
                if(femaleData[i].level > maleData[j].level)
                {
                    //console.log(i,"여자학력이 더높다")
                    isMatchable=false
                    //console.log(i,"현재상태:",isMatchable)
                    continue;
                }   


            }   
        // 다통과시 매칭시키기 
        if(isMatchable)
        {
            matchingData.push({'femaleID':femaleData[i].id, 'maleID':maleData[j].id})
            //console.log("매칭!:",isMatchable);
            //console.log(matchingData);
            //console.log(i,".",j)
            femaleData.splice(i,1);
            maleData.splice(j,1);
                
                //i값 초기화
                if(i==0)
                {   
                    i=0;
                    j=-1;
                    //console.log("j 인덱스 초기화",j)
                }
                else {
                    i -= 1;
                    j=-1;
                    //console.log("j 인덱스 초기화",j)
                }
                continue;
            //남자 다시 처음부터 카운팅
            
            //console.log(femaleData.length)
        }
    }  
    } 
        //완료시 매칭데이터에 푸시
        //console.log(femaleData)
        //console.log(maleData)
        //console.log("사이클",cycles,"번")
        //console.log(matchingData)
        matchingData.forEach(data => {
            //console.log('여자',data.femaleID)
            //console.log('남자',data.maleID)
            
            client
                .post('/api/admin/team/match', {
                    maleTeamId: data.maleID,
                    femaleTeamId: data.femaleID,
                    chatLink: "chatlink",
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
        })
}

// 최종적으로 [여성유저팀아이디','여성유저이름','인원','나이','희망나이','요일', '남성유저팀아이디','남성유저이름','인원','나이','희망나이','요일' 'info'] 를 리턴합니다.