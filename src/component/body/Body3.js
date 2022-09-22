import * as React from 'react';

import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Container, MobileBox, StyledDiv, StyledText, SubTitle } from '../Elements/StyledComponent';
import { ReactComponent as Character } from '../../Asset/page3/Character.svg';
import { ReactComponent as ChatBallon } from '../../Asset/page3/ChatBallon.svg';
import { ReactComponent as SearchIcon } from '../../Asset/page3/SearchIcon.svg';
import { ReactComponent as Xbutton } from '../../Asset/page3/Xbutton.svg';
import Universities from '../Universities';

const StyledInput = styled.input`
  width: ${(props) => props.width || '100%'};
  height: 100%;
  display: flex;
  font-size: 18px;
  border: 0;
  text-align: 'center';
  outline: none;
  margin-left: 10px;
  background-color: #F5F5F5;
  font-family: "Nanum JungHagSaeng";
  color: #EB8888;
  ::placeholder {
    justify-content: center;
    text-align: 'center';
    font-size: 16px;
    outline: none;
    font-family: "Nanum JungHagSaeng";
    color: #EB8888;
  }
`;
const SearchedUniversity = styled.div`
display: flex;
height:40px;
min-height: 40px;
width:80%;
font-family: "Pretandard";
align-items: center;
justify-content: flex-start;
color:#EB8888;
font-size: 14px;
margin-left: 50px;
margin-right: 50px;
border-bottom: 1px solid #F6EEEE;
`
function binarySearch(arr, target) {
  // TODO : 여기에 코드를 작성합니다.
  let start = 0;
  let end = arr.length-1
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
const Body3 = () => {
  const dispatch = useDispatch();
  const universities = useSelector((state) => state.university);
  const num = useSelector((state) => state.num);
  const [searchKeyWord, setSearchKeyWord]= React.useState('0');
 const inputChange = (e)=>{
  setSearchKeyWord(e.target.value)
  }
  function OnUniversityClick (university) {
 
      if (universities.length < num) dispatch({ type: 'UNIVERSITIES', payload: university });
  
  }
  const SearchedUniversities =React.useCallback(()=>{
    let data
    data = Universities.filter((c)=>{
     return c["univ"].indexOf(searchKeyWord)>-1;
     })
     return data.map((c,index)=><SearchedUniversity onClick={()=>{OnUniversityClick(c)}}  key={index}>{c["univ"]}</SearchedUniversity>)

  },[searchKeyWord,num,universities])
  
  const SelectedUniversity = (props)=>{
  
    const width = React.useMemo(()=>{if(universities.length==1){return"45%"}else if(universities.length==2){return"45%"}
    else if(universities.length==3){return"30%"} else if(universities.length==4){return"23%"}},[universities])
    
    return(<StyledDiv position="static" display="flex" justify_content="space-between"  width={width} align_item="center" bg="#EB8888" border="10px" color="#FFFFFF" minHeight="40px" text_align="center" transform="0"
    onClick={()=>{ dispatch({ type: 'UNIVERSITIES_DELETE', payload: props.university });}}>
      <StyledDiv font="Nanum JungHagSaeng" size="15px"position="static" margin="0 0 5px 5px" transform="0"> {props.university["univ"]}</StyledDiv> 
      <Xbutton/>
      </StyledDiv>)
  }
  const SelectedNumUniversity = (props)=>{
    const width = React.useMemo(()=>{if(universities.length==1){return"45%"}else if(universities.length==2){return"45%"}
    else if(universities.length==3){return"30%"} else if(universities.length==4){return"23%"}},[universities])

    return(<StyledDiv position="static" display="flex" justify_content="space-between"  width={width} align_item="center" bg="#EB8888" border="10px" color="#FFFFFF" minHeight="40px" text_align="center" transform="0"
    onClick={()=>{ dispatch({ type: 'UNIVERSITIES_DELETE', payload: props.univnum });}}>
      <StyledDiv font="Nanum JungHagSaeng" size="15px"position="static" margin="0 0 5px 5px" transform="0"> {props.university}</StyledDiv> 
      <Xbutton/>
      </StyledDiv>)
  }
  
  return (
    <Container bg={'#F5F5F5'}>
      <MobileBox>
        <StyledDiv display="flex" direction="column" top="5%" width="90%" height="15%" left="50%">
          {/* HeaderBox*/}
          <StyledDiv position="static" display="flex" direction="row" transform="0" width="100%" margin="0 0 0 10px">
            {/* TitleBox*/}
            <StyledDiv position="static" display="flex" direction="row" size="35px" transform="0">
              {/* TextTitle*/}
              <StyledText position="static" color="#F49393" size="0.8em">
                우리 팀의 학교
              </StyledText>
              <StyledText position=" static" size="0.8em">
                는?
              </StyledText>
            </StyledDiv>
            <StyledDiv
              position="static"
              transform="0"
              direction="row"
              size="20px"
              justify_content="center"
              align_item="center"
              margin=" 10px 0 0 10px"
            >
              {/*TextNumber*/}
              <StyledText position="static" weight="400" size="0.8em" font="Nanum JungHagSaeng" color="#BBBBBB">
                2/9
              </StyledText>
            </StyledDiv>
          </StyledDiv>
          <StyledDiv
            position="static"
            display="flex"
            direction="row"
            transform="0"
            width="100%"
            size="13px"
            margin="0 0 0 10px"
          >
            <StyledText position="static" weight="400" size="0.8em" font="Pretendard" color="#AAAAAA">
              팀원들의 모든 학교를 말해주세요
            </StyledText>
            <SubTitle weight="400" size="13px" font="Pretendard" color="#AAAAAA" left="28%" top="50%"></SubTitle>
          </StyledDiv>
        </StyledDiv>
        {/*SearchBox*/}
        <StyledDiv display="flex" direction="column" top="20%" height="60%" width="100%"  left="50%"> 
    
       
        {/* Div of Body*/}
        <StyledDiv position="static" display="flex" direction="column" align_item="start" transform= "0" width="100%" height="100%" >
       {/* NO Div if there is no Selected university*/}
       {universities.length==0?console.log() :
       
        <StyledDiv position="static" display="flex" justify_content="space-evenly" margin=" 0 0 0 5%" align_item="center"transform="0" width="90%" height="50px">
       {universities.map((data, idx)=>{
        if(typeof(data)=='number'){
       
          let univ = binarySearch(Universities,data)
         
          return(<SelectedNumUniversity key={idx} univnum={data} university={univ}/>)
        }else 
        
        return( <SelectedUniversity key={idx} university={data}/>)})}
        
      </StyledDiv>
  }
       
      

       
          {/* Search inputBox*/}
          <StyledDiv position="static" display="flex" justify_content="center" align_item="center"transform="0" width="100%" height="50px">
            <StyledDiv position= "static" display="flex" justify_content="space-between" direction="row" transform="0" width="90%" height=" 44px"  border="10px" border_style="solid" border_width="1px" border_color="#EB8888">
          <StyledInput placeholder='학교를 검색해주세요' name="universitySearch" onChange={inputChange}></StyledInput>
           <StyledDiv position ="static" transform="0" display="flex" justify_content="center" align_item="center" margin="0 10px  0 0">  <SearchIcon></SearchIcon></StyledDiv>
            </StyledDiv>
          </StyledDiv>
          {/*University showBox*/}
          <StyledDiv position="static" direction="column" transform="0" width="100%" height="80%" >
          <StyledDiv position="static" overflow="scroll"display="flex"  align_item="center" direction="column"transform="0"width="100%" height="100%" >
          <SearchedUniversities></SearchedUniversities>
          </StyledDiv>
          </StyledDiv>

        </StyledDiv>
        </StyledDiv>

        <StyledDiv
          display="flex"
          direction="row"
          justify_content="flex-end"
          align_item="flex-end"
          top="80%"
          height="18%"
          width="100%"
          left="40%"
        >
      
          <Character />
        </StyledDiv>
      </MobileBox>
    </Container>
  );
};

export default Body3;
