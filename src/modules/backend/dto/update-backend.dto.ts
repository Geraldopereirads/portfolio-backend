import { PartialType } from '@nestjs/mapped-types';
import { CreateBackendDto } from './create-backend.dto';

export class UpdateBackendDto extends PartialType(CreateBackendDto) {}
