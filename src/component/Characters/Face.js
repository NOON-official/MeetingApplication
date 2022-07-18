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
width:90%;
height:55%;
margin:5%;
color: #000;
    font-weight: 700;
    font-style: normal;
    letter-spacing: -.015em;
    line-height: 149.8%;
    text-align: start;
    font-size:13px;
`
const Warning= styled.div`
color: red;
`
const Face=()=>{
return(
<Container>
  <Character width="100" height="200" src={charimg}/>
 <Name>배우</Name>
  <CharacterText>
    출중한 외모로 상대를 매혹시켜요.
            당신의 무기는 얼굴이에요. 바라만 보고 있어도 웃음이 나고 상대를 기분좋게 해줍니다.
            미팅에서 당신은 팀원들의 견제 대상이에요.
            하지만 주의하세요. 당신의 외모만 믿고 가만히 앉아있으면 상대방이 흥미를 잃을 수 있어요!
            <Warning>주의! 주위에 물어볼 것 </Warning>
  </CharacterText>
</Container>

)

}
export default Face;