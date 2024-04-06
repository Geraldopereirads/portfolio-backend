import {PartialType} from '@nestjs/swagger';
import {CreateProjectsDto} from './create-projects.dto';

export class UpdateProjectsDto extends PartialType(CreateProjectsDto) {}
