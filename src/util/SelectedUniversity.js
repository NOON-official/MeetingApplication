import { useMemo } from 'react';
import styled from 'styled-components';
import { ReactComponent as Xbutton } from '../asset/svg/Xbutton.svg';

export default function SelectedNumUniversity(props) {
  const { selectedUniversities } = props;
  const width = useMemo(() => {
    if (selectedUniversities.length === 1) {
      return '45%';
    }
    if (selectedUniversities.length === 2) {
      return '45%';
    }
    if (selectedUniversities.length === 3) {
      return '30%';
    }
    if (selectedUniversities.length === 4) {
      return '22%';
    }
    return '45%';
  }, [selectedUniversities]);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: `${width}`,
        color: '#FFFFFF',
        backgroundColor: '#EB8888',
        alignItems: 'center',
        textAlign: 'center',
        minHeight: '40px',
        borderRadius: '10px',
        padding: ' 5px 5px 5px 5px',
      }}
      onClick={props.onDelete}
    >
      <UniversityText style={{ size: '15px' }}>
        {props.university}
      </UniversityText>
      <Xbutton />
    </div>
  );
}

const UniversityText = styled.span`
  font-size: 10px;
`;
