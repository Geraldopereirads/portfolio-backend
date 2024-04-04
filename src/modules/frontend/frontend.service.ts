import { Injectable } from '@nestjs/common';
import { CreateFrontendDto } from './dto/create-frontend.dto';
import { UpdateFrontendDto } from './dto/update-frontend.dto';

@Injectable()
export class FrontendService {
  create(createFrontendDto: CreateFrontendDto) {
    return 'This action adds a new frontend';
  }

  findAll() {
    return `This action returns all frontend`;
  }

  findOne(id: number) {
    return `This action returns a #${id} frontend`;
  }

  update(id: number, updateFrontendDto: UpdateFrontendDto) {
    return `This action updates a #${id} frontend`;
  }

  remove(id: number) {
    return `This action removes a #${id} frontend`;
  }
}
