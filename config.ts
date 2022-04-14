import type { UserConfig } from 'ssr-types'

const userConfig: UserConfig = {
  proxy: {
    '/api': {
      pathRewrite: { '^/api': '' },
      target: 'http://v.juhe.cn',
      changeOrigin: true
    }
  }
}

export { userConfig }
