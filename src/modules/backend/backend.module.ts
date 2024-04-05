import {BackendPrismaRepository} from './repositories/prisma/backend-prisma.repository';
import {Module} from '@nestjs/common';
import {BackendService} from './backend.service';
import {BackendController} from './backend.controller';
import {BackendRepository} from './repositories/backend.repository';

@Module({
  controllers: [BackendController],
  providers: [
    BackendService,
    {
      provide: BackendRepository,
      useClass: BackendPrismaRepository,
    },
  ],
})
export class BackendModule {}
