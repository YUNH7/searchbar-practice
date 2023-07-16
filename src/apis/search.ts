import axios from 'axios';

const trialAPI = axios.create({ baseURL: import.meta.env.VITE_ASSIGNMENT_API });

const searchTrial = (word: string) => trialAPI(`/sick?q=${word}`);

export default searchTrial;
