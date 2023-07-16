import { styled } from 'styled-components';
import { ReactComponent as SearchIcon } from '../assets/search.svg';

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 490px;
  padding: 8px 8px 8px 24px;
  border-radius: 42px;
  border: 2px solid white;
  background-color: white;

  &::before {
    content: '';
    width: 1.125rem;
    height: 1.125rem;
    margin-right: 12px;
    filter: invert(77%) sepia(13%) saturate(189%) hue-rotate(169deg) brightness(90%) contrast(89%);
    background-image: url('/src/assets/search.svg');
  }

  &:focus-within {
    border-color: #007be9;
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
  letter-spacing: -0.018em;

  &::placeholder {
    color: #a7afb7;
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
  background-color: #007be9;
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
    fill: white;
  }
`;

const SearchBar = () => {
  return (
    <Container>
      <SearchInput placeholder="질환명을 입력해 주세요." />
      <SearchButton>
        <span>검색버튼</span>
        <SearchIcon />
      </SearchButton>
    </Container>
  );
};

export default SearchBar;
