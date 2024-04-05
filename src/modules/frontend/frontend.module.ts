import {PrismaService} from './../database/prisma.service';
import {FrontendPrismaRepository} from './repositories/prisma/frontend-prisma.repository';
import {Module} from '@nestjs/common';
import {FrontendService} from './frontend.service';
import {FrontendController} from './frontend.controller';
import {FrontEndRepository} from './repositories/frontend.repository';

@Module({
  controllers: [FrontendController],
  providers: [
    FrontendService,
    PrismaService,
    {
      provide: FrontEndRepository,
      useClass: FrontendPrismaRepository,
    },
  ],
})
export class FrontendModule {}
