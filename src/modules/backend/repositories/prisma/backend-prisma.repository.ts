import {Injectable} from '@nestjs/common';
import {BackendRepository} from '../backend.repository';
import {CreateBackendDto} from '../../dto/create-backend.dto';
import {UpdateBackendDto} from '../../dto/update-backend.dto';
import {Backend} from '../../entities/backend.entity';
import {PrismaService} from 'src/modules/database/prisma.service';
import {plainToInstance} from 'class-transformer';

@Injectable()
export class BackendPrismaRepository implements BackendRepository {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateBackendDto): Promise<Backend> {
    const backEnd = new Backend();
    Object.assign(backEnd, {
      ...data,
    });

    const newBackend = await this.prisma.backend.create({
      data: {...backEnd},
    });

    return plainToInstance(Backend, newBackend);
  }

  async findAll(): Promise<Backend[]> {
    const backend = await this.prisma.backend.findMany();
    return plainToInstance(Backend, backend);
  }

  async findByTitle(title: string): Promise<Backend> {
    const backend = await this.prisma.backend.findUnique({
      where: {title},
    });
    return backend;
  }

  async findOne(id: string): Promise<Backend> {
    const backend = await this.prisma.backend.findUnique({
      where: {id},
    });

    return plainToInstance(Backend, backend);
  }

  async update(data: UpdateBackendDto, id: string): Promise<Backend> {
    const backend = await this.prisma.backend.update({
      where: {id},
      data: {...data},
    });

    return plainToInstance(Backend, backend);
  }

  async remove(id: string): Promise<void> {
    await this.prisma.backend.delete({
      where: {id},
    });
  }
}
