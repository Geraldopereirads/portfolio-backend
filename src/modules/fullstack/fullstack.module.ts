import {Module} from '@nestjs/common';
import {FullstackService} from './fullstack.service';
import {FullstackController} from './fullstack.controller';
import {FullStackRepository} from './repositories/fullstack.repository';
import {FullStackPrismaRepository} from './repositories/prisma/fullstack-prisma.repository';
import {PrismaService} from '../database/prisma.service';

@Module({
  controllers: [FullstackController],
  providers: [
    FullstackService,
    PrismaService,
    {
      provide: FullStackRepository,
      useClass: FullStackPrismaRepository,
    },
  ],
})
export class FullstackModule {}
