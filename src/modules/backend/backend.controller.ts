import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BackendService } from './backend.service';
import { CreateBackendDto } from './dto/create-backend.dto';
import { UpdateBackendDto } from './dto/update-backend.dto';

@Controller('backend')
export class BackendController {
  constructor(private readonly backendService: BackendService) {}

  @Post()
  create(@Body() createBackendDto: CreateBackendDto) {
    return this.backendService.create(createBackendDto);
  }

  @Get()
  findAll() {
    return this.backendService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.backendService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBackendDto: UpdateBackendDto) {
    return this.backendService.update(+id, updateBackendDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.backendService.remove(+id);
  }
}
