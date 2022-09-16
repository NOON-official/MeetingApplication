import React, { useCallback, useState } from 'react';
import client from '../../api';
import Main from '../mainpages/Main';
import Guide from '../mainpages/Guide';
import MatchingInquire from '../mainpages/MatchingInquire';
import { useSelector } from 'react-redux';
import { Container } from '../Elements/StyledComponent';
import MyPage from '../mainpages/MyPage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const Body1 = () => {
  const dispatch = useDispatch();
  const pageChange = async(state)=>{
    return(dispatch({type: 'PAGE', payload: state}));
  }
  useEffect(async () => {
    const location = window.location.pathname;
    if (location === '/join')
      pageChange(2);
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
