import {Injectable} from '@nestjs/common';
import {FrontEndRepository} from '../frontend.repository';
import {CreateBackendDto} from 'src/modules/backend/dto/create-backend.dto';
import {UpdateFrontendDto} from '../../dto/update-frontend.dto';
import {Frontend} from '../../entities/frontend.entity';
import {PrismaService} from 'src/modules/database/prisma.service';
import {plainToInstance} from 'class-transformer';

@Injectable()
export class FrontendPrismaRepository implements FrontEndRepository {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateBackendDto): Promise<Frontend> {
    const frontend = new Frontend();
    Object.assign(frontend, {
      ...data,
    });

    const newFrontEnd = await this.prisma.frontend.create({
      data: {...frontend},
    });

    return plainToInstance(Frontend, newFrontEnd);
  }

  async findAll(): Promise<Frontend[]> {
    const frontend = await this.prisma.frontend.findMany();

    return plainToInstance(Frontend, frontend);
  }

  async findByTitle(title: string): Promise<Frontend> {
    const frontend = await this.prisma.frontend.findUnique({
      where: {title},
    });

    return frontend;
  }

  async findOne(id: string): Promise<Frontend> {
    const frontend = await this.prisma.frontend.findUnique({
      where: {id},
    });

    return plainToInstance(Frontend, frontend);
  }

  async update(data: UpdateFrontendDto, id: string): Promise<Frontend> {
    const frontend = await this.prisma.frontend.update({
      where: {id},
      data: {...data},
    });

    return plainToInstance(Frontend, frontend);
  }

  async remove(id: string): Promise<void> {
    await this.prisma.frontend.delete({
      where: {id},
    });
  }
}
