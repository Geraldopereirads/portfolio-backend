import {Injectable} from '@nestjs/common';
import {FullStackRepository} from '../fullstack.repository';
import {CreateFullstackDto} from '../../dto/create-fullstack.dto';
import {UpdateFullstackDto} from '../../dto/update-fullstack.dto';
import {FullStack} from '../../entities/fullstack.entity';
import {PrismaService} from 'src/modules/database/prisma.service';
import {plainToInstance} from 'class-transformer';

@Injectable()
export class FullStackPrismaRepository implements FullStackRepository {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateFullstackDto): Promise<FullStack> {
    const fullstack = new FullStack();
    Object.assign(fullstack, {
      ...data,
    });

    const newFullStack = await this.prisma.fullStack.create({
      data: {...fullstack},
    });

    return plainToInstance(FullStack, newFullStack);
  }
  async findAll(): Promise<FullStack[]> {
    const fullstack = await this.prisma.fullStack.findMany();

    return plainToInstance(FullStack, fullstack);
  }
  async findByTitle(title: string): Promise<FullStack> {
    const fullstack = await this.prisma.fullStack.findUnique({
      where: {title},
    });

    return fullstack;
  }
  async findOne(id: string): Promise<FullStack> {
    const fullstack = await this.prisma.fullStack.findUnique({
      where: {id},
    });

    return plainToInstance(FullStack, fullstack);
  }
  async update(data: UpdateFullstackDto, id: string): Promise<FullStack> {
    const fullstack = await this.prisma.fullStack.update({
      where: {id},
      data: {...data},
    });

    return plainToInstance(FullStack, fullstack);
  }
  async remove(id: string): Promise<void> {
    await this.prisma.fullStack.delete({
      where: {id},
    });
  }
}
