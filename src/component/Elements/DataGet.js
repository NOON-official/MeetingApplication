import client from '../../api';
async function DataGet(){
    console.log('함수실행');
    const id = window.sessionStorage.getItem('id');
    const accessToken = window.sessionStorage.getItem('access');
    const refreshToken = window.sessionStorage.getItem('refresh')
    console.log(accessToken)
  
    client
    .post(`api/team/ourteam-id/${id}`, 
      {headers: { authorization: `Bearer ${accessToken}`}}
      )

    .then((res)=>{
            console.log(res)
    })
    .catch((err)=> console.log(err))
}
export default DataGet