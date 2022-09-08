import styled from 'styled-components';

const FullDiv = styled.div`
width:100%;
`
const TestPage = () => {
 const data = [["me" , "a", "info"],["me", "b", "info"],["me", "c", "info"],["he", "c", "info"],["he", "d", "info"]]
 let sameuser =[]
 let nowUserNum=0
 let nowUserName = data[0][0]
data.map((user, idx)=>{
  
  if(user[0] === nowUserName){
    nowUserNum+=1
  }
  else{
    sameuser.push([nowUserName,nowUserNum]);
    nowUserNum =1
    nowUserName = user[0]
  }
  if(idx === data.length -1){
    sameuser.push([user[0],nowUserNum]);
  }
})
let prevUserName =null
  return (
    <div>
    <div> 매칭 리스트업</div>
  
    <table border="1" bordercolor="blue">
      <tr>
        <td>name of me</td>
        <td>name of other</td>
        <td>others</td>
      </tr>
      { 
      data.map((data, idx)=>{
        if(data[0]!== prevUserName){
          return(
            sameuser.map((sameuserdata)=>{
              if(sameuserdata[0]=== data[0]){
                console.log("true")
                prevUserName = data[0]
                return(
                <tr key={idx} > 
                <td rowSpan ={sameuserdata[1]}>{data[0]}</td>
                <td>{data[1]}</td>
                <td>{data[2]}</td>
                </tr>
                )
                
              }
            })
       
          )}
          else{
            return( <tr key={idx}>
              <td>{data[1]}</td>
              <td>{data[2]}</td>
            </tr>)
             
            
          }

      })}
     
    </table>
  
    
    </div>
  );
};
export default TestPage;
