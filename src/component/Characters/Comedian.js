import styled from "styled-components";
import charimg from "../../image/enfp.jpg"
const Container= styled.div`
display:flex;
flex-direction: column;
height:100%;
width:100%;
`
const Character= styled.img`
width:90%;
height:35%;
margin:5%;

`
const Warning= styled.div`
color: red;
font-size:15px;
margin-top: 20px;
`
const Name= styled.div`
height:5%;
width:100%;
justify-content: center;
align-items: center;
    font-weight: 700;
    font-style: normal;
    letter-spacing: -.015em;
    line-height: 149.8%;
`

const CharacterText= styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width:90%;
height:55%;
margin:5%;
color: #000;
    font-weight: 700;
    font-style: normal;
    letter-spacing: -.015em;
    line-height: 149.8%;
    text-align: start;
    font-size:18px;
`
const Comedian=()=>{
return(
<Container>
  <Character width="100" height="200" src={charimg}/>
 <Name>개그맨</Name>
  <CharacterText>
    리액션과 개그맨 뺨치는 입담으로 상대방을 홀리는 당신! <br/>

 <Warning>-주의! 개그만 하다 집에 돌아올 수도 <br/>있으니 적절한 타이밍이 중요해요-  </Warning>
  </CharacterText>
</Container>

)

}
export default Comedian;