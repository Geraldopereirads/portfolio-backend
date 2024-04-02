import {IsNotEmpty, IsOptional, IsString} from 'class-validator';

export class CreateProjectsDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  image: string | null;

  @IsString()
  @IsNotEmpty()
  url: string;

  @IsString()
  @IsNotEmpty()
  github: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}
