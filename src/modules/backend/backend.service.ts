import { Injectable } from '@nestjs/common';
import { CreateBackendDto } from './dto/create-backend.dto';
import { UpdateBackendDto } from './dto/update-backend.dto';

@Injectable()
export class BackendService {
  create(createBackendDto: CreateBackendDto) {
    return 'This action adds a new backend';
  }

  findAll() {
    return `This action returns all backend`;
  }

  findOne(id: number) {
    return `This action returns a #${id} backend`;
  }

  update(id: number, updateBackendDto: UpdateBackendDto) {
    return `This action updates a #${id} backend`;
  }

  remove(id: number) {
    return `This action removes a #${id} backend`;
  }
}
