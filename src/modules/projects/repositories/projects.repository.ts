import {Projects} from './../entities/projects.entitie';
import {CreateProjectsDto} from './../Dto/create-projects.dto';
import {UpdateProjectsDto} from '../Dto/update-projects.dto';

export abstract class ProjectsRepository {
  abstract create(data: CreateProjectsDto): Promise<Projects>;
  abstract findAll(): Promise<Projects[]>;
  abstract findByTitle(title: string): Promise<Projects | null>;
  abstract findOne(id: string): Promise<Projects | null>;
  abstract update(data: UpdateProjectsDto, id: string): Promise<Projects>;
  abstract remove(id: string): Promise<void>;
}
