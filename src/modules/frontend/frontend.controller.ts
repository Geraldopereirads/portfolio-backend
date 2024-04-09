import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import {FrontendService} from './frontend.service';
import {CreateFrontendDto} from './dto/create-frontend.dto';
import {UpdateFrontendDto} from './dto/update-frontend.dto';
import {ApiTags} from '@nestjs/swagger';
import {FileFieldsInterceptor} from '@nestjs/platform-express';

@ApiTags('FrontEnd')
@Controller('frontend')
export class FrontendController {
  constructor(private readonly frontendService: FrontendService) {}

  @Post('')
  create(@Body() createFrontendDto: CreateFrontendDto) {
    return this.frontendService.create(createFrontendDto);
  }

  @Get()
  findAll() {
    return this.frontendService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.frontendService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFrontendDto: UpdateFrontendDto,
  ) {
    return this.frontendService.update(updateFrontendDto, id);
  }

  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.frontendService.remove(id);
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
    return this.frontendService.upload(image[0], id);
  }
}
