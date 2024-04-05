import {FrontendPrismaRepository} from './repositories/prisma/frontend-prisma.repository';
import {Module} from '@nestjs/common';
import {FrontendService} from './frontend.service';
import {FrontendController} from './frontend.controller';
import {FrontEndRepository} from './repositories/frontend.repository';

@Module({
  controllers: [FrontendController],
  providers: [
    FrontendService,
    {
      provide: FrontEndRepository,
      useClass: FrontendPrismaRepository,
    },
  ],
})
export class FrontendModule {}
