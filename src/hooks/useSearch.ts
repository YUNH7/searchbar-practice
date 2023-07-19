import { useState } from 'react';
import searchTrial, { Trial } from '../apis/search';

const useSearch = () => {
  const [nowWord, setNowWord] = useState('');
  const [searchHistory, setSearchHistory] = useState<Trial[]>([]);
  const [foundTrials, setFoundTrials] = useState<Trial[]>([]);

  const searchWord = async (word: string) => {
    setNowWord(word);
    const searchData = await searchTrial(word);
    setFoundTrials(searchData);
  };

  const savePreWord = (word: string = nowWord) =>
    !searchHistory.some(preWord => preWord.sickNm === word) &&
    setSearchHistory(pre => [...pre, { sickNm: word }]);

  const searchKeyWord = (word: string) => {
    searchWord(word);
    savePreWord(word);
  };
  const spreadProps = {
    nowWord,
    historyWords: searchHistory.slice(0, 7).reverse(),
    foundTrials: foundTrials.slice(0, 7),
    searchKeyWord,
  };
  return { nowWord, searchWord, savePreWord, spreadProps };
};

export default useSearch;
