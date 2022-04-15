import { IWindow } from 'ssr-types'

declare global {
  interface Window {
    __USE_SSR__?: IWindow['__USE_SSR__']
    __USE_VITE__?: boolean
    __INITIAL_DATA__?: IWindow['__INITIAL_DATA__']
  }
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const __isBrowser__: Boolean
}
