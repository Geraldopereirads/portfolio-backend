import {unlink} from 'node:fs';
import {ConflictException, Injectable, NotFoundException} from '@nestjs/common';
import {CreateFullstackDto} from './dto/create-fullstack.dto';
import {UpdateFullstackDto} from './dto/update-fullstack.dto';
import {FullStackRepository} from './repositories/fullstack.repository';
import {v2 as cloudinary} from 'cloudinary';

@Injectable()
export class FullstackService {
  constructor(private fullstackRepository: FullStackRepository) {}
  async create(createFullstackDto: CreateFullstackDto) {
    const findFullStack = await this.fullstackRepository.findByTitle(
      createFullstackDto.title,
    );

    if (findFullStack) {
      throw new ConflictException('FullStack already exists');
    }

    const fullstack = await this.fullstackRepository.create(createFullstackDto);

    return fullstack;
  }

  async findAll() {
    const fullstack = await this.fullstackRepository.findAll();
    return fullstack;
  }

  async findOne(id: string) {
    const fullstack = await this.fullstackRepository.findOne(id);

    if (!fullstack) {
      throw new NotFoundException('FullStack not found');
    }

    return fullstack;
  }

  async update(id: string, data: UpdateFullstackDto) {
    const fullstack = await this.fullstackRepository.update(data, id);

    if (!fullstack) {
      throw new NotFoundException('FullStack not found');
    }

    return fullstack;
  }

  async upload(image?: Express.Multer.File, id?: string) {
    cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.API_KEY,
      api_secret: process.env.API_SECRET,
    });

    const findImage = await this.fullstackRepository.findOne(id);

    if (!findImage) {
      throw new NotFoundException('Image not found');
    }

    const uploadImage = await cloudinary.uploader.upload(
      image.path,
      {resource_type: 'image'},
      (error, result) => result,
    );

    const updateImage = await this.fullstackRepository.update(
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
    await this.fullstackRepository.remove(id);
  }
}
