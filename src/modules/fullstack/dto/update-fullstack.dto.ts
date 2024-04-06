import {PartialType} from '@nestjs/swagger';
import {CreateFullstackDto} from './create-fullstack.dto';

export class UpdateFullstackDto extends PartialType(CreateFullstackDto) {}
