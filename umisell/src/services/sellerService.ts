import Axios from './axios';
import axios from 'axios'

export const getSeller = async () => {
    return Axios.get('http://localhost:8001/api/getSeller');
};
