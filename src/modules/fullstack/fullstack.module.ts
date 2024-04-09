import {BadRequestException, Module} from '@nestjs/common';
import {FullstackService} from './fullstack.service';
import {FullstackController} from './fullstack.controller';
import {FullStackRepository} from './repositories/fullstack.repository';
import {FullStackPrismaRepository} from './repositories/prisma/fullstack-prisma.repository';
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
