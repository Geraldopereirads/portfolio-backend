import {Module} from '@nestjs/common';
import {ProjectsController} from './projects.controller';
import {ProjectsService} from './projects.service';
import {ProjectsRepository} from './repositories/projects.repository';
import {ProjectsPrismaRepository} from './repositories/prisma/projects-prisma.repository';
import {PrismaService} from '../database/prisma.service';

@Module({
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
