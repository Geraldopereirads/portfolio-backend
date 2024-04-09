import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import {FullstackService} from './fullstack.service';
import {CreateFullstackDto} from './dto/create-fullstack.dto';
import {UpdateFullstackDto} from './dto/update-fullstack.dto';
import {ApiTags} from '@nestjs/swagger';
import {FileFieldsInterceptor} from '@nestjs/platform-express';

@ApiTags('FullStack')
@Controller('fullstack')
export class FullstackController {
  constructor(private readonly fullstackService: FullstackService) {}

  @Post('')
  create(@Body() createFullstackDto: CreateFullstackDto) {
    return this.fullstackService.create(createFullstackDto);
  }

  @Get()
  findAll() {
    return this.fullstackService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fullstackService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFullstackDto: UpdateFullstackDto,
  ) {
    return this.fullstackService.update(id, updateFullstackDto);
  }

  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fullstackService.remove(id);
  }

  @Patch('upload/:id')
  @UseInterceptors(FileFieldsInterceptor([{name: 'image', maxCount: 1}]))
  upload(
    @UploadedFiles()
    files: {
      image?: Express.Multer.File;
    },
    @Param('id') id: string,
  ) {
    const {image} = files;
    return this.fullstackService.upload(image[0], id);
  }
}
