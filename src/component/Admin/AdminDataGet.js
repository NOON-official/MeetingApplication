import client from "../../api"

// 서버에서 인원과 성별이 구분된 배열을 받아옵니다.
export const MaleTwoData = async(()=>{
    const adminid = 0
    const maleTwoTeam =[]
    await client
    .get('api/admin/team/male/2')
    .then((res)=>{
        maleTwoTeam = res.data.data.maleTeam;
    })
    .catch((err)=>{})
    return maleTwoTeam;
})
export const MaleThreeData = async(()=>{
    const adminid = 0
    const maleThreeTeam =[]
    await client
    .get('api/admin/team/male/3')
    .then((res)=>{
        maleThreeTeam = res.data.data.maleTeam;
    })
    .catch((err)=>{})
    return maleThreeTeam;
})
export const FemaleTwoData = async(()=>{
    const adminid = 0
    const femaleTwoTeam =[]
    await client
    .get('api/admin/team/female/2')
    .then((res)=>{
        femaleTwoTeam = res.data.data.femaleTeam;
    })
    .catch((err)=>{})
    return femaleTwoTeam;
})
export const FemaleThreewoData = async(()=>{
    const adminid = 0
    const femaleThreeTeam =[]
    await client
    .get('api/admin/team/female/3')
    .then((res)=>{
        femaleThreeTeam = res.data.data.femaleTeam;
    })
    .catch((err)=>{})
    return femaleThreeTeam;
})