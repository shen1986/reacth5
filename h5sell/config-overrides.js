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
    isProd ? setWebpackPublicPath('http:www.shenxf.com/reactsell/') : undefined
)