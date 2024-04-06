import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import {CreateProjectsDto} from './Dto/create-projects.dto';
import {UpdateProjectsDto} from './Dto/update-projects.dto';
import {ProjectsService} from './projects.service';
import {ApiTags} from '@nestjs/swagger';

@ApiTags('Projects')
@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}
  @Post('')
  create(@Body() createProjectsDto: CreateProjectsDto) {
    return this.projectsService.create(createProjectsDto);
  }

  @Get()
  findAll() {
    return this.projectsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProjectsDto: UpdateProjectsDto,
  ) {
    return this.projectsService.update(updateProjectsDto, id);
  }

  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectsService.remove(id);
  }
}
