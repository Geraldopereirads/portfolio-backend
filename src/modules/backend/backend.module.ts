import {BackendPrismaRepository} from './repositories/prisma/backend-prisma.repository';
import {Module} from '@nestjs/common';
import {BackendService} from './backend.service';
import {BackendController} from './backend.controller';
import {BackendRepository} from './repositories/backend.repository';
import {PrismaService} from '../database/prisma.service';

@Module({
  controllers: [BackendController],
  providers: [
    BackendService,
    PrismaService,
    {
      provide: BackendRepository,
      useClass: BackendPrismaRepository,
    },
  ],
})
export class BackendModule {}
