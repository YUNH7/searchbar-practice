import { useState } from 'react';
import searchTrial from '../apis/search';

type Caching = {
  date: Date;
  data: Trial[];
};
type History = {
  [key: string]: Caching;
};
export type Trial = {
  sickCd?: string;
  sickNm: string;
};

const useSearch = () => {
  const [nowWord, setNowWord] = useState('');
  const [reqHistory, setReqHistory] = useState<History>({});
  const [searchHistory, setSearchHistory] = useState<Trial[]>([]);
  const [foundTrials, setFoundTrials] = useState<Trial[]>([]);

  const searchWord = async (word: string) => {
    setNowWord(word);

    const cached: Caching = reqHistory[word.slice(0, 1)];
    let trials: Trial[] = [];

    const getTrials = async (word: string) => {
      try {
        await searchTrial(word).then(res => {
          trials = res.data;
          setReqHistory({ ...reqHistory, [word]: { date: new Date(), data: trials } });
        });
      } catch (e: any) {
        trials = [];
      }
    };

    if (word.length === 1) {
      if (cached && +new Date() - +cached.date < 5 * 60 * 1000) {
        trials = cached.data;
      } else await getTrials(word);
    } else if (word.length > 1) {
      if (cached) trials = cached.data.filter(el => el.sickNm.includes(word));
      else await getTrials(word);
    }

    setFoundTrials(trials);
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
