import { styled } from 'styled-components';
import { KeyWords, SearchWords, SearchWord } from '.';
import { recommendedWords } from '../constants/recommendedWords';
import { Trial } from '../hooks/useSearch';

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

type Search = {
  word: string;
  historyWords: Trial[];
  foundTrials: Trial[];
};

const SpreadBox = ({ word, historyWords, foundTrials }: Search) => {
  return (
    <Box>
      {word ? (
        <>
          <div>
            <SearchWord>{word}</SearchWord>
          </div>
          {!!foundTrials.length && (
            <div>
              <SubTitle>추천 검색어</SubTitle>
              <SearchWords words={foundTrials} />
            </div>
          )}
        </>
      ) : (
        <>
          <div>
            <SubTitle>최근 검색어</SubTitle>
            {historyWords.length ? (
              <SearchWords words={historyWords} />
            ) : (
              <NoWord>최근 검색어가 없습니다</NoWord>
            )}
          </div>
          <hr />
          <div>
            <SubTitle>추천 검색어로 검색해보세요</SubTitle>
            <KeyWords words={recommendedWords} />
          </div>
        </>
      )}
    </Box>
  );
};

export default SpreadBox;
