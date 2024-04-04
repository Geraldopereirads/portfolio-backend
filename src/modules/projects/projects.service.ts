import {ConflictException, Injectable, NotFoundException} from '@nestjs/common';
import {CreateProjectsDto} from './Dto/create-projects.dto';
import {ProjectsRepository} from './repositories/projects.repository';
import {UpdateProjectsDto} from './Dto/update-projects.dto';

@Injectable()
export class ProjectsService {
  constructor(private projectsRepository: ProjectsRepository) {}
  async create(createProjectsDto: CreateProjectsDto) {
    const findProject = await this.projectsRepository.findByTitle(
      createProjectsDto.title,
    );

    if (findProject) {
      throw new ConflictException('Project already exists');
    }

    const project = await this.projectsRepository.create(createProjectsDto);

    return project;
  }

  async findAll() {
    const projects = await this.projectsRepository.findAll();

    return projects;
  }

  async findOne(id: string) {
    const projects = await this.projectsRepository.findOne(id);

    if (!projects) {
      throw new NotFoundException('Project not found');
    }

    return projects;
  }

  async update(data: UpdateProjectsDto, id: string) {
    const projects = await this.projectsRepository.update(data, id);

    if (!projects) {
      throw new NotFoundException('Project not found');
    }

    return projects;
  }

  async remove(id: string) {
    await this.projectsRepository.remove(id);
  }
}
