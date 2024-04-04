import { Module } from '@nestjs/common';
import { BackendService } from './backend.service';
import { BackendController } from './backend.controller';

@Module({
  controllers: [BackendController],
  providers: [BackendService],
})
export class BackendModule {}
