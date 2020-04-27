// 导入Axios
import Axios from 'axios';
import router from 'umi/router';

// 设置Axios基础配置
// if (process.env.NODE_ENV === 'development') {
//     Axios.defaults.baseURL = 'http://127.0.0.1:8080';
// } else {
//     Axios.defaults.baseURL = 'https://www.shenxf.com:3003';
// }
Axios.defaults.timeout = 20000; // 20秒超时
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// 请求拦截
Axios.interceptors.request.use(
    config => {
        /*
         * 每次发送请求之前判断是否存在token
         * 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录状况
         * 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
         */
        const token = localStorage.getItem('token')
        if (token) {
            config.headers.Authorization = 'Bearer ' + token;
        }

        return config;
    },
    error => {
        return Promise.reject(error);
    },
);

// 对响应数据做点什么
Axios.interceptors.response.use(
    response => {
        return response;
    },
    (error: any) => {
        router.push('/login');

        // 对响应错误做点什么
        return Promise.reject(error);
    },
);

export default Axios;
