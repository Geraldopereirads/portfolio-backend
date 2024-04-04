import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FullstackService } from './fullstack.service';
import { CreateFullstackDto } from './dto/create-fullstack.dto';
import { UpdateFullstackDto } from './dto/update-fullstack.dto';

@Controller('fullstack')
export class FullstackController {
  constructor(private readonly fullstackService: FullstackService) {}

  @Post()
  create(@Body() createFullstackDto: CreateFullstackDto) {
    return this.fullstackService.create(createFullstackDto);
  }

  @Get()
  findAll() {
    return this.fullstackService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fullstackService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFullstackDto: UpdateFullstackDto) {
    return this.fullstackService.update(+id, updateFullstackDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fullstackService.remove(+id);
  }
}
