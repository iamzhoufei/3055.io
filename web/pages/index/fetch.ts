import { Store } from 'vuex'
import { RouteLocationNormalizedLoaded } from 'vue-router'
import { ISSRNestContext } from 'ssr-types'
import { getTodayEvent } from './services'
// import { IndexData } from '~/typings/data'

// nest中对应模块提供的service
interface IApiService {
  index: () => Promise<any>
  getTodayEvent: () => Promise<any>
}

interface Params {
  store: Store<any>
  router: RouteLocationNormalizedLoaded
}

export default async (params: Params, ctx?: ISSRNestContext<{
  apiService?: IApiService
}>) => {
  // { store, router }
  // console.log(params)
  // console.log(__isBrowser__)

  /**
   * 这里对 __isBrowser__ 的判断主要是为了区分 服务端渲染模式 还是 客户端渲染
   *
   * 如果是第一次打开页面，会使用 服务端渲染模式
   *
   * 如果是使用前端路由(router.push / router.replace) 则依然是客户端渲染
   *
   * 所以对于需要获取的初始数据来说，这里的判断是为了保证两种渲染模式都可以发送请求，拿到数据
   *
   */

  // 阅读文档获得更多信息 http://doc.ssr-fc.com/docs/features$fetch#%E5%88%A4%E6%96%AD%E5%BD%93%E5%89%8D%E7%8E%AF%E5%A2%83
  const data = __isBrowser__ ? await getTodayEvent({ date: '4/14' }) : await ctx?.apiService?.getTodayEvent?.()

  // console.log(data.data)
  return data.data ?? {}
}
