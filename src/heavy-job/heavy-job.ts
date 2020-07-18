import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { Job } from 'bull';
import { HeavyJobService } from './heavy-job.service';

module.exports = async (job: Job) => {
  const app = await NestFactory.create(AppModule);
  const heavyJobService = app.get(HeavyJobService);
  heavyJobService.doHeavyJob(job);
  app.close();
};
