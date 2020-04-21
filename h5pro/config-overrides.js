const {
    override,
    fixBabelImports,
    addLessLoader,
    setWebpackPublicPath,
} = require('customize-cra')
const path = require('path')

// 生产环境
const isProd = process.env.NODE_ENV === "production"


module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),
  addLessLoader({
    javascriptEnabled: true,
  }),
    // config => {
    //暴露webpack的配置 config ,evn
    //1.修改、添加loader 配置 :
    // 所有的loaders规则是在config.module.rules(数组)的第二项
    // 即：config.module.rules[2].oneof  (如果不是，具体可以打印 一下是第几项目)
    // 修改 sass 配置 ，规则 loader 在第五项(具体看配置)
    // const loaders = config.module.rules.find(rule => Array.isArray(rule.oneOf))
    //   .oneOf
    // loaders[7].use.push({
    //   loader: 'style-resources-loader',
    //   options: {
    //     patterns: path.resolve(__dirname, 'src/styles/index.less') //全局引入公共的less 文件
    //   }
    // })

    // return config
//   }
    isProd ? setWebpackPublicPath('http://www.shenxf.com/antdmobile/') : undefined
)