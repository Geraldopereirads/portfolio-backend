import {unlink} from 'node:fs';
import {ConflictException, Injectable, NotFoundException} from '@nestjs/common';
import {CreateProjectsDto} from './Dto/create-projects.dto';
import {ProjectsRepository} from './repositories/projects.repository';
import {UpdateProjectsDto} from './Dto/update-projects.dto';
import {v2 as cloudinary} from 'cloudinary';

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

  async upload(image?: Express.Multer.File, id?: string) {
    cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.API_KEY,
      api_secret: process.env.API_SECRET,
    });

    const findImage = await this.projectsRepository.findOne(id);

    if (!findImage) {
      throw new NotFoundException('Image not found');
    }

    const uploadImage = await cloudinary.uploader.upload(
      image.path,
      {resource_type: 'image'},
      (error, result) => result,
    );

    const updateImage = await this.projectsRepository.update(
      {
        image: uploadImage.secure_url,
      },
      id,
    );

    unlink(image.path, (error) => {
      if (error) console.log(error);
    });

    return updateImage;
  }

  async remove(id: string) {
    await this.projectsRepository.remove(id);
  }
}
