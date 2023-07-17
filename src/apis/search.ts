import axios from 'axios';

const trialAPI = axios.create({ baseURL: import.meta.env.VITE_ASSIGNMENT_API });

const searchTrial = (word: string) =>
  trialAPI(`/sick?q=${word}`).then(res => {
    console.info('calling api');
    return res;
  });

export default searchTrial;
