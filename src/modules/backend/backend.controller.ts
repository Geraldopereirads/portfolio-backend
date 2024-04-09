import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import {BackendService} from './backend.service';
import {CreateBackendDto} from './dto/create-backend.dto';
import {UpdateBackendDto} from './dto/update-backend.dto';
import {ApiTags} from '@nestjs/swagger';
import {FileFieldsInterceptor} from '@nestjs/platform-express';

@ApiTags('BackEnd')
@Controller('backend')
export class BackendController {
  constructor(private readonly backendService: BackendService) {}

  @Post('')
  create(@Body() createBackendDto: CreateBackendDto) {
    return this.backendService.create(createBackendDto);
  }

  @Get()
  findAll() {
    return this.backendService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.backendService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBackendDto: UpdateBackendDto) {
    return this.backendService.update(updateBackendDto, id);
  }

  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.backendService.remove(id);
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
    return this.backendService.upload(image[0], id);
  }
}
