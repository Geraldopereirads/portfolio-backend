import {PrismaService} from './../database/prisma.service';
import {FrontendPrismaRepository} from './repositories/prisma/frontend-prisma.repository';
import {BadRequestException, Module} from '@nestjs/common';
import {FrontendService} from './frontend.service';
import {FrontendController} from './frontend.controller';
import {FrontEndRepository} from './repositories/frontend.repository';
import {MulterModule} from '@nestjs/platform-express';
import {diskStorage} from 'multer';

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: './tmp',
        filename: (_, file, cb) => {
          cb(null, file.originalname);
        },
      }),
      fileFilter: (_, file, cb) => {
        if (file.mimetype === 'image/jpeg') {
          cb(null, true);
        } else {
          cb(new BadRequestException('Only jpeg format allowed'), false);
        }
      },
    }),
  ],

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
