import styled from 'styled-components';
import { StyledDiv } from './Elements/StyledComponent';

const FullDiv = styled.div`
  width: 100%;
`;
const TestPage = () => {
  function hideColumn() {
    const column = document.getElementById('others');
    column.style.display = 'none';
  }
  function showColumn() {
    const column = document.getElementById('others');
    column.style.display = '';
  }
  const data = [
    ['me', 'a', 'info'],
    ['me', 'b', 'info'],
    ['me', 'c', 'info'],
    ['he', 'c', 'info'],
    ['he', 'd', 'info'],
  ];
  let sameuser = [];
  let nowUserNum = 0;
  let nowUserName = data[0][0];
  data.map((user, idx) => {
    if (user[0] === nowUserName) {
      nowUserNum += 1;
    } else {
      sameuser.push([nowUserName, nowUserNum]);
      nowUserNum = 1;
      nowUserName = user[0];
    }
    if (idx === data.length - 1) {
      sameuser.push([user[0], nowUserNum]);
    }
  });
  let prevUserName = null;
  return (
    <div>
      <div> 매칭 리스트업</div>
      <StyledDiv left="50%" width="100%">
        <table width="100%" border="1" bordercolor="blue">
          <tr>
            <td>
              <td id="womanName"> 여성유저 이름</td>
              <td id="womanNum">인원</td>
              <td id="womanAge">나이</td>
              <td id="womanPrefferedAge">희망나이</td>
              <td id="womanDay">요일</td>
            </td>
            <td>
              <td id="manName"> 남성유저 이름</td>
              <td id="manNum">인원</td>
              <td id="manAge">나이</td>
              <td id="manPrefferedAge">희망나이</td>
              <td id="manDay">요일</td>
              <td id="others">기타</td>
              <td>매칭버튼</td>
            </td>
          </tr>
          {data.map((data, idx) => {
            if (data[0] !== prevUserName) {
              return sameuser.map((sameuserdata) => {
                if (sameuserdata[0] === data[0]) {
                  console.log('true');
                  prevUserName = data[0];
                  return (
                    <tr key={idx}>
                      <td rowSpan={sameuserdata[1]}>
                        <td id="womanName"> {data[0]}</td>
                        <td id="womanNum">인원</td>
                        <td id="womanAge">나이</td>
                        <td id="womanPrefferedAge">희망나이</td>
                        <td id="womanDay">요일</td>
                      </td>
                      <td>
                        <td id="manName"> {data[1]}</td>
                        <td id="manNum">인원</td>
                        <td id="manAge">나이</td>
                        <td id="manPrefferedAge">희망나이</td>
                        <td id="manDay">요일</td>
                        <td id="others">{data[2]}</td>
                        <td>
                          <button />
                        </td>
                      </td>
                    </tr>
                  );
                }
              });
            } else {
              return (
                <tr key={idx}>
                  <td>
                    <td id="manName"> {data[1]}</td>
                    <td id="manNum">인원</td>
                    <td id="manAge">나이</td>
                    <td id="manPrefferedAge">희망나이</td>
                    <td id="manDay">요일</td>
                    <td id="others">{data[2]}</td>
                    <td>
                      <button />
                    </td>
                  </td>
                </tr>
              );
            }
          })}
        </table>
        <button
          onClick={() => {
            hideColumn();
          }}
        ></button>
        <button
          onClick={() => {
            showColumn();
          }}
        ></button>
      </StyledDiv>
    </div>
  );
};
export default TestPage;
