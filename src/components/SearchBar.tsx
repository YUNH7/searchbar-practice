import { KeyboardEvent, useRef } from 'react';
import { styled } from 'styled-components';
import { SpreadBox } from '.';
import { ReactComponent as SearchIcon } from '../assets/search.svg';
import useSearch from '../hooks/useSearch';

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 490px;
  padding: 8px 8px 8px 24px;
  border-radius: 42px;
  border: 2px solid var(--white);
  background-color: var(--white);

  &::before {
    content: '';
    width: 1.125rem;
    height: 1.125rem;
    margin-right: 12px;
    filter: invert(77%) sepia(13%) saturate(189%) hue-rotate(169deg) brightness(90%) contrast(89%);
    background-image: url('/src/assets/search.svg');
  }

  &:focus-within {
    border-color: var(--main_blue);
    &::before {
      display: none;
    }
  }
`;
const SearchInput = styled.input`
  flex: 1;
  padding-right: 25px;
  outline: none;
  border: none;
  font-size: 1.125rem;

  &::placeholder {
    color: var(--gray);
  }
  &:focus {
    &::placeholder {
      opacity: 0;
    }
  }
`;
const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--main_blue);
  border-radius: 50px;
  width: 48px;
  height: 48px;
  border: none;
  cursor: pointer;

  > span {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;

    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }

  > svg {
    width: 21px;
    height: 21px;
    fill: var(--white);
  }
`;

interface SpreadProps {
  spread: boolean;
  setSpread: (status: boolean) => void;
}

const SearchBar = ({ spread, setSpread }: SpreadProps) => {
  const { nowWord, searchWord, savePreWord, spreadProps } = useSearch();
  const listRef = useRef<HTMLUListElement>(null);

  const moveToSpread = (e: KeyboardEvent<HTMLInputElement>) => {
    setSpread(true);
    if (e.key === 'ArrowDown') {
      if (listRef?.current) {
        listRef.current.focus();
      }
    } else if (e.key === 'Escape') setSpread(false);
  };

  return (
    <Container onClick={e => e.stopPropagation()}>
      <SearchInput
        value={nowWord}
        placeholder="질환명을 입력해 주세요."
        onClick={() => setSpread(true)}
        onChange={e => searchWord(e.target.value)}
        onKeyUp={e => e.key === 'Enter' && savePreWord()}
        onKeyDown={moveToSpread}
      />
      <SearchButton onClick={() => savePreWord()}>
        <span>검색버튼</span>
        <SearchIcon />
      </SearchButton>
      <SpreadBox spread={spread} listRef={listRef} {...spreadProps} />
    </Container>
  );
};

export default SearchBar;
