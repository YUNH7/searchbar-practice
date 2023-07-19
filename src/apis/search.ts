import axios from 'axios';

const trialAPI = axios.create({ baseURL: import.meta.env.VITE_ASSIGNMENT_API });

export type Trial = {
  sickCd?: string;
  sickNm: string;
};
type Caching = {
  date: Date;
  data: Trial[];
};
type History = {
  [key: string]: Caching;
};

const searchTrial = (() => {
  const reqHistory: History = {};

  return async (word: string) => {
    if (!word.length) return [];

    let cached: Caching = reqHistory[word];
    if (!cached || +new Date() - +cached.date > 5 * 60 * 1000) {
      await trialAPI(`/sick?q=${word}`)
        .then(res => {
          console.info('calling api');
          return res;
        })
        .then((res: any) => {
          reqHistory[word] = { date: new Date(), data: res.data };
          cached = reqHistory[word];
        })
        .catch(err => {
          console.error(err);
          return [];
        });
    }

    return cached.data;
  };
})();

export default searchTrial;
