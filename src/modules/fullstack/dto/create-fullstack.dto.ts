import {ApiProperty} from '@nestjs/swagger';
import {IsString, IsNotEmpty, IsOptional} from 'class-validator';

export class CreateFullstackDto {
  @ApiProperty({
    description: 'Nome do Projeto',
    type: String,
    default: 'Projeto FullStack',
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
