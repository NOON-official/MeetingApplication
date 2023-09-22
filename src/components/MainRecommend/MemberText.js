import styled from 'styled-components';

export default function MemberText({ count, more }) {
  const moreMember = more
    .map((x) => {
      return `${x}:${x}`;
    })
    .join(' / ');

  return (
    <Wrapper>
      <div style={{ fontWeight: '500' }}>
        {count}:{count} 미팅
      </div>
      {more.length !== 0 ? (
        <div style={{ color: '#777777' }}>({moreMember} 미팅도 가능해요!)</div>
      ) : null}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
