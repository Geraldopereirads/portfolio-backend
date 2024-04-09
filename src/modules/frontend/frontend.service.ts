import {unlink} from 'node:fs';
import {ConflictException, Injectable, NotFoundException} from '@nestjs/common';
import {CreateFrontendDto} from './dto/create-frontend.dto';
import {UpdateFrontendDto} from './dto/update-frontend.dto';
import {FrontEndRepository} from './repositories/frontend.repository';
import {v2 as cloudinary} from 'cloudinary';

@Injectable()
export class FrontendService {
  constructor(private frontendRepository: FrontEndRepository) {}
  async create(createFrontendDto: CreateFrontendDto) {
    const findFrontEnd = await this.frontendRepository.findByTitle(
      createFrontendDto.title,
    );

    if (findFrontEnd) {
      throw new ConflictException('FrontEnd already exists');
    }

    const frontend = await this.frontendRepository.create(createFrontendDto);

    return frontend;
  }

  async findAll() {
    const frontend = await this.frontendRepository.findAll();

    return frontend;
  }

  async findOne(id: string) {
    const frontend = await this.frontendRepository.findOne(id);

    if (!frontend) {
      throw new NotFoundException('FrontEnd not found');
    }

    return frontend;
  }

  async update(data: UpdateFrontendDto, id: string) {
    const frontend = await this.frontendRepository.update(data, id);

    if (!frontend) {
      throw new NotFoundException('FrontEnd not found');
    }

    return frontend;
  }

  async upload(image?: Express.Multer.File, id?: string) {
    cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.API_KEY,
      api_secret: process.env.API_SECRET,
    });

    const findImage = await this.frontendRepository.findOne(id);

    if (!findImage) {
      throw new NotFoundException('Image not found');
    }

    const uploadImage = await cloudinary.uploader.upload(
      image.path,
      {resource_type: 'image'},
      (error, result) => result,
    );

    const updateImage = await this.frontendRepository.update(
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
    await this.frontendRepository.remove(id);
  }
}
