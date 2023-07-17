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

    if (word.length === 1) {
      if (cached && +new Date() - +cached.date < 5 * 60 * 1000) {
        trials = cached.data;
      } else {
        try {
          await searchTrial(word).then(res => {
            trials = res.data;
            setReqHistory({ ...reqHistory, [word]: { date: new Date(), data: trials } });
          });
        } catch (e: any) {
          trials = [];
        }
      }
    } else if (word.length > 1) {
      trials = cached.data.filter(el => el.sickNm.includes(word));
    }

    setFoundTrials(trials);
  };

  const savePreWord = () =>
    !searchHistory.some(word => word.sickNm === nowWord) &&
    setSearchHistory(pre => [...pre, { sickNm: nowWord }]);

  return { nowWord, searchHistory, foundTrials, searchWord, savePreWord };
};

export default useSearch;
