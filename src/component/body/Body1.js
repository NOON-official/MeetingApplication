import React, { useCallback } from 'react';
import Main from '../mainpages/Main';
import Guide from '../mainpages/Guide';
import MatchingInquire from '../mainpages/MatchingInquire';
import { useSelector } from 'react-redux';
import { Container } from '../Elements/StyledComponent';
import MyPage from '../mainpages/MyPage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';


const Body1 = () => {
  const dispatch = useDispatch();
  const pageChange = async(state)=>{
    return(dispatch({type: 'PAGE', payload: state}));
  }
  useEffect(()=>{
    const pagehandle =async() => {
    const location = window.location.pathname;
    if (location === '/join')
      {pageChange(2);}
  }
  pagehandle();
}, [])

  const pagestate = useSelector((state)=> state.pagestate);

  const Body = useCallback(()=>{
  if (pagestate == 0)
    return(<Main/>)
  else if(pagestate == 1)
    return(<Guide/>)
  else if (pagestate == 2)
    return(<MatchingInquire/>)
  else if(pagestate == 3)
    return(<MyPage/>)
}, [pagestate]) ;
  

  return (
    <Container height={'90%'} bg="#f8f3f3">
      <Body></Body>
     </Container>
  );
};

export default Body1;
