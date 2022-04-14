import { Injectable } from '@nestjs/common'
// import { Ddata } from '~/typings/data'

@Injectable()
export class ApiDetailService {
  async index (id): Promise<any> {
    return await Promise.resolve({})
  }
}
