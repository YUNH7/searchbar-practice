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

type Props = {
  words: Trial[];
};

const SearchWords = ({ words }: Props) => {
  return (
    <WordsBox>
      {words.map(word => (
        <li key={word.sickCd || word.sickNm}>
          <SearchWord>{word.sickNm}</SearchWord>
        </li>
      ))}
    </WordsBox>
  );
};

export default SearchWords;
