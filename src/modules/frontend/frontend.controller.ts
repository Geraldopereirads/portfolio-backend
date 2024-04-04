import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FrontendService } from './frontend.service';
import { CreateFrontendDto } from './dto/create-frontend.dto';
import { UpdateFrontendDto } from './dto/update-frontend.dto';

@Controller('frontend')
export class FrontendController {
  constructor(private readonly frontendService: FrontendService) {}

  @Post()
  create(@Body() createFrontendDto: CreateFrontendDto) {
    return this.frontendService.create(createFrontendDto);
  }

  @Get()
  findAll() {
    return this.frontendService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.frontendService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFrontendDto: UpdateFrontendDto) {
    return this.frontendService.update(+id, updateFrontendDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.frontendService.remove(+id);
  }
}