import {CreateFullstackDto} from '../dto/create-fullstack.dto';
import {UpdateFullstackDto} from '../dto/update-fullstack.dto';
import {FullStack} from '../entities/fullstack.entity';

export abstract class FullStackRepository {
  abstract create(data: CreateFullstackDto): Promise<FullStack>;
  abstract findAll(): Promise<FullStack[]>;
  abstract findByTitle(title: string): Promise<FullStack | null>;
  abstract findOne(id: string): Promise<FullStack | null>;
  abstract update(data: UpdateFullstackDto, id: string): Promise<FullStack>;
  abstract remove(id: string): Promise<void>;
}
