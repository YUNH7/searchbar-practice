import { styled } from 'styled-components';
import { Trial } from '../hooks/useSearch';

const WordsBox = styled.ul`
  display: flex;
  flex-direction: column;
`;
export const SearchWord = styled.p`
  display: flex;
  align-items: center;
  font-weight: normal;
  margin: 0 -1.5rem;
  padding: 0.5rem 1.5rem;
  cursor: pointer;

  &:hover {
    background-color: var(--skyblue);
  }
  &::before {
    content: '';
    width: 1.125rem;
    height: 1.125rem;
    margin-right: 12px;
    filter: invert(77%) sepia(13%) saturate(189%) hue-rotate(169deg) brightness(90%) contrast(89%);
    background-image: url('/src/assets/search.svg');
  }
`;

interface Props {
  words: Trial[];
  searchWord: (word: string) => void;
}

const SearchWords = ({ words, searchWord }: Props) => {
  return (
    <WordsBox>
      {words.map(word => (
        <li key={word.sickCd || word.sickNm}>
          <SearchWord onClick={() => searchWord(word.sickNm)}>{word.sickNm}</SearchWord>
        </li>
      ))}
    </WordsBox>
  );
};

export default SearchWords;
