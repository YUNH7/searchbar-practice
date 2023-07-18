import { useState } from 'react';
import { styled } from 'styled-components';
import { SearchBar, Title } from '.';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  max-width: 1040px;
  padding: 80px 0 160px;
  margin: 0 auto;
`;

const SearchBox = () => {
  const [spread, setSpread] = useState(false);

  return (
    <Container onClick={() => setSpread(false)}>
      <Title title={'국내 모든 임상시험 검색하고\n온라인으로 참여하기'} />
      <SearchBar spread={spread} setSpread={setSpread} />
    </Container>
  );
};

export default SearchBox;
