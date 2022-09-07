import React, { useCallback, useState } from 'react';
import client from '../../api';
import Main from '../mainpages/Main';
import Guide from '../mainpages/Guide';
import { useSelector } from 'react-redux';
import { Container } from '../Elements/StyledComponent';
const Body1 = () => {
  const pagestate = useSelector((state)=> state.pagestate);
  
  const Body = useCallback(()=>{
    if (pagestate==0)
  {return(<Main/>)}
  else if( pagestate ==1)
  return(<Guide/>)

},
  [pagestate]) ;
  

  return (
    <Container height={'90%'} bg="#f8f3f3">
      <Body></Body>
     </Container>
  );
};

export default Body1;
