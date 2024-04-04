import {ConflictException, Injectable, NotFoundException} from '@nestjs/common';
import {CreateFrontendDto} from './dto/create-frontend.dto';
import {UpdateFrontendDto} from './dto/update-frontend.dto';
import {FrontEndRepository} from './repositories/frontend.repository';

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

  async remove(id: string) {
    await this.frontendRepository.remove(id);
  }
}
