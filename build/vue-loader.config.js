// const docLoader = require.resolve('./doc-loader')
module.exports = (isDev) => {
  return {
    preservewhitepace: true,  //去除vue组件中不小心加入的空格
    extractCSS: !isDev,
    // cssModules: {
    //   localidentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
    //   camelCase: true
    // },
    // hotReload: false, // 根据环境变量生成
    // loaders: {
    //   'docs': docLoader,
    //   'js': 'coffe-loader',
    //   // html, style
    // }, // 自定义组件
    // preLoader: {
    // }, // 
    // postLoader: {
    // }
  }
}