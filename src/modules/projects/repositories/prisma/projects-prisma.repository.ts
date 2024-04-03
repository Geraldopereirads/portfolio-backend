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
    const projects = await this.prisma.projects.findMany();
    return plainToInstance(Projects, projects);
  }

  async findByTitle(title: string): Promise<Projects> {
    const project = await this.prisma.projects.findUnique({
      where: {title},
    });
    return project;
  }

  async findOne(id: string): Promise<Projects> {
    const project = await this.prisma.projects.findUnique({
      where: {id},
    });

    return plainToInstance(Projects, project);
  }

  async update(data: UpdateProjectsDto, id: string): Promise<Projects> {
    const projects = await this.prisma.projects.update({
      where: {id},
      data: {...data},
    });

    return plainToInstance(Projects, projects);
  }

  async remove(id: string): Promise<void> {
    await this.prisma.projects.delete({
      where: {id},
    });
  }
}
