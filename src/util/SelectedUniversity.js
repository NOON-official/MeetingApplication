import styled from 'styled-components';
import { ReactComponent as Xbutton } from '../asset/svg/Xbutton.svg';

export default function SelectedNumUniversity(props) {
  return (
    <div
      style={{
        marginTop: '3%',
        display: 'flex',
        justifyContent: 'space-between',
        width: '150px',
        color: '#FFFFFF',
        backgroundColor: '#EB8888',
        alignItems: 'center',
        textAlign: 'center',
        minHeight: '40px',
        borderRadius: '10px',
        padding: '0 5px',
      }}
      onClick={props.onDelete}
    >
      <UniversityText style={{ size: '15px' }}>
        {props.university}
      </UniversityText>
      <SXbutton />
    </div>
  );
}

const UniversityText = styled.span`
  text-align: center;
  font-weight: 400;
  font-size: 13px;
`;

const SXbutton = styled(Xbutton)`
  &:hover {
    cursor: pointer;
  }
`;
