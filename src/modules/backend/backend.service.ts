import {ConflictException, Injectable, NotFoundException} from '@nestjs/common';
import {CreateBackendDto} from './dto/create-backend.dto';
import {UpdateBackendDto} from './dto/update-backend.dto';
import {BackendRepository} from './repositories/backend.repository';

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

  async remove(id: string) {
    await this.backendRepository.remove(id);
  }
}
