 function binarySearch(arr, target) {
    // TODO : 여기에 코드를 작성합니다.
    let start = 0;
    let end = length.arr-1
    let mid
    
    while(start<=end){ //점점 좁혀지다가 start와 end의 순서가 어긋나게 되면 반복을 종료한다
    
    mid = parseInt((start+end)/2)
    
    if(target === arr[mid]["key"]){
      return arr[mid]["univ"];
    } else{
      if(target<arr[mid]["key"]){
        end = mid-1
      }
      else{
        start = mid+1
      }
    }
    }
    return -1
  
  };

export default  binarySearch();