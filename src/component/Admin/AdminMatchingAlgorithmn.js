
//서버에서 받아온 데이터를 매칠가능한 상대끼리 묶어줍니다.
// 이 데이터는 상위 데이터들이 바뀔때마다 초기화되야합니다.
//분류하는 기준은 학교를 분류해줍니다.
// 알고리즘 - 1차적으로 학교를 분류합니다.. 그 다음 요일을 분류합니다.
//학교 1 = 같은 학교는 싫어요, 2= 상관 없어요
// 1) 여성 유저가 2인 경우 -> 1-1)남성유저가 2인경우 = 모두허용, 1-2)남성유저가 1인경우 = 여성유저의 대학과 남성유저의 대학을 비교한 후 허용여부
// 2) 여성유저가 1인경우 -> 남성유저와의 대학을 비교한 후 허용여부 판단

// warning 반드시 props는 twoman vs twowoman  or threeman vs threewoman으로 해야함
const Matching = (maleData, femaleData)=>{
    let matchingData = []
    femaleData.mpa((femalData)=>{
        //1)인 경우
        if (femaleData.sameUniversity ==2){
            maleData.map((maleData)=>{
                //1-1)
                if(maleData.sameUniversity ==2){
                    matchingData.push([femalData.ourteamId, femalData.userId, femalData.num, femalData.age, femalData.preferenceAge, femalData.day, maleData.ourteamId,maleData.userId,maleData.num,maleData.age,maleData.preferenceAge, maleData.day]);
                }
                //1-2)
                else{
                    let femalUniv = femalData.university;
                    let maleUniv =  maleData.university;
                    let isMatchable = true
                    for( var i in femalUniv){
                        for(var j in maleUniv){
                            if (i == j)
                            isMatchable = false
                            break
                        }
                    }
                    if (isMatchable) maleData.push([femalData.ourteamId, femalData.userId, femalData.num, femalData.age, femalData.preferenceAge, femalData.day, maleData.ourteamId,maleData.userId,maleData.num,maleData.age,maleData.preferenceAge, maleData.day]);
                }
            })
        }
        //2)인 경우
        else{
            let femalUniv = femalData.university;
            let maleUniv =  maleData.university;
            let isMatchable = true
            for( var i in femalUniv){
                for(var j in maleUniv){
                    if (i == j)
                    isMatchable = false
                    break
                }
            }
            if (isMatchable) maleData.push([femalData.ourteamId, femalData.userId, femalData.num, femalData.age, femalData.preferenceAge, femalData.day, maleData.ourteamId,maleData.userId,maleData.num,maleData.age,maleData.preferenceAge, maleData.day]);
       
        }
    })

    return(matchingData);
}

// 최종적으로 [여성유저팀아이디','여성유저이름','인원','나이','희망나이','요일', '남성유저팀아이디','남성유저이름','인원','나이','희망나이','요일' 'info'] 를 리턴합니다.