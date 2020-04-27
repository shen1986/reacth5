import Axios from './axios';

export const getSeller = async () => {
    return Axios.get('http://localhost:8001/api/getSeller');
};
