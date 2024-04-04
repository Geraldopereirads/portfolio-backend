import {CreateBackendDto} from 'src/modules/backend/dto/create-backend.dto';
import {Frontend} from '../entities/frontend.entity';
import {UpdateFrontendDto} from '../dto/update-frontend.dto';

export abstract class FrontEndRepository {
  abstract create(data: CreateBackendDto): Promise<Frontend>;
  abstract findAll(): Promise<Frontend[]>;
  abstract findOne(id: string): Promise<Frontend | null>;
  abstract findByTitle(title: string): Promise<Frontend | null>;
  abstract update(data: UpdateFrontendDto, id: string): Promise<Frontend>;
  abstract remove(id: string): Promise<void>;
}
