import Axios from './axios';

export const getGoods = async () => {
    return Axios.get('/api/getGoods');
};
