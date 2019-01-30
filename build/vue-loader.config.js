module.exports = (isDev) => {
  return {
    preservewhitepace: true,  //去除vue组件中不小心加入的空格
    extractCSS: isDev
  }
}