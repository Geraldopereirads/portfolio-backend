import {BackendPrismaRepository} from './repositories/prisma/backend-prisma.repository';
import {BadRequestException, Module} from '@nestjs/common';
import {BackendService} from './backend.service';
import {BackendController} from './backend.controller';
import {BackendRepository} from './repositories/backend.repository';
import {PrismaService} from '../database/prisma.service';
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
