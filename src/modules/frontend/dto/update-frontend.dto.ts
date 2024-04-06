import {PartialType} from '@nestjs/swagger';
import {CreateFrontendDto} from './create-frontend.dto';

export class UpdateFrontendDto extends PartialType(CreateFrontendDto) {}
