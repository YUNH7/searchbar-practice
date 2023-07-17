import { styled } from 'styled-components';

const WordsBox = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const SearchWord = styled.p`
  display: flex;
  align-items: center;
  font-weight: normal;

  &::before {
    content: '';
    width: 1.125rem;
    height: 1.125rem;
    margin-right: 12px;
    filter: invert(77%) sepia(13%) saturate(189%) hue-rotate(169deg) brightness(90%) contrast(89%);
    background-image: url('/src/assets/search.svg');
  }
`;

type Word = {
  sickCd: string;
  sickNm: string;
};
type Props = {
  words: Word[];
};

const SearchWords = ({ words }: Props) => {
  return (
    <WordsBox>
      {words.map(word => (
        <li key={word.sickCd}>
          <SearchWord>{word.sickNm}</SearchWord>
        </li>
      ))}
    </WordsBox>
  );
};

export default SearchWords;
