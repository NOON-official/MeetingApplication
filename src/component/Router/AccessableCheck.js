
//지금 작동안됨
import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
//특정페이지에서 모두 완료되어야 할 요소들을 판단해 페이지에 필수 요소가 완성되었는지 true, false로 반환
//페이지별 필수 요소를 redux를 통해서 판단할 예정
// 페이지는 body를 따름 -> ex) body2 의 pageNum = 2
const job = useSelector((state)=> state.jobs);
    const university = useSelector((state)=> state.university)
    const area = useSelector((state)=> state.area)
    const day = useSelector((state)=> state.day)
    const appearance = useSelector((state)=> state.appearance)
    const mbti = useSelector((state)=> state.mbti)
    const fashion = useSelector((state)=> state.fashion)
    const character = useSelector((state)=> state.characters)
    const prefferedjobs = useSelector((state)=> state.prefferedjobs)
    const prefferedthing = useSelector((state)=> state.prefferedthing)
const PageIsDone= useCallback((pagenum)=>{
    
switch(pagenum){
    case 2:
        if(job.length>0){
            return true
        }
        else{
            return false
        }
    case 3:
        if(university.length>0){
            return true
        }
        else{
            return false
        }
    case 4:
        if(area.length>0){
            return true
        }
        else{
            return false
        }
    case 5:
        if(day.length>0){
            return true
        }
        else{
            return false
        }
    case 6:
        if(fashion.length==0 || appearance.length==0 || mbti.length==0){
            return false
        }
        else{
            return true
        }
    case 7:
        if(character.length>0){
            return true
        }
        else{
            return false
        }
    case 8:
        if(prefferedjobs.length>0){
            return true
        }
        else{
            return false
        }
        case 9:
            if(prefferedthing.length>0){
                return true
            }
            else{
                return false
            }

}
},[job, university,area,day,appearance,mbti,fashion,character,prefferedjobs,prefferedthing])
   

;
// 현재 주소를 검색하여 현재 주소가 접근가능한 주소인지 판단해주는 함수
//apply/2는 사용할 필요가 없다. login restrict 적용된 페이지는 필요 없다.
function AccessableCheck(){
   const location = useLocation().pathname; //현재주소 반환
    const locationNum=location.slice(7)  //현재주소의 페이지번호를 반환해줌 ex)apply/3 => 3, apply/7 =>7
    var uncompletedPage =0
    var step;
    for (step=2; step<locationNum; step++){
        if(!PageIsDone(step)){
            uncompletedPage = step
            break
        }
    }
    // location 이전까지의 페이지를 모두 조회한다.
    if( uncompletedPage==0)
    {return(true , locationNum )}
    else
    return(false), uncompletedPage
    
};
export default AccessableCheck();