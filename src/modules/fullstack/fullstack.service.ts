import { Injectable } from '@nestjs/common';
import { CreateFullstackDto } from './dto/create-fullstack.dto';
import { UpdateFullstackDto } from './dto/update-fullstack.dto';

@Injectable()
export class FullstackService {
  create(createFullstackDto: CreateFullstackDto) {
    return 'This action adds a new fullstack';
  }

  findAll() {
    return `This action returns all fullstack`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fullstack`;
  }

  update(id: number, updateFullstackDto: UpdateFullstackDto) {
    return `This action updates a #${id} fullstack`;
  }

  remove(id: number) {
    return `This action removes a #${id} fullstack`;
  }
}
