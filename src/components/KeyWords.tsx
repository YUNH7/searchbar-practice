import { styled } from 'styled-components';

const WordsBox = styled.ul`
  display: flex;
  gap: 0.5rem;
  margin: 1rem 0;
`;
const KeyWord = styled.li`
  background-color: var(--skyblue);
  color: var(--text_blue);
  font-size: 0.9rem;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  cursor: pointer;
`;

interface Props {
  words: string[];
  searchWord: (word: string) => void;
}

const KeyWords = ({ words, searchWord }: Props) => {
  return (
    <WordsBox>
      {words.map(word => (
        <KeyWord key={word} role="button" onClick={() => searchWord(word)}>
          {word}
        </KeyWord>
      ))}
    </WordsBox>
  );
};

export default KeyWords;
