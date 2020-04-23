const {
    override,
    fixBabelImports,
    addLessLoader,
    setWebpackPublicPath,
    addWebpackAlias,
} = require('customize-cra')
const path = require('path')

// 通过相对路径取得绝对路径
function resolve(dir) {
    return path.join(__dirname, dir)
}

// 生产环境
const isProd = process.env.NODE_ENV === "production"

/** 开发的时候随便开一个sourcemap，到了生产环境就关掉 */
if (isProd) {
    process.env.GENERATE_SOURCEMAP = 'false'
}

module.exports = override(
    addWebpackAlias({
        '@': resolve('src'),
        '@/components': resolve('./src/components'),
        '@/assets': resolve('./src/assets'),
        '@/containers': resolve('./src/containers'),
        '@/config': resolve('./src/config'),
        '@/hooks': resolve('./src/hooks'),
        '@/models': resolve('./src/models'),
        '@/services': resolve('./src/services'),
        '@/styles': resolve('./src/styles'),
    }),
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: 'css',
    }),
    addLessLoader({
        javascriptEnabled: true,
    }),
    config => {
        //暴露webpack的配置 config ,evn
        //1.修改、添加loader 配置 :
        // 所有的loaders规则是在config.module.rules(数组)的第二项
        // 即：config.module.rules[2].oneof  (如果不是，具体可以打印 一下是第几项目)
        // 修改 sass 配置 ，规则 loader 在第五项(具体看配置)
        const loaders = config.module.rules.find(rule => Array.isArray(rule.oneOf))
        .oneOf
        loaders[7].use.push({
        loader: 'style-resources-loader',
        options: {
            patterns: [
            path.resolve(__dirname, 'src/styles/variables.less'), //全局引入变量 文件
            path.resolve(__dirname, 'src/styles/mixin.less') //全局引入mixin 文件
            ]
        }
        })

        return config
    },
    isProd ? setWebpackPublicPath('reactsell/') : undefined
)