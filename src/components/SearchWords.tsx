import { KeyboardEvent, LegacyRef, useState } from 'react';
import { styled } from 'styled-components';
import { Trial } from '../hooks/useSearch';

const WordsBox = styled.ul`
  display: flex;
  flex-direction: column;

  &:focus {
    outline: none;
  }
`;
export const SearchWord = styled.p<{ bgcolor?: string }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: normal;
  margin: 0 -1.5rem;
  padding: 0.5rem 1.5rem;
  background-color: ${props => (props.bgcolor ? props.bgcolor : 'inherit')};

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
  listRef: LegacyRef<HTMLUListElement>;
  nowWord?: string;
  words: Trial[];
  searchWord: (word: string) => void;
}

const SearchWords = ({ listRef, nowWord, words, searchWord }: Props) => {
  const [tabIndex, setTabIndex] = useState(-1);

  const moveList = (e: KeyboardEvent<HTMLUListElement>) => {
    switch (e.key) {
      case 'ArrowUp':
        setTabIndex(pre => (pre <= 0 ? words.length - 1 : pre - 1));
        break;
      case 'ArrowDown':
        setTabIndex(pre => (pre >= words.length - 1 ? 0 : pre + 1));
        break;
    }
  };

  return (
    <WordsBox
      ref={listRef}
      tabIndex={0}
      onFocus={() => setTabIndex(0)}
      onBlur={() => setTabIndex(-1)}
      onKeyUp={e => e.key === 'Enter' && searchWord(words[tabIndex].sickNm)}
      onKeyDown={moveList}
    >
      {words.map((word, i) => (
        <li key={word.sickCd || word.sickNm}>
          <SearchWord
            bgcolor={tabIndex === i ? 'var(--skyblue)' : undefined}
            onClick={() => searchWord(word.sickNm)}
          >
            <span>
              {nowWord
                ? word.sickNm
                    .replaceAll(nowWord, `*#${nowWord}*#`)
                    .split('*#')
                    .map((el, i) => (el === nowWord ? <b key={i}>{el}</b> : el))
                : word.sickNm}
            </span>
          </SearchWord>
        </li>
      ))}
    </WordsBox>
  );
};

export default SearchWords;
