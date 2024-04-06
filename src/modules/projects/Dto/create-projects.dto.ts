import {ApiProperty} from '@nestjs/swagger';
import {IsNotEmpty, IsOptional, IsString} from 'class-validator';

export class CreateProjectsDto {
  @ApiProperty({
    description: 'Nome do Projeto',
    type: String,
    default: 'Todos os Projetos',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  image: string | null;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  url: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  github: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description: string;
}
