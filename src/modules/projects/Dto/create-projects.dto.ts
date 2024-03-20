import { IsOptional, IsString } from 'class-validator';

export class CreateProjectsDto {
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  image: string | null;

  @IsString()
  url: string;

  @IsString()
  github: string;

  @IsString()
  description: string;
}
