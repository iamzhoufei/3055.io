import { Injectable } from '@nestjs/common'
import axios from 'axios'
// import { IndexData } from '~/typings/data'

@Injectable()
export class ApiService {
  async index (): Promise<any> {
    return await Promise.resolve({})
  }

  async getTodayEvent (): Promise<any> {
    return await axios({
      url: 'http://v.juhe.cn/todayOnhistory/queryEvent.php',
      method: 'GET',
      params: {
        date: '4/14',
        key: '8bf78abb444705f75ec9f2d2f2554183'
      }
    })
  }
}
