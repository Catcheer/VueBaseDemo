const modules = require.context('./', true, /^\.\/.*\.(png|jpe?g)$/)

export default modules.keys().reduce((module, key) => {
  module[key.replace(/_[a-z]/g, $1 => $1.split('_')[1].toUpperCase())
    .replace(/(^\.\/)|(.png|.jpe?g|.svg)$/g, '').replace(/@/g, '_')] = modules(key)
  return module
}, {})
