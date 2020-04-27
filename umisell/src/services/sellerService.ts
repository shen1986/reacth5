import Axios from './axios';

export const getSeller = async () => {
    return Axios.get('/api/getSeller');
};
