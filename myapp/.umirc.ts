import { defineConfig } from 'umi';

export default defineConfig({
  dva:{
    immer: true
  },
  antd: {},
  nodeModulesTransform: {
    type: 'none',
  },
//   proxy: {
//     "/api": {
//       "target": "https://pvp.qq.com",
//       "changeOrigin": true,
//       "pathRewrite": { "^/api" : "" }
//     }
//   }
});
