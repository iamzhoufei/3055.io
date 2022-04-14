import { Module } from '@nestjs/common'
import { ApiController } from './api.controller'
import { DetailController } from './index.controller'
import { ApiDetailService } from './index.service'

@Module({
  imports: [

  ],
  controllers: [DetailController, ApiController],
  providers: [ApiDetailService]
})

export class DetailModule {}
