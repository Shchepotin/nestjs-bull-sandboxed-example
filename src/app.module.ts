import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeavyJobModule } from './heavy-job/heavy-job.module';

@Module({
  imports: [HeavyJobModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
