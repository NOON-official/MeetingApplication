//관리자인지 확인
const isAlredyMatching = () => {

    const isAlredyMatching = window.sessionStorage.getItem('matchingStatus');
    
    if (parseInt(isAlredyMatching,10) === 1)
      return true;
    else
      return false;
  };
  
  export default isAlredyMatching;
  