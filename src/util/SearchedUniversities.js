import styled from 'styled-components';
import Universities from '../asset/Universities';

function OnUniversityClick(university, setUniversity, selectedUniversity) {
  // eslint-disable-next-line no-shadow
  setUniversity((selectedUniversity) => [...selectedUniversity, university]);
}

// eslint-disable-next-line import/prefer-default-export
export const SearchedUniversities = (props) => {
  const { searchKeyWord, selectedUniversities, setSelectedUniversities } =
    props;
  const data = Universities.filter((c) => {
    return c.univ.indexOf(searchKeyWord) > -1;
  });
  return data.map((c) => (
    <SearchedUniversity
      onClick={() => {
        if (selectedUniversities.length < 3) {
          if (selectedUniversities.some((u) => u.univ === c.univ)) {
            window.alert('이미 선택한 대학교입니다.');
          } else
            OnUniversityClick(c, setSelectedUniversities, selectedUniversities);
        } else window.alert('대학교 수가 너무 많습니다.');
      }}
      key={c}
    >
      {c.univ}
    </SearchedUniversity>
  ));
};

const SearchedUniversity = styled.div`
  display: flex;
  min-height: 40px;
  height: 40px;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  color: #eb8888;
  font-size: 14px;
  border-bottom: 1px solid #f6eeee;
  overflow-x: hidden;
`;
