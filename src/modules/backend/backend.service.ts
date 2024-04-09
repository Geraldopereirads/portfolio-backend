import {unlink} from 'node:fs';
import {ConflictException, Injectable, NotFoundException} from '@nestjs/common';
import {CreateBackendDto} from './dto/create-backend.dto';
import {UpdateBackendDto} from './dto/update-backend.dto';
import {BackendRepository} from './repositories/backend.repository';
import {v2 as cloudinary} from 'cloudinary';

@Injectable()
export class BackendService {
  constructor(private backendRepository: BackendRepository) {}
  async create(createBackendDto: CreateBackendDto) {
    const findBackend = await this.backendRepository.findByTitle(
      createBackendDto.title,
    );

    if (findBackend) {
      throw new ConflictException('Backend already exists');
    }

    const backend = await this.backendRepository.create(createBackendDto);

    return backend;
  }

  async findAll() {
    const backend = await this.backendRepository.findAll();
    return backend;
  }

  async findOne(id: string) {
    const backend = await this.backendRepository.findOne(id);

    if (!backend) {
      throw new NotFoundException('Backend not found');
    }

    return backend;
  }

  async update(data: UpdateBackendDto, id: string) {
    const backend = await this.backendRepository.update(data, id);

    if (!backend) {
      throw new NotFoundException('Backend not found');
    }

    return backend;
  }

  async upload(image?: Express.Multer.File, id?: string) {
    cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.API_KEY,
      api_secret: process.env.API_SECRET,
    });

    const findImage = await this.backendRepository.findOne(id);

    if (!findImage) {
      throw new NotFoundException('Image not found');
    }

    const uploadImage = await cloudinary.uploader.upload(
      image.path,
      {resource_type: 'image'},
      (error, result) => result,
    );

    const updateImage = await this.backendRepository.update(
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
    await this.backendRepository.remove(id);
  }
}
