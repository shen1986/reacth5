const { override, fixBabelImports, setWebpackPublicPath } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),
  setWebpackPublicPath('http://www.shenxf.com/antdmobile/')
);