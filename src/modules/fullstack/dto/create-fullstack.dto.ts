import {IsString, IsNotEmpty, IsOptional} from 'class-validator';

export class CreateFullstackDto {
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
