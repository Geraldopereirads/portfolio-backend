import { PartialType } from '@nestjs/mapped-types';
import { CreateFullstackDto } from './create-fullstack.dto';

export class UpdateFullstackDto extends PartialType(CreateFullstackDto) {}
