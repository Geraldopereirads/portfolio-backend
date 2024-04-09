import {BadRequestException, Module} from '@nestjs/common';
import {ProjectsController} from './projects.controller';
import {ProjectsService} from './projects.service';
import {ProjectsRepository} from './repositories/projects.repository';
import {ProjectsPrismaRepository} from './repositories/prisma/projects-prisma.repository';
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

  controllers: [ProjectsController],
  providers: [
    ProjectsService,
    PrismaService,
    {
      provide: ProjectsRepository,
      useClass: ProjectsPrismaRepository,
    },
  ],
})
export class ProjectsModule {}
