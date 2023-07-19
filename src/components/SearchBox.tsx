import { useState } from 'react';
import { styled } from 'styled-components';
import { SearchBar, Title } from '.';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  max-width: 1040px;
  padding: 80px 0 160px;
  margin: 0 auto;
`;
const Notice = styled.p`
  position: absolute;
  top: 0;
  right: 0;
  color: var(--main_blue);
  font-size: 0.9rem;
  text-align: right;
`;

const SearchBox = () => {
  const [spread, setSpread] = useState(false);

  return (
    <Container onClick={() => setSpread(false)}>
      <Title title={'국내 모든 임상시험 검색하고\n온라인으로 참여하기'} />
      <SearchBar spread={spread} setSpread={setSpread} />
      <Notice>
        사용 전 서버를 실행해주세요
        <br />
        (서버가 실행 중이더라도 보이는 메세지입니다)
      </Notice>
    </Container>
  );
};

export default SearchBox;
