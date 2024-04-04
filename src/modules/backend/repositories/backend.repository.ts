import {CreateBackendDto} from '../dto/create-backend.dto';
import {UpdateBackendDto} from '../dto/update-backend.dto';
import {Backend} from '../entities/backend.entity';

export abstract class BackendRepository {
  abstract create(data: CreateBackendDto): Promise<Backend>;
  abstract findAll(): Promise<Backend[]>;
  abstract findOne(id: string): Promise<Backend | null>;
  abstract findByTitle(title: string): Promise<Backend | null>;
  abstract update(data: UpdateBackendDto, id: string): Promise<Backend>;
  abstract remove(id: string): Promise<void>;
}
