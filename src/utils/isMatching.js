const isMatching = () => {


  //매칭 정보  
  const matchingStatus = window.sessionStorage.getItem('matchingStatus');
  console.log("matching 진행중",matchingStatus);
  if(matchingStatus == 1) false;//매칭중이면 접근 불가능
  else return true; //매칭중이 아니거나 매칭 시작도 안함
    
};

export default isMatching;