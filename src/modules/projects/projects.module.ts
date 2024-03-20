import { Module } from "@nestjs/common";
import { ProjectsController } from "./projects.controller";
import { ProjectsService } from "./projects.service";
import { ProjectsRepository } from "./repositories/projects.repository";

@Module({
    controllers: [ProjectsController],
    providers: [
        ProjectsService
    {
            provide: ProjectsRepository,
            useClass:
    }
    ]
})
export class ProjectsModule { }