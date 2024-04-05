import {Module} from '@nestjs/common';
import {FullstackService} from './fullstack.service';
import {FullstackController} from './fullstack.controller';
import {FullStackRepository} from './repositories/fullstack.repository';
import {FullStackPrismaRepository} from './repositories/prisma/fullstack-prisma.repository';

@Module({
  controllers: [FullstackController],
  providers: [
    FullstackService,
    {
      provide: FullStackRepository,
      useClass: FullStackPrismaRepository,
    },
  ],
})
export class FullstackModule {}
