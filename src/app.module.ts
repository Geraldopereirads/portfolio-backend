import {Module} from '@nestjs/common';
import {ProjectsModule} from './modules/projects/projects.module';
import { BackendModule } from './modules/backend/backend.module';
@Module({
  imports: [ProjectsModule, BackendModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
