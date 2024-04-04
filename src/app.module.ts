import {Module} from '@nestjs/common';
import {ProjectsModule} from './modules/projects/projects.module';
import { BackendModule } from './modules/backend/backend.module';
import { FrontendModule } from './modules/frontend/frontend.module';
@Module({
  imports: [ProjectsModule, BackendModule, FrontendModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
