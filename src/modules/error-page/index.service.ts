import { Injectable } from '@nestjs/common'
// import { IndexData } from '~/typings/data'

@Injectable()
export class ApiService {
  async index (): Promise<any> {
    return await Promise.resolve({})
  }
}
