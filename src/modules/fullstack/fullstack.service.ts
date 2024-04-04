import {ConflictException, Injectable, NotFoundException} from '@nestjs/common';
import {CreateFullstackDto} from './dto/create-fullstack.dto';
import {UpdateFullstackDto} from './dto/update-fullstack.dto';
import {FullStackRepository} from './repositories/fullstack.repository';

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

  async remove(id: string) {
    await this.fullstackRepository.remove(id);
  }
}
