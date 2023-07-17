import { styled } from 'styled-components';
import { KeyWords, SearchWords, SearchWord } from '.';
import { recommendedWords } from '../constants/recommendedWords';

const Box = styled.div`
  position: absolute;
  display: none;
  width: 100%;
  padding: 1.5rem;
  left: 0;
  bottom: -0.5rem;
  transform: translateY(100%);
  background-color: white;
  border-radius: 20px;
  box-shadow:
    4px 4px 4px var(--shadow),
    -2px -2px 2px var(--shadow);
  font-weight: bold;
  font-size: 1.125rem;

  > hr {
    margin: 1.5rem -1.5rem;
    border: none;
    border-bottom: 1px solid var(--gray);
    opacity: 0.3;
  }
`;
const SubTitle = styled.p`
  color: var(--gray_700);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;
const NoWord = styled.p`
  color: var(--gray);
`;

const SpreadBox = () => {
  return (
    <Box>
      <div>
        1<SubTitle>최근 검색어</SubTitle>
        1-1<NoWord>최근 검색어가 없습니다</NoWord>
        1-2
        <SearchWords
          words={[
            { sickCd: '1', sickNm: '간' },
            { sickCd: '2', sickNm: '심장' },
          ]}
        />
        2<SearchWord>현재검색어</SearchWord>
      </div>
      <hr />
      <div>
        <SubTitle>추천 검색어{'로 검색해보세요'}</SubTitle>1
        <KeyWords words={recommendedWords} />
        2
        <SearchWords
          words={[
            { sickCd: '1', sickNm: '추천1' },
            { sickCd: '2', sickNm: '추천2' },
          ]}
        />
      </div>
    </Box>
  );
};

export default SpreadBox;
