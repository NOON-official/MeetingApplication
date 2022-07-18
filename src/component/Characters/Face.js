import styled from "styled-components";
import charimg from "../../image/istj.png"
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
    font-size:16px;
`
const Warning= styled.div`
color: red;
font-size:15px;
margin-top: 20px;
`
const Face=()=>{
return(
<Container>
  <Character width="100" height="200" src={charimg}/>
 <Name>비주얼</Name>
  <CharacterText>
    존재만으로도 분위기를 녹이는 당신! 바라만 보고 있어도 웃음이 나요.<br/>

    <Warning>- 주의! 주위에 물어볼 것-</Warning>
  </CharacterText>
</Container>

)

}
export default Face;