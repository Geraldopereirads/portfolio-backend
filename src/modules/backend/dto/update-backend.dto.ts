import {PartialType} from '@nestjs/swagger';
import {CreateBackendDto} from './create-backend.dto';

export class UpdateBackendDto extends PartialType(CreateBackendDto) {}
