import { Module } from '@nestjs/common';
import { HeavyJobService } from './heavy-job.service';
import { HeavyJobController } from './heavy-job.controller';
import { BullModule } from '@nestjs/bull';
import { join } from 'path';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'heavy-job',
      redis: 'redis://localhost:6379',
      processors: [{ concurrency: 5, path: join(__dirname, 'heavy-job.js') }],
    }),
  ],
  providers: [HeavyJobService],
  controllers: [HeavyJobController],
})
export class HeavyJobModule {}
