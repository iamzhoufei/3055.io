import { Module } from '@nestjs/common'
import { indexModule, DetailModule, ErrorModule } from './modules'

@Module({
  imports: [ErrorModule, DetailModule, indexModule]
})
export class AppModule {}
