import axios from 'axios';

export const getSeller = () => {
    return axios.get('http://ustbhuangyi.com/sell/api/seller?id=2')
}