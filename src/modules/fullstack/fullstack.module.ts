import { Module } from '@nestjs/common';
import { FullstackService } from './fullstack.service';
import { FullstackController } from './fullstack.controller';

@Module({
  controllers: [FullstackController],
  providers: [FullstackService],
})
export class FullstackModule {}
