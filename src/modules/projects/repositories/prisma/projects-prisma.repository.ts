import {Injectable} from '@nestjs/common';
import {CreateProjectsDto} from '../../Dto/create-projects.dto';
import {UpdateProjectsDto} from '../../Dto/update-projects.dto';
import {Projects} from '../../entities/projects.entitie';
import {ProjectsRepository} from '../projects.repository';
import {PrismaService} from 'src/modules/database/prisma.service';
import {plainToInstance} from 'class-transformer';

@Injectable()
export class ProjectsPrismaRepository implements ProjectsRepository {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateProjectsDto): Promise<Projects> {
    const project = new Projects();
    Object.assign(project, {
      ...data,
    });

    const newProject = await this.prisma.projects.create({
      data: {...project},
    });

    return plainToInstance(Projects, newProject);
  }

  async findAll(): Promise<Projects[]> {
    throw new Error('Method not implemented.');
  }
  async findOne(id: string): Promise<Projects> {
    throw new Error('Method not implemented.');
  }
  async findByTitle(title: string): Promise<Projects> {
    throw new Error('Method not implemented.');
  }
  async update(data: UpdateProjectsDto, id: string): Promise<Projects> {
    throw new Error('Method not implemented.');
  }
  async remove(id: string): Promise<null> {
    throw new Error('Method not implemented.');
  }
}
