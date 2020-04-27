import { IConfig } from 'umi-types';

const config: IConfig = {
    treeShaking: true,
    // 全局路由配置
    routes: [
        {
            path: '/',
            component: '../layouts/index',
            routes: [{ path: '/', component: '../pages/index' }],
        },
    ],
    plugins: [
        [
            'umi-plugin-react',
            {
                antd: true,
                dva: true,
                dynamicImport: { webpackChunkName: true },
                title: 'umi模板',
                dll: true,

                routes: {
                    exclude: [
                        /models\//,
                        /services\//,
                        /model\.(t|j)sx?$/,
                        /service\.(t|j)sx?$/,
                        /components\//,
                    ],
                },
            },
        ],
    ],
};

export default config;
