import { PartialType } from '@nestjs/mapped-types';
import { CreateFrontendDto } from './create-frontend.dto';

export class UpdateFrontendDto extends PartialType(CreateFrontendDto) {}
